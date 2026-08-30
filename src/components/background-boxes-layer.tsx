'use client';

import { useEffect, useRef } from 'react';

import { Boxes, getRandomBoxColor } from '@/components/ui/background-boxes';

/**
 * How far around a line of text the grid stays unlit, in px. A lit cell is
 * wider than the cursor, so this needs to be roughly half a cell to keep
 * colour from creeping under nearby glyphs.
 */
const TEXT_SAFE_PADDING = 22;

/**
 * True when the pointer is over readable content -- a line of text, a link
 * or a button -- rather than empty page background.
 *
 * Only the element's *own* text nodes are measured, not its descendants',
 * so structural wrappers (section, main, the layout container) read as
 * empty background and still light up. Measuring line boxes rather than the
 * element box means the slack around a short centred line stays reactive.
 */
const isOverContent = (
  element: Element,
  x: number,
  y: number,
  range: Range
) => {
  if (element.closest('a, button, input, textarea, select, label')) return true;

  for (const node of Array.from(element.childNodes)) {
    if (node.nodeType !== Node.TEXT_NODE) continue;
    if (!node.textContent?.trim()) continue;

    range.selectNodeContents(node);
    for (const line of Array.from(range.getClientRects())) {
      if (
        x >= line.left - TEXT_SAFE_PADDING &&
        x <= line.right + TEXT_SAFE_PADDING &&
        y >= line.top - TEXT_SAFE_PADDING &&
        y <= line.bottom + TEXT_SAFE_PADDING
      ) {
        return true;
      }
    }
  }

  return false;
};

/**
 * Site-wide animated grid backdrop, mounted once from the root layout.
 *
 * The layer paints at -z-10 so page content always sits on top. That also
 * means a grid cell is never the topmost hit target, so framer-motion's
 * whileHover never fires for it. The cells do still show up in the
 * hit-test stack, so the hover is forwarded here from a window listener
 * instead -- the same approach the old canvas glow used, and it leaves
 * clicks and text selection on the page untouched.
 *
 * Cells under text are deliberately skipped: a colour fading out behind a
 * paragraph makes it harder to read, and nobody should have to wait for the
 * backdrop to dim before they can read the page.
 *
 * Each lit cell is animated via the Web Animations API rather than inline
 * styles: no forced reflow per frame, and overlapping fade-outs leave a
 * short trail behind the cursor.
 */
export const BackgroundBoxesLayer = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduceMotion.matches) return;

    const grid = root.firstElementChild;
    if (!grid) return;

    const cells = new Set<Element>();
    for (const row of Array.from(grid.children)) {
      for (const cell of Array.from(row.children)) cells.add(cell);
    }

    const playing = new WeakMap<Element, Animation>();
    const range = document.createRange();
    let frame = 0;
    let lit: Element | null = null;

    const onMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const stack = document.elementsFromPoint(clientX, clientY);

        const cell = stack.find((element) => cells.has(element));
        if (!cell || cell === lit) return;

        // Topmost thing the reader actually sees at this point.
        const content = stack.find((element) => !root.contains(element));
        if (content && isOverContent(content, clientX, clientY, range)) {
          // Reset, so leaving the text and coming back re-lights this cell.
          lit = null;
          return;
        }

        lit = cell;
        playing.get(cell)?.cancel();
        playing.set(
          cell,
          cell.animate(
            [
              { backgroundColor: getRandomBoxColor() },
              { backgroundColor: 'rgba(0, 0, 0, 0)' },
            ],
            { duration: 900, easing: 'ease-out' }
          )
        );
      });
    };

    window.addEventListener('mousemove', onMove, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="bg-background fixed inset-0 -z-10 overflow-hidden"
    >
      <Boxes />
      <div className="bg-background pointer-events-none absolute inset-0 [mask-image:radial-gradient(transparent,white)]" />
    </div>
  );
};

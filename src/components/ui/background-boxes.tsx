'use client';

import { motion } from 'framer-motion';
import React from 'react';

import { cn } from '@/lib/utils';

// Using direct color values instead of CSS variables
export const boxColors = [
  'rgb(125 211 252)', // sky-300
  'rgb(249 168 212)', // pink-300
  'rgb(134 239 172)', // green-300
  'rgb(253 224 71)', // yellow-300
  'rgb(252 165 165)', // red-300
  'rgb(216 180 254)', // purple-300
  'rgb(147 197 253)', // blue-300
  'rgb(165 180 252)', // indigo-300
  'rgb(196 181 253)', // violet-300
];

export const getRandomBoxColor = () => {
  return boxColors[Math.floor(Math.random() * boxColors.length)];
};

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const rows = new Array(40).fill(1);
  const cols = new Array(42).fill(1);

  return (
    <div
      style={{
        transform: `translate(-25%,-25%) skewX(-48deg) skewY(14deg) scale(1) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        'absolute -top-1/4 left-1/4 z-0 flex size-full -translate-x-1/2 -translate-y-1/2 p-4',
        className
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row` + i}
          className="border-border relative h-8 w-16 border-l"
        >
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: getRandomBoxColor(),
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
              key={`col` + j}
              className="border-border relative h-8 w-16 border-r border-t"
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="text-border pointer-events-none absolute left-[-22px] top-[-14px] h-6 w-10 stroke-[1px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);

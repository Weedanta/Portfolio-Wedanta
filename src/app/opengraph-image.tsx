import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Bagus Wedanta | Front-end Developer';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          backgroundColor: '#09090b',
          backgroundImage:
            'radial-gradient(circle at 25px 25px, #27272a 2%, transparent 0%), radial-gradient(circle at 75px 75px, #27272a 2%, transparent 0%)',
          backgroundSize: '100px 100px',
          color: '#fafafa',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Top bar / status badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '8px 18px',
              borderRadius: '9999px',
              backgroundColor: '#18181b',
              border: '1px solid #27272a',
              fontSize: 18,
              fontWeight: 500,
              color: '#a1a1aa',
              letterSpacing: '0.05em',
            }}
          >
            PORTFOLIO
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '8px 18px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(34, 197, 94, 0.1)',
              border: '1px solid rgba(34, 197, 94, 0.3)',
              fontSize: 18,
              fontWeight: 500,
              color: '#4ade80',
            }}
          >
            ● Available for Opportunities
          </div>
        </div>

        {/* Main Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: '#ffffff',
              lineHeight: 1.1,
            }}
          >
            Bagus Wedanta
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 400,
              color: '#a1a1aa',
              maxWidth: '900px',
              lineHeight: 1.4,
            }}
          >
            Front-end Web & Mobile Developer • System Analysis & Design
          </div>
        </div>

        {/* Footer info */}
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid #27272a',
            paddingTop: '32px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              fontSize: 22,
              color: '#71717a',
            }}
          >
            <span>React</span>
            <span>•</span>
            <span>Next.js</span>
            <span>•</span>
            <span>TypeScript</span>
            <span>•</span>
            <span>Tailwind CSS</span>
          </div>

          <div
            style={{
              fontSize: 22,
              color: '#e4e4e7',
              fontWeight: 500,
            }}
          >
            baguswedanta.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

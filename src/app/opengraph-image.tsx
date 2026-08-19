/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og';
import { logoWedantaBase64 } from '@/lib/logo-base64';

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
          justifyContent: 'space-between',
          backgroundColor: '#09090b',
          backgroundImage:
            'radial-gradient(circle at 25px 25px, #27272a 2%, transparent 0%), radial-gradient(circle at 75px 75px, #27272a 2%, transparent 0%)',
          backgroundSize: '100px 100px',
          color: '#fafafa',
          padding: '60px 70px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Main Hero section: Logo on left, Title & Taglines on right */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '44px',
            marginTop: '24px',
          }}
        >
          {/* Circular Logo */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 190,
              height: 190,
              borderRadius: 9999,
              border: '3px solid rgba(255, 255, 255, 0.15)',
              boxShadow: '0 0 35px rgba(0, 0, 0, 0.7)',
              backgroundColor: '#18181b',
              overflow: 'hidden',
              flexShrink: 0,
            }}
          >
            {logoWedantaBase64 ? (
              <img
                src={logoWedantaBase64}
                alt="Logo Wedanta"
                width="190"
                height="190"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            ) : null}
          </div>

          {/* Title, Decorative Line & Slogans */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              gap: '10px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  fontSize: 52,
                  fontWeight: 900,
                  letterSpacing: '-0.02em',
                  color: '#ffffff',
                  textTransform: 'uppercase',
                }}
              >
                Bagus Wedanta
              </div>
              <div
                style={{
                  display: 'flex',
                  fontSize: 20,
                  fontWeight: 700,
                  color: '#38bdf8',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  padding: '4px 14px',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(56, 189, 248, 0.1)',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                }}
              >
                Fullstack Developer
              </div>
            </div>

            {/* Decorative Accent Line */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                gap: '8px',
                margin: '2px 0',
              }}
            >
              <div
                style={{
                  flex: 1,
                  height: '3px',
                  background:
                    'linear-gradient(to right, #38bdf8, #818cf8, #27272a)',
                  borderRadius: '2px',
                }}
              />
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#818cf8',
                }}
              />
            </div>

            {/* Slogans from reference */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
                marginTop: '4px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: 28,
                  fontWeight: 700,
                  color: '#e4e4e7',
                  letterSpacing: '-0.01em',
                }}
              >
                <span>IT for</span>
                <span style={{ color: '#60a5fa', marginLeft: '8px' }}>
                  Growth
                </span>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: 24,
                  fontWeight: 500,
                  color: '#a1a1aa',
                }}
              >
                <span>Coding by</span>
                <span
                  style={{
                    color: '#a78bfa',
                    fontWeight: 700,
                    marginLeft: '8px',
                  }}
                >
                  Youth
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section: Tech Stack Badges on left + Website URL on right */}
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid #27272a',
            paddingTop: '24px',
          }}
        >
          {/* Tech Stack Badges */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            {/* TS badge */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '6px 14px',
                borderRadius: '8px',
                backgroundColor: 'rgba(49, 120, 198, 0.18)',
                border: '1px solid rgba(49, 120, 198, 0.4)',
                color: '#60a5fa',
                fontSize: 16,
                fontWeight: 700,
                letterSpacing: '0.02em',
              }}
            >
              TypeScript
            </div>

            {/* React badge */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '6px 14px',
                borderRadius: '8px',
                backgroundColor: 'rgba(97, 218, 251, 0.15)',
                border: '1px solid rgba(97, 218, 251, 0.4)',
                color: '#38bdf8',
                fontSize: 16,
                fontWeight: 700,
                letterSpacing: '0.02em',
              }}
            >
              React
            </div>

            {/* Next.js badge */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '6px 14px',
                borderRadius: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                color: '#ffffff',
                fontSize: 16,
                fontWeight: 700,
                letterSpacing: '0.02em',
              }}
            >
              Next.js
            </div>

            {/* Laravel badge */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '6px 14px',
                borderRadius: '8px',
                backgroundColor: 'rgba(255, 45, 32, 0.15)',
                border: '1px solid rgba(255, 45, 32, 0.4)',
                color: '#f87171',
                fontSize: 16,
                fontWeight: 700,
                letterSpacing: '0.02em',
              }}
            >
              Laravel
            </div>

            {/* Go badge */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '6px 14px',
                borderRadius: '8px',
                backgroundColor: 'rgba(0, 173, 216, 0.15)',
                border: '1px solid rgba(0, 173, 216, 0.4)',
                color: '#22d3ee',
                fontSize: 16,
                fontWeight: 700,
                letterSpacing: '0.02em',
              }}
            >
              Go
            </div>

            {/* PostgreSQL badge */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '6px 14px',
                borderRadius: '8px',
                backgroundColor: 'rgba(51, 103, 145, 0.18)',
                border: '1px solid rgba(51, 103, 145, 0.4)',
                color: '#93c5fd',
                fontSize: 16,
                fontWeight: 700,
                letterSpacing: '0.02em',
              }}
            >
              PostgreSQL
            </div>

            {/* Docker badge */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '6px 14px',
                borderRadius: '8px',
                backgroundColor: 'rgba(36, 150, 237, 0.15)',
                border: '1px solid rgba(36, 150, 237, 0.4)',
                color: '#38bdf8',
                fontSize: 16,
                fontWeight: 700,
                letterSpacing: '0.02em',
              }}
            >
              Docker
            </div>
          </div>

          {/* URL Badge on right */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '8px 18px',
              borderRadius: '9999px',
              backgroundColor: '#18181b',
              border: '1px solid #27272a',
              fontSize: 20,
              fontWeight: 600,
              color: '#e4e4e7',
              letterSpacing: '0.02em',
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

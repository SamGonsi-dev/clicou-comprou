'use client';

import { useEffect, useRef } from 'react';

export default function GhostTracker() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) return;

    const container = containerRef.current;
    if (!container) return;

    const ghs = Array.from(container.querySelectorAll<HTMLDivElement>('.gh')).reverse();
    if (ghs.length === 0) return;

    const st = ghs.map(() => ({ x: 0, y: 0, init: 0 }));
    const kk = [0.1, 0.06, 0.04];
    const pup = ghs[0].querySelectorAll<SVGGElement>('.gp');

    let animId: number;

    function tick() {
      const heroCta = document.querySelector('.hero .cta');
      const fin = document.querySelector('.final');
      if (!heroCta || !fin) {
        animId = requestAnimationFrame(tick);
        return;
      }

      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const sy = window.scrollY;
      const span = Math.max(0, vw - 62 - 24);

      const tx = 12 + (0.5 + 0.5 * Math.sin(sy / 340)) * span;
      const ty = vh * 0.58 + Math.sin(sy / 230) * vh * 0.09;

      const heroRect = heroCta.getBoundingClientRect();
      const finRect = fin.getBoundingClientRect();
      const show = heroRect.bottom < 0 && finRect.top > vh * 0.75;

      const v = Math.abs(tx - st[0].x);
      const wob = Math.sin(performance.now() / 90) * Math.min(8, v * 0.15);

      ghs.forEach((g, i) => {
        const s = st[i];
        if (!s.init) {
          s.x = tx;
          s.y = ty;
          s.init = 1;
        }
        s.x += (tx - s.x) * kk[i];
        s.y += (ty - s.y) * kk[i];

        const tilt = Math.max(-14, Math.min(14, (tx - s.x) * 0.12)) + (i === 0 ? wob : 0);
        g.style.transform = `translate3d(${s.x.toFixed(1)}px, ${s.y.toFixed(1)}px, 0) rotate(${tilt.toFixed(1)}deg)`;
        g.classList.toggle('on', show);
      });

      const dir = Math.max(-1, Math.min(1, (tx - st[0].x) / 18));
      pup.forEach((p) => {
        p.style.transform = `translate(${(dir * 5).toFixed(1)}px, 0px)`;
      });

      animId = requestAnimationFrame(tick);
    }

    animId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div ref={containerRef} aria-hidden="true">
      <div className="gh t2">
        <div className="in">
          <svg>
            <use href="#mini" />
          </svg>
        </div>
      </div>
      <div className="gh t1">
        <div className="in">
          <svg>
            <use href="#mini" />
          </svg>
        </div>
      </div>
      <div className="gh t0">
        <div className="in">
          <svg viewBox="8 6 144 146">
            <path
              d="M80 12C44 12 16 38 16 72c0 16 7 31 18 41l-8 33 35-16c6 2 12 3 19 3 36 0 64-26 64-61S116 12 80 12Z"
              fill="url(#gb)"
              stroke="#0A8F46"
              strokeOpacity=".7"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            <path
              d="M34 40C44 24 62 17 80 17"
              stroke="#fff"
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
              opacity=".45"
            />
            <ellipse cx="58" cy="66" rx="14" ry="17" fill="#fff" />
            <g className="gp">
              <circle cx="58" cy="68" r="8.5" fill="#062319" />
              <circle cx="61" cy="64" r="3" fill="#fff" />
            </g>
            <ellipse cx="102" cy="66" rx="14" ry="17" fill="#fff" />
            <g className="gp">
              <circle cx="102" cy="68" r="8.5" fill="#062319" />
              <circle cx="105" cy="64" r="3" fill="#fff" />
            </g>
            <path
              d="M52 38q8-8 20-2M108 38q-8-8-20-2"
              stroke="#0A6B38"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M64 96q16 14 32 0"
              stroke="#062319"
              strokeWidth="5.5"
              fill="none"
              strokeLinecap="round"
            />
            <ellipse cx="38" cy="90" rx="8" ry="5" fill="#FF8A80" opacity=".45" />
            <ellipse cx="122" cy="90" rx="8" ry="5" fill="#FF8A80" opacity=".45" />
          </svg>
        </div>
      </div>
    </div>
  );
}


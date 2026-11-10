'use client';

import { useEffect, useRef } from 'react';

export default function Mascot() {
  const mascotRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const mascot = mascotRef.current;
    if (!mascot) return;

    const pupils = mascot.querySelectorAll<SVGGElement>('.pupil');
    let still = Date.now();
    let smileTimeout: NodeJS.Timeout | null = null;
    let blinkTimeout: NodeJS.Timeout | null = null;
    let wanderInterval: NodeJS.Timeout | null = null;

    function look(x: number, y: number) {
      pupils.forEach((pupil) => {
        pupil.style.transform = `translate(${x}px, ${y}px)`;
      });
    }

    function wander() {
      if (Date.now() - still < 1800) return;
      const rx = Math.round((Math.random() * 2 - 1) * 5);
      const ry = Math.round((Math.random() * 2 - 1) * 5);
      look(rx, ry);
    }

    wanderInterval = setInterval(wander, 1300);

    function triggerBlink() {
      if (!mascot) return;
      mascot.classList.add('blink');
      setTimeout(() => {
        mascot.classList.remove('blink');
      }, 130);
      blinkTimeout = setTimeout(triggerBlink, 2200 + Math.random() * 2600);
    }

    blinkTimeout = setTimeout(triggerBlink, 1600);

    function handlePointerMove(e: PointerEvent) {
      if (!mascot) return;
      const rect = mascot.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      const dist = Math.hypot(dx, dy) || 1;
      const k = Math.min(1, dist / 160);
      still = Date.now();
      look((dx / dist) * 5.5 * k, (dy / dist) * 6 * k);
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    function handleSmile() {
      if (!mascot) return;
      mascot.classList.remove('joy');
      void mascot.getBoundingClientRect();
      mascot.classList.add('joy');
      if (smileTimeout) clearTimeout(smileTimeout);
      smileTimeout = setTimeout(() => {
        mascot?.classList.remove('joy');
      }, 2800);
    }

    window.addEventListener('mascot-smile', handleSmile);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('mascot-smile', handleSmile);
      if (wanderInterval) clearInterval(wanderInterval);
      if (blinkTimeout) clearTimeout(blinkTimeout);
      if (smileTimeout) clearTimeout(smileTimeout);
    };
  }, []);

  return (
    <svg
      ref={mascotRef}
      className="mascot"
      viewBox="0 0 160 160"
      role="img"
      aria-label="Mascote do Clicou Comprou"
    >
      <defs>
        <clipPath id="mclip">
          <path d="M62 92q18 34 36 0z" />
        </clipPath>
      </defs>
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
      <g className="eyes">
        <g className="eye">
          <ellipse cx="58" cy="66" rx="14" ry="17" fill="#fff" />
          <g className="pupil">
            <circle cx="58" cy="68" r="8.5" fill="#062319" />
            <circle cx="61" cy="64" r="3" fill="#fff" />
          </g>
        </g>
        <g className="eye">
          <ellipse cx="102" cy="66" rx="14" ry="17" fill="#fff" />
          <g className="pupil">
            <circle cx="102" cy="68" r="8.5" fill="#062319" />
            <circle cx="105" cy="64" r="3" fill="#fff" />
          </g>
        </g>
      </g>
      <g className="joyeyes" fill="none" stroke="#062319" strokeWidth="6" strokeLinecap="round">
        <path d="M44 72q14-20 28 0" />
        <path d="M88 72q14-20 28 0" />
      </g>
      <path
        className="brows"
        d="M52 38q8-8 20-2M108 38q-8-8-20-2"
        stroke="#0A6B38"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      <path
        className="smile"
        d="M64 96q16 14 32 0"
        stroke="#062319"
        strokeWidth="5.5"
        fill="none"
        strokeLinecap="round"
      />
      <g className="bigsmile">
        <path
          d="M62 92q18 34 36 0z"
          fill="#062319"
          stroke="#062319"
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <g clipPath="url(#mclip)">
          <ellipse cx="80" cy="116" rx="12" ry="9" fill="#FF7A85" />
          <rect x="66" y="90" width="28" height="6" rx="2" fill="#fff" />
        </g>
      </g>
      <ellipse className="cheek" cx="38" cy="90" rx="8" ry="5" fill="#FF8A80" opacity=".45" />
      <ellipse className="cheek" cx="122" cy="90" rx="8" ry="5" fill="#FF8A80" opacity=".45" />
    </svg>
  );
}


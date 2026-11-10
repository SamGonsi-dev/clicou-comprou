'use client';

import { useEffect, useRef } from 'react';
import CTAButton from './CTAButton';

export default function FixedBottomBar() {
  const barRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    function handleScroll() {
      const hero = document.querySelector('.hero .cta');
      const fin = document.querySelector('.final');
      if (!hero || !fin || !bar) return;

      const r = hero.getBoundingClientRect();
      const f = fin.getBoundingClientRect();
      const shouldShow = r.bottom < 0 && f.top > window.innerHeight - 60;
      bar.classList.toggle('show', shouldShow);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div ref={barRef} className="bar" id="bar" aria-label="Acesso rápido ao grupo">
      <CTAButton>Entrar no grupo</CTAButton>
    </div>
  );
}


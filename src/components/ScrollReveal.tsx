'use client';

import { useEffect } from 'react';

export default function ScrollReveal() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) return;

    if (!('IntersectionObserver' in window)) return;

    document.documentElement.classList.add('js');

    const sel =
      '.demo .eyebrow, .demo h2, .demo .note, .why .eyebrow, .why h2, .list li, .how .eyebrow, .how h2, .steps li, .faq h2, details, .final h2, .legal';
    const els = Array.from(document.querySelectorAll<HTMLElement>(sel));

    els.forEach((e) => {
      e.classList.add('rv');
      const p = e.parentElement;
      if (p && (p.classList.contains('list') || p.classList.contains('steps'))) {
        const index = Array.from(p.children).indexOf(e);
        e.style.setProperty('--d', `${index * 0.09}s`);
      }
    });

    const feed = document.querySelector<HTMLElement>('.feed');
    const targets = feed ? [...els, feed] : els;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -6% 0px',
      }
    );

    targets.forEach((target) => io.observe(target));

    return () => {
      io.disconnect();
    };
  }, []);

  return null;
}


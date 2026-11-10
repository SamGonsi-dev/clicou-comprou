'use client';

import { useState } from 'react';
import { trackLeadClick, getWhatsAppLink } from '@/lib/tracking';

interface CTAButtonProps {
  children?: React.ReactNode;
  className?: string;
  showIcon?: boolean;
}

export default function CTAButton({
  children = 'Entrar no grupo',
  className = '',
  showIcon = true,
}: CTAButtonProps) {
  const [isRedirecting, setIsRedirecting] = useState(false);

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    if (isRedirecting) return;

    setIsRedirecting(true);

    // Disparo seguro do evento analítico
    trackLeadClick();

    // Notifica o mascote para sorrir
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('mascot-smile'));

      const mascot = document.querySelector('.mascot');
      if (mascot) {
        const rect = mascot.getBoundingClientRect();
        const isVisible = rect.bottom > 0 && rect.top < window.innerHeight;
        if (!isVisible) {
          mascot.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }

      const targetUrl = getWhatsAppLink();

      setTimeout(() => {
        setIsRedirecting(false);
        if (window.self !== window.top) {
          window.open(targetUrl, '_blank', 'noopener,noreferrer');
        } else {
          window.location.href = targetUrl;
        }
      }, 2000);
    }
  }

  return (
    <button
      type="button"
      className={`cta ${className}`.trim()}
      onClick={handleClick}
      disabled={isRedirecting}
      aria-label="Entrar no grupo do WhatsApp"
    >
      {showIcon && (
        <svg aria-hidden="true">
          <use href="#wa" />
        </svg>
      )}
      {children}
    </button>
  );
}


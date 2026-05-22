import { useState, useEffect } from 'react';

const WHATSAPP = 'https://wa.me/221778245710?text=' + encodeURIComponent('Bonjour Mamy & Co ! 👋 Je souhaite vous contacter.');

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* WhatsApp Float */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        style={{
          position: 'fixed',
          bottom: '28px',
          left: '28px',
          width: '58px',
          height: '58px',
          background: '#25D366',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontSize: '26px',
          textDecoration: 'none',
          boxShadow: '0 6px 24px rgba(37,211,102,0.5)',
          zIndex: 999,
          transition: 'transform 0.25s ease, box-shadow 0.25s ease',
          animation: 'waPulse 2.5s ease-in-out infinite',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.transform = 'scale(1.1)';
          (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 32px rgba(37,211,102,0.65)';
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
          (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 24px rgba(37,211,102,0.5)';
        }}
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>

      {/* Tooltip label */}
      <div style={{
        position: 'fixed',
        bottom: '40px',
        left: '96px',
        background: '#1A1A1A',
        color: '#fff',
        fontSize: '12px',
        fontWeight: 600,
        padding: '6px 12px',
        borderRadius: '8px',
        zIndex: 998,
        pointerEvents: 'none',
        whiteSpace: 'nowrap',
        opacity: 0,
        transition: 'opacity 0.2s ease',
      }}
        id="wa-tooltip"
      >
        Commandez sur WhatsApp
      </div>

      {/* Back to Top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Retour en haut"
          style={{
            position: 'fixed',
            bottom: '28px',
            right: '28px',
            width: '48px',
            height: '48px',
            background: 'var(--color-secondary-dark)',
            border: 'none',
            borderRadius: '50%',
            color: '#fff',
            fontSize: '18px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
            zIndex: 999,
            transition: 'transform 0.25s ease',
            animation: 'fadeInUp 0.3s ease',
          }}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'}
        >
          <i className="fa-solid fa-chevron-up"></i>
        </button>
      )}

      <style>{`
        @keyframes waPulse {
          0%, 100% { box-shadow: 0 6px 24px rgba(37,211,102,0.5); }
          50% { box-shadow: 0 6px 32px rgba(37,211,102,0.8), 0 0 0 10px rgba(37,211,102,0.08); }
        }
      `}</style>
    </>
  );
}

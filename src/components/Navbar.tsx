import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const WHATSAPP = 'https://wa.me/221778245710';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalItems } = useCart();

  const links = [
    { to: '/', label: 'Accueil', emoji: '🏠' },
    { to: '/boutique', label: 'Boutique', emoji: '🛍️' },
    { to: '/promotions', label: 'Promotions', emoji: '🏷️' },
    { to: '/contact', label: 'Contact', emoji: '💬' },
    { to: '/a-propos', label: 'À propos', emoji: '✨' },
  ];

  const socials = [
    { href: WHATSAPP, icon: 'fa-brands fa-whatsapp', cls: 'social-wa', label: 'WhatsApp' },
    { href: 'https://instagram.com/mamyandco', icon: 'fa-brands fa-instagram', cls: 'social-ig', label: 'Instagram' },
    { href: 'https://snapchat.com/add/mamyandco', icon: 'fa-brands fa-snapchat', cls: 'social-sc', label: 'Snapchat' },
    { href: 'https://facebook.com/mamyandco', icon: 'fa-brands fa-facebook-f', cls: 'social-fb', label: 'Facebook' },
    { href: 'https://tiktok.com/@mamyandco', icon: 'fa-brands fa-tiktok', cls: 'social-tk', label: 'TikTok' },
    { href: 'https://x.com/mamyandco', icon: 'fa-brands fa-x-twitter', cls: 'social-x', label: 'X' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        ✨ Livraison rapide à Dakar &mdash; Paiement sécurisé <strong>WAVE</strong> &amp; <strong>Orange Money</strong>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="navbar-inner">
          {/* Logo */}
          <Link to="/" className="navbar-logo">
            <div className="logo-icon">MC</div>
            <div className="logo-text">
              <span className="logo-name">MAMY &amp; CO</span>
              <span className="logo-sub">Parfums &amp; Beauté de Luxe</span>
            </div>
          </Link>

          {/* Center Links */}
          <ul className="navbar-links">
            {links.map(l => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) => isActive ? 'active' : ''}
                >
                  {l.emoji} {l.label}
                </NavLink>
              </li>
            ))}
            <li>
              <Link
                to="/commande"
                style={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  fontSize: '14px',
                  color: 'var(--color-text)',
                  padding: '8px 16px',
                  borderRadius: '50px',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(245,166,35,0.1)';
                  (e.currentTarget as HTMLElement).style.color = 'var(--color-primary)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                  (e.currentTarget as HTMLElement).style.color = 'var(--color-text)';
                }}
              >
                🛒 Panier
                {totalItems > 0 && (
                  <span style={{
                    background: 'var(--color-primary)',
                    color: '#fff',
                    borderRadius: '50%',
                    width: '18px',
                    height: '18px',
                    fontSize: '10px',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: '2px',
                  }}>
                    {totalItems}
                  </span>
                )}
              </Link>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="navbar-socials">
            {socials.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`social-icon ${s.cls}`}
                title={s.label}
                aria-label={s.label}
              >
                <i className={s.icon}></i>
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className="navbar-mobile-btn"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Menu"
          >
            <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => isActive ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              {l.emoji} {l.label}
            </NavLink>
          ))}
          <NavLink to="/commande" onClick={() => setMenuOpen(false)}>
            🛒 Panier {totalItems > 0 && `(${totalItems})`}
          </NavLink>
          <div style={{ display: 'flex', gap: '10px', padding: '12px 0', flexWrap: 'wrap' }}>
            {socials.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`social-icon ${s.cls}`}
                title={s.label}
              >
                <i className={s.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}

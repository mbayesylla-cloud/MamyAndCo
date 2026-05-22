import { Link } from 'react-router-dom';

const WHATSAPP = 'https://wa.me/221778245710';

export default function Footer() {
  const socials = [
    { href: WHATSAPP, icon: 'fa-brands fa-whatsapp', cls: 'social-wa', label: 'WhatsApp' },
    { href: 'https://instagram.com/mamyandco', icon: 'fa-brands fa-instagram', cls: 'social-ig', label: 'Instagram' },
    { href: 'https://snapchat.com/add/mamyandco', icon: 'fa-brands fa-snapchat', cls: 'social-sc', label: 'Snapchat' },
    { href: 'https://facebook.com/mamyandco', icon: 'fa-brands fa-facebook-f', cls: 'social-fb', label: 'Facebook' },
    { href: 'https://tiktok.com/@mamyandco', icon: 'fa-brands fa-tiktok', cls: 'social-tk', label: 'TikTok' },
    { href: 'https://x.com/mamyandco', icon: 'fa-brands fa-x-twitter', cls: 'social-x', label: 'X' },
  ];

  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Brand */}
        <div className="footer-col">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <div className="logo-icon" style={{
              width: '44px', height: '44px', background: 'var(--color-primary)', borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '16px', color: '#fff',
              flexShrink: 0,
            }}>MC</div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '18px', color: 'var(--color-primary)' }}>
                MAMY &amp; CO
              </div>
              <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>Parfums &amp; Beauté de Luxe</div>
            </div>
          </div>
          <p>
            Votre boutique de référence pour les parfums et huiles parfumées de luxe à Dakar, Sénégal.
            Excellence, authenticité et service personnalisé.
          </p>
          <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <span style={{
              background: 'rgba(245,166,35,0.15)', border: '1px solid rgba(245,166,35,0.3)',
              borderRadius: '50px', padding: '4px 12px', fontSize: '12px', fontWeight: 600,
              color: 'var(--color-secondary)',
            }}>🌟 Livraison Dakar</span>
            <span style={{
              background: 'rgba(245,166,35,0.15)', border: '1px solid rgba(245,166,35,0.3)',
              borderRadius: '50px', padding: '4px 12px', fontSize: '12px', fontWeight: 600,
              color: 'var(--color-secondary)',
            }}>✅ Qualité Garantie</span>
          </div>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact</h4>
          <div className="footer-contact-item">
            <i className="fa-solid fa-location-dot"></i>
            <span>Dakar, Sénégal</span>
          </div>
          <div className="footer-contact-item">
            <i className="fa-brands fa-whatsapp"></i>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">+221 77 824 67 10</a>
          </div>
          <div className="footer-contact-item">
            <i className="fa-solid fa-phone"></i>
            <a href="tel:+221778245710">+221 77 824 57 10</a>
          </div>
          <div className="footer-contact-item">
            <i className="fa-solid fa-envelope"></i>
            <a href="mailto:contact@mamyandco.sn">contact@mamyandco.sn</a>
          </div>
          <div style={{ marginTop: '12px' }}>
            <Link to="/contact" style={{
              background: 'var(--color-primary)', color: '#fff', padding: '9px 20px',
              borderRadius: '50px', fontSize: '13px', fontWeight: 600, textDecoration: 'none',
              display: 'inline-block', transition: 'all 0.25s ease',
            }}>
              💬 Nous contacter
            </Link>
          </div>
        </div>

        {/* Modes de paiement */}
        <div className="footer-col">
          <h4>Paiements acceptés</h4>
          <div className="footer-payment">
            <div className="payment-item">
              <div className="payment-logo wave">
                <span style={{ fontSize: '12px', fontWeight: 900, letterSpacing: '-1px' }}>W</span>
              </div>
              <div>
                <div style={{ fontWeight: 700 }}>WAVE</div>
                <div style={{ fontSize: '11px', color: '#999' }}>Paiement mobile</div>
              </div>
            </div>
            <div className="payment-item">
              <div className="payment-logo om">
                <i className="fa-solid fa-mobile-screen" style={{ fontSize: '14px' }}></i>
              </div>
              <div>
                <div style={{ fontWeight: 700 }}>Orange Money</div>
                <div style={{ fontSize: '11px', color: '#999' }}>Mobile Money</div>
              </div>
            </div>
            <div className="payment-item">
              <div className="payment-logo cash">
                <i className="fa-solid fa-money-bill-wave" style={{ fontSize: '12px' }}></i>
              </div>
              <div>
                <div style={{ fontWeight: 700 }}>Espèces</div>
                <div style={{ fontSize: '11px', color: '#999' }}>Paiement comptant</div>
              </div>
            </div>
          </div>
        </div>

        {/* Réseaux sociaux */}
        <div className="footer-col">
          <h4>Suivez-nous</h4>
          <p style={{ marginBottom: '16px' }}>Rejoignez notre communauté et découvrez nos nouveautés en exclusivité.</p>
          <div className="footer-socials">
            {socials.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`footer-social-link ${s.cls}`}
                title={s.label}
                aria-label={s.label}
              >
                <i className={s.icon}></i>
              </a>
            ))}
          </div>
          <div style={{ marginTop: '20px', padding: '14px', background: 'rgba(245,166,35,0.1)', borderRadius: '12px', border: '1px solid rgba(245,166,35,0.2)' }}>
            <p style={{ fontSize: '12px', color: 'var(--color-secondary)', fontWeight: 600 }}>
              📍 Horaires d'ouverture
            </p>
            <p style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>
              Lun – Sam : 8h00 – 20h00<br />
              Dim : 10h00 – 18h00
            </p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2026 <strong>Mamy &amp; Co</strong>. Tous droits réservés.</p>
        <p style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          Fait avec <span style={{ color: '#E74C3C' }}>❤️</span> à Dakar, Sénégal 🇸🇳
        </p>
      </div>
    </footer>
  );
}

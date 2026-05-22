import { PROMO_PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Promotions() {
  return (
    <div className="page-fade">
      {/* Page Hero */}
      <div className="page-hero">
        <div style={{ marginBottom: '16px', fontSize: '14px', color: 'var(--color-text-secondary)', fontWeight: 500 }}>
          <span style={{ color: 'var(--color-primary)' }}>Accueil</span> › Promotions
        </div>
        <h1>🏷️ Nos Promotions</h1>
        <p>
          Profitez de nos offres exclusives sur une sélection de parfums et huiles parfumées de luxe.
          Des prix exceptionnels pour une qualité haut de gamme.
        </p>
        <div className="promo-count-badge">
          🔥 {PROMO_PRODUCTS.length} produits en promotion
        </div>
      </div>

      {/* Promo Grid */}
      <section className="section">
        <div className="container">
          {/* Notice */}
          <div style={{
            background: 'rgba(245,166,35,0.1)', border: '1.5px solid rgba(245,166,35,0.3)',
            borderRadius: '14px', padding: '16px 24px', marginBottom: '40px',
            display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap',
          }}>
            <span style={{ fontSize: '22px' }}>⚡</span>
            <div>
              <div style={{ fontWeight: 700, color: 'var(--color-secondary-dark)', fontSize: '15px' }}>
                Offres à durée limitée
              </div>
              <div style={{ fontSize: '13px', color: '#666', marginTop: '2px' }}>
                Ces promotions sont valables jusqu'à épuisement des stocks. Ne manquez pas cette opportunité !
              </div>
            </div>
            <div style={{ marginLeft: 'auto' }}>
              <div style={{
                background: 'var(--color-primary)', color: '#fff', borderRadius: '50px',
                padding: '6px 16px', fontSize: '13px', fontWeight: 700,
              }}>
                Jusqu'à -30%
              </div>
            </div>
          </div>

          <div className="products-grid-4">
            {PROMO_PRODUCTS.map(p => (
              <ProductCard key={p.id} product={p} showPromo />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Banner */}
      <section style={{
        background: 'linear-gradient(135deg, var(--color-secondary-dark), var(--color-secondary))',
        padding: '60px 24px', textAlign: 'center',
      }}>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 36px)',
          fontWeight: 800, color: '#fff', marginBottom: '12px',
        }}>
          Vous avez des questions sur nos promos ?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '28px', fontSize: '16px' }}>
          Notre équipe est disponible 7j/7 sur WhatsApp pour vous conseiller.
        </p>
        <a
          href="https://wa.me/221778245710?text=Bonjour%20Mamy%20%26%20Co%20!%20Je%20voudrais%20des%20informations%20sur%20vos%20promotions.%20%F0%9F%8F%B7%EF%B8%8F"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          <i className="fa-brands fa-whatsapp"></i>
          Nous contacter sur WhatsApp
        </a>
      </section>
    </div>
  );
}

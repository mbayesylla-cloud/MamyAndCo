import { Link } from 'react-router-dom';
import { BEST_SELLERS } from '../data/products';
import ProductCard from '../components/ProductCard';

const WHATSAPP_NUM = '221778245710';

function buildWhatsApp(msg: string) {
  return `https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(msg)}`;
}

const COMING = [
  {
    title: 'Maquillage de Luxe',
    desc: 'Rouges à lèvres, fonds de teint et palettes de prestige.',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80',
    emoji: '💄',
  },
  {
    title: 'Bijoux & Accessoires',
    desc: "Colliers, bracelets et boucles d'oreilles artisanaux.",
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80',
    emoji: '💎',
  },
  {
    title: 'Parapharmacie',
    desc: 'Soins de la peau, huiles naturelles et produits bien-\u00eatre.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80',
    emoji: '🌿',
  },
];

export default function Home() {
  return (
    <div className="page-fade">
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero-inner">
          {/* Left */}
          <div className="animate-left">
            <div className="hero-badge">
              ✨ Nouvelle Collection 2026
            </div>
            <h1>
              L'Art du Parfum<br />
              <span>Luxe & Élégance</span><br />
              à Dakar
            </h1>
            <p>
              Découvrez notre collection exclusive de parfums d'exception et d'huiles
              parfumées de luxe. Des fragrances authentiques soigneusement sélectionnées
              pour sublimer chaque moment de votre vie.
            </p>
            <div className="hero-buttons">
              <a
                href={buildWhatsApp('Bonjour Mamy & Co ! 👋 Je souhaite passer une commande. Pouvez-vous me présenter vos disponibilités ? 🌸')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <i className="fa-brands fa-whatsapp"></i>
                Commander maintenant
              </a>
              <Link to="/promotions" className="btn-secondary">
                🏷️ Voir les promos
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="hero-image-wrap animate-right">
            <img
              src="\images\Photos.jpg"
              alt="Collection Mamy & Co"
            />
            <div className="hero-badge-float top-left">
              ⭐ Livraison Dakar
            </div>
            <div className="hero-badge-float bottom-right">
              🎁 Offres Exclusives
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS BAND ===== */}
      <div style={{
        background: 'var(--color-primary)',
        padding: '20px 24px',
      }}>
        <div style={{
          maxWidth: '1280px', margin: '0 auto',
          display: 'flex', justifyContent: 'space-around',
          flexWrap: 'wrap', gap: '12px',
        }}>
          {[
            { label: 'Clients satisfaits', value: '20+', icon: '👤' },
            { label: 'Parfums disponibles', value: '15+', icon: '🧴' },
            { label: 'Années d\'expérience', value: '1+', icon: '⭐' },
            { label: 'Livraisons Dakar', value: '100%', icon: '🚀' },
          ].map(s => (
            <div key={s.label} style={{ textAlign: 'center', color: '#fff', padding: '8px 16px' }}>
              <div style={{ fontSize: '28px', fontWeight: 800, fontFamily: 'var(--font-display)' }}>
                {s.icon} {s.value}
              </div>
              <div style={{ fontSize: '13px', opacity: 0.9, marginTop: '2px' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== BEST SELLERS ===== */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>✨ Nos Best-Sellers</h2>
            <div className="section-divider"></div>
            <p>Les parfums et huiles les plus appréciés par notre clientèle</p>
          </div>
          <div className="products-grid">
            {BEST_SELLERS.map(p => (
              <ProductCard key={p.id} product={p} showPromo={p.inPromo} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/boutique" className="btn-outline-primary">
              🛍️ Voir tous nos produits
            </Link>
          </div>
        </div>
      </section>

      {/* ===== PROMO BANNER ===== */}
      <section style={{
        background: 'linear-gradient(135deg, var(--color-secondary-dark), var(--color-secondary))',
        padding: '60px 24px',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(255,255,255,0.15)', borderRadius: '50px',
            padding: '6px 18px', color: '#fff', fontSize: '13px', fontWeight: 600, marginBottom: '20px',
          }}>
            🔥 Offres Limitées
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 800, color: '#fff', marginBottom: '16px',
          }}>
            Jusqu'à <span style={{ color: 'var(--color-primary)' }}>-30%</span> sur nos parfums
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '16px', marginBottom: '30px' }}>
            Profitez de nos promotions exclusives sur une sélection de parfums et huiles de luxe.
          </p>
          <Link to="/promotions" className="btn-primary">
            🏷️ Voir toutes les promotions
          </Link>
        </div>
      </section>

      {/* ===== COMING SOON ===== */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>🚀 Bientôt disponible</h2>
            <div className="section-divider"></div>
            <p>De nouvelles gammes arrivent prochainement dans notre boutique</p>
          </div>
          <div className="coming-grid">
            {COMING.map(c => (
              <div key={c.title} className="coming-card">
                <div style={{ position: 'relative', overflow: 'hidden', height: '220px' }}>
                  <img
                    src={c.image}
                    alt={c.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.55)', transition: 'filter 0.3s ease' }}
                  />
                  <div style={{
                    position: 'absolute', top: '50%', left: '50%',
                    transform: 'translate(-50%,-50%)', textAlign: 'center', color: '#fff',
                  }}>
                    <div style={{ fontSize: '40px', marginBottom: '8px' }}>{c.emoji}</div>
                    <div style={{
                      background: 'rgba(0,0,0,0.4)', borderRadius: '50px', padding: '4px 16px',
                      fontSize: '12px', fontWeight: 600,
                    }}>Très bientôt</div>
                  </div>
                </div>
                <div className="coming-body">
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                  <button className="btn-soon">⏳ Très bientôt</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section section-accent">
        <div className="container">
          <div className="section-header">
            <h2>💬 Ce que disent nos clients</h2>
            <div className="section-divider"></div>
          </div>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px',
          }}>
            {[
              {
                name: 'Aminata D.', note: '⭐⭐⭐⭐⭐',
                text: 'Qualité exceptionnelle ! Le parfum Oud Royal est incroyable. Livraison rapide et emballage soigné. Je recommande vivement !',
                loc: 'Plateau, Dakar',
              },
              {
                name: 'Moussa K.', note: '⭐⭐⭐⭐⭐',
                text: 'J\'ai offert une huile parfumée à ma femme et elle en est folle ! Service client très réactif sur WhatsApp. Bravo Mamy & Co !',
                loc: 'Almadies, Dakar',
              },
              {
                name: 'Fatou B.', note: '⭐⭐⭐⭐⭐',
                text: 'Les parfums sont authentiques et durent longtemps. La Rose Saphir est mon coup de cœur ! Je passe commande régulièrement.',
                loc: 'Parcelles Assainies',
              },
            ].map(t => (
              <div key={t.name} style={{
                background: '#fff', borderRadius: '16px', padding: '28px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                border: '1px solid rgba(240,216,144,0.3)',
              }}>
                <div style={{ fontSize: '18px', marginBottom: '12px' }}>{t.note}</div>
                <p style={{ fontSize: '14.5px', color: '#555', lineHeight: 1.7, marginBottom: '16px', fontStyle: 'italic' }}>
                  "{t.text}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '50%',
                    background: 'var(--color-primary)', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: '16px',
                    fontFamily: 'var(--font-display)',
                  }}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '14px', color: 'var(--color-secondary-dark)' }}>{t.name}</div>
                    <div style={{ fontSize: '12px', color: '#999' }}>{t.loc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section style={{ padding: '80px 24px', background: 'var(--color-bg)', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 40px)',
            fontWeight: 800, color: 'var(--color-secondary-dark)', marginBottom: '16px',
          }}>
            Prêt à découvrir nos parfums ?
          </h2>
          <p style={{ fontSize: '16px', color: '#666', marginBottom: '32px' }}>
            Contactez-nous sur WhatsApp pour une expérience personnalisée. Conseils gratuits et livraison rapide à Dakar.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={buildWhatsApp('Bonjour ! Je souhaite découvrir vos parfums. 🌸')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <i className="fa-brands fa-whatsapp"></i>
              Contactez-nous
            </a>
            <Link to="/boutique" className="btn-secondary">
              🛍️ Voir la boutique
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

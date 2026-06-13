import { useParams, Link } from 'react-router-dom';
import { BOUTIQUE_PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import ProductCard from '../components/ProductCard';



const BADGE_COLORS: Record<string, string> = {
  Best: '#F5A623',
  Tendance: '#E74C3C',
  Top: '#8E44AD',
  New: '#27AE60',
};

export default function ProduitDetail() {
  const { slug } = useParams();
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const product = BOUTIQUE_PRODUCTS.find(p => p.slug === slug);

  if (!product) {
    return (
      <div style={{ textAlign: 'center', padding: '100px 24px' }}>
        <div style={{ fontSize: '60px', marginBottom: '20px' }}>🔍</div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', color: 'var(--color-secondary-dark)', marginBottom: '12px' }}>
          Produit introuvable
        </h2>
        <p style={{ color: '#666', marginBottom: '28px' }}>Ce produit n'existe pas ou a été retiré.</p>
        <Link to="/boutique" className="btn-primary">🛍️ Retour à la boutique</Link>
      </div>
    );
  }

  const handleOrder = () => {
    addToCart(product);
    showToast(`✅ ${product.name} ajouté au panier !`, '🛒');
  };

  const related = BOUTIQUE_PRODUCTS
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 3);

  return (
    <div className="page-fade">
      {/* Breadcrumb */}
      <div style={{ background: 'var(--color-bg-alt)', padding: '14px 24px', borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', fontSize: '13px', color: '#888' }}>
          <Link to="/" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 500 }}>Accueil</Link>
          {' › '}
          <Link to="/boutique" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 500 }}>Boutique</Link>
          {' › '}
          <span style={{ color: 'var(--color-text)' }}>{product.name}</span>
        </div>
      </div>

      {/* Product Detail */}
      <section className="section">
        <div className="container">
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start',
          }}
            className="about-grid"
          >
            {/* Image */}
            <div style={{ position: 'relative' }}>
              <div style={{
                borderRadius: '20px', overflow: 'hidden',
                boxShadow: '0 16px 50px rgba(0,0,0,0.12)',
                height: '480px',
              }}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector('.img-fallback-detail')) {
                      const fb = document.createElement('div');
                      fb.className = 'img-fallback-detail';
                      fb.style.cssText = `width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;background:linear-gradient(135deg,#7B4A1E 0%,#F5A623 100%);`;
                      fb.innerHTML = `<span style="font-size:80px">${product.category === 'Huiles' ? '✨' : '🌹'}</span><span style="color:#fff;font-size:22px;font-weight:700;font-family:'Playfair Display',serif;text-align:center;padding:0 20px">${product.name}</span>`;
                      parent.appendChild(fb);
                    }
                  }}
                />
              </div>
              {product.discount && (
                <div style={{
                  position: 'absolute', top: '16px', right: '16px',
                  background: '#E74C3C', color: '#fff', borderRadius: '50px',
                  padding: '8px 16px', fontWeight: 800, fontSize: '18px',
                }}>
                  -{product.discount}%
                </div>
              )}
            </div>

            {/* Info */}
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                background: BADGE_COLORS[product.badge],
                color: '#fff', borderRadius: '50px', padding: '6px 16px',
                fontSize: '13px', fontWeight: 700, marginBottom: '16px',
              }}>
                {product.badge === 'Best' ? '⭐ Best-Seller' :
                 product.badge === 'Tendance' ? '🔥 Tendance' :
                 product.badge === 'Top' ? '💜 Top Vente' : '🆕 Nouveau'}
              </div>

              <h1 style={{
                fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 42px)',
                fontWeight: 800, color: 'var(--color-secondary-dark)', marginBottom: '12px',
              }}>
                {product.name}
              </h1>

              {/* Stars */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '20px' }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <i key={i} className={i < product.stars ? 'fa-solid fa-star' : 'fa-regular fa-star'}
                     style={{ color: '#F5A623', fontSize: '16px' }}></i>
                ))}
                <span style={{ color: '#888', fontSize: '14px', marginLeft: '4px' }}>
                  ({product.reviews} avis clients)
                </span>
              </div>

              <p style={{ fontSize: '16px', color: '#555', lineHeight: 1.8, marginBottom: '24px' }}>
                {product.description}
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
                <span style={{
                  background: 'rgba(245,166,35,0.1)', border: '1px solid rgba(245,166,35,0.3)',
                  borderRadius: '50px', padding: '5px 14px', fontSize: '13px', fontWeight: 600, color: 'var(--color-secondary)',
                }}>
                  📦 {product.category}
                </span>
                <span style={{
                  background: 'rgba(39,174,96,0.1)', border: '1px solid rgba(39,174,96,0.3)',
                  borderRadius: '50px', padding: '5px 14px', fontSize: '13px', fontWeight: 600, color: '#27AE60',
                }}>
                  ✅ En stock
                </span>
                <span style={{
                  background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.3)',
                  borderRadius: '50px', padding: '5px 14px', fontSize: '13px', fontWeight: 600, color: '#2563EB',
                }}>
                  🚀 Livraison Dakar
                </span>
              </div>

              {/* Price */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px',
                padding: '20px', background: 'var(--color-bg-alt)', borderRadius: '16px',
                border: '1px solid var(--color-border)',
              }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '36px', fontWeight: 800, color: 'var(--color-primary)' }}>
                  {product.price.toLocaleString('fr-FR')} FCFA
                </span>
                {product.oldPrice && product.oldPrice > 0 && (
                  <span style={{ fontSize: '20px', color: '#aaa', textDecoration: 'line-through' }}>
                    {product.oldPrice.toLocaleString('fr-FR')} FCFA
                  </span>
                )}
              </div>

              {/* CTA Buttons */}
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button
                  className="btn-primary"
                  style={{ fontSize: '16px', padding: '16px 32px', flex: 1, justifyContent: 'center', minWidth: '200px' }}
                  onClick={handleOrder}
                >
                  <i className="fa-solid fa-cart-plus"></i>
                  Ajouter au panier
                </button>
                <Link
                  to="/commande"
                  className="btn-secondary"
                  style={{ padding: '15px 24px' }}
                >
                  🛒 Voir mon panier
                </Link>
              </div>

              {/* Guarantees */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '28px' }}>
                {[
                  { icon: '✅', text: 'Produit authentique 100%' },
                  { icon: '🚀', text: 'Livraison rapide Dakar' },
                  { icon: '🔒', text: 'Paiement sécurisé' },
                  { icon: '💬', text: 'Service client à votre écoute' },
                ].map(g => (
                  <div key={g.text} style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    background: '#fff', borderRadius: '10px', padding: '10px 14px',
                    border: '1px solid rgba(240,216,144,0.4)', fontSize: '13px', color: '#555', fontWeight: 500,
                  }}>
                    <span>{g.icon}</span> {g.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="section section-alt">
          <div className="container">
            <div className="section-header">
              <h2>✨ Vous aimerez aussi</h2>
              <div className="section-divider"></div>
            </div>
            <div className="products-grid">
              {related.map(p => (
                <ProductCard key={p.id} product={p} showPromo={p.inPromo} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

import { useState } from 'react';
import { BOUTIQUE_PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';

const CATEGORIES = ['Tous', 'Parfums', 'Huiles'];

export default function Boutique() {
  const [activeFilter, setActiveFilter] = useState('Tous');
  const [search, setSearch] = useState('');

  const filtered = BOUTIQUE_PRODUCTS.filter(p => {
    const matchCat = activeFilter === 'Tous' || p.category === activeFilter;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
                        p.description.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="page-fade">
      {/* Page Hero */}
      <div className="page-hero">
        <div style={{ marginBottom: '16px', fontSize: '14px', color: 'var(--color-text-secondary)', fontWeight: 500 }}>
          <span style={{ color: 'var(--color-primary)' }}>Accueil</span> › Boutique
        </div>
        <h1>🛍️ Notre Boutique</h1>
        <p>
          Explorez notre collection complète de parfums et huiles parfumées de luxe.
          Chaque fragrance raconte une histoire unique.
        </p>
      </div>

      <section className="section">
        <div className="container">
          {/* Search + Filters */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', marginBottom: '40px' }}>
            {/* Search */}
            <div style={{ position: 'relative', width: '100%', maxWidth: '480px' }}>
              <i className="fa-solid fa-magnifying-glass" style={{
                position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)',
                color: 'var(--color-text-secondary)', fontSize: '15px',
              }}></i>
              <input
                type="text"
                placeholder="Rechercher un parfum..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{
                  width: '100%', padding: '12px 16px 12px 44px',
                  borderRadius: '50px', border: '2px solid var(--color-border)',
                  background: '#fff', fontFamily: 'var(--font-body)', fontSize: '14px',
                  outline: 'none', transition: 'border-color 0.25s ease',
                }}
                onFocus={e => (e.target.style.borderColor = 'var(--color-primary)')}
                onBlur={e => (e.target.style.borderColor = 'var(--color-border)')}
              />
            </div>

            {/* Category Filters */}
            <div className="boutique-filters">
              {CATEGORIES.map(c => (
                <button
                  key={c}
                  className={`filter-btn ${activeFilter === c ? 'active' : ''}`}
                  onClick={() => setActiveFilter(c)}
                >
                  {c === 'Tous' ? '✨ Tous' : c === 'Parfums' ? '🧴 Parfums' : '💧 Huiles et déodorants'}
                </button>
              ))}
            </div>
          </div>

          {/* Count */}
          <div style={{ marginBottom: '24px', color: 'var(--color-text-secondary)', fontSize: '14px' }}>
            <strong style={{ color: 'var(--color-secondary-dark)' }}>{filtered.length}</strong> produit{filtered.length > 1 ? 's' : ''} trouvé{filtered.length > 1 ? 's' : ''}
          </div>

          {filtered.length > 0 ? (
            <div className="products-grid-4">
              {filtered.map(p => (
                <ProductCard key={p.id} product={p} showPromo={p.inPromo} />
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '60px 24px', color: 'var(--color-text-secondary)' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔍</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', color: 'var(--color-secondary-dark)', marginBottom: '8px' }}>
                Aucun produit trouvé
              </h3>
              <p>Essayez un autre terme ou réinitialisez les filtres.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

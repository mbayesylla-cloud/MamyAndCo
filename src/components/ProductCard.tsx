import { Link } from 'react-router-dom';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';

interface Props {
  product: Product;
  showPromo?: boolean;
}

const BADGE_CLS: Record<string, string> = {
  Best: 'badge-best',
  Tendance: 'badge-tendance',
  Top: 'badge-top',
  New: 'badge-new',
};

const FALLBACK_COLORS: Record<string, string> = {
  Parfums: 'linear-gradient(135deg, #7B4A1E 0%, #F5A623 100%)',
  Huiles: 'linear-gradient(135deg, #5C3410 0%, #F0D890 100%)',
};

const FALLBACK_ICONS: Record<string, string> = {
  Parfums: '🌹',
  Huiles: '✨',
};

function ProductImage({ product }: { product: Product }) {
  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.currentTarget;
    target.style.display = 'none';
    const parent = target.parentElement;
    if (parent && !parent.querySelector('.img-fallback')) {
      const fallback = document.createElement('div');
      fallback.className = 'img-fallback';
      fallback.style.cssText = `
        width:100%; height:100%; display:flex; flex-direction:column;
        align-items:center; justify-content:center; gap:8px;
        background:${FALLBACK_COLORS[product.category] || 'linear-gradient(135deg,#7B4A1E,#F5A623)'};
      `;
      fallback.innerHTML = `
        <span style="font-size:52px">${FALLBACK_ICONS[product.category] || '💧'}</span>
        <span style="color:#fff;font-weight:600;font-size:13px;text-align:center;padding:0 12px;font-family:'Playfair Display',serif">${product.name}</span>
      `;
      parent.appendChild(fallback);
    }
  };

  return (
    <img
      src={product.image}
      alt={product.name}
      loading="lazy"
      onError={handleError}
      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
    />
  );
}

export default function ProductCard({ product, showPromo = false }: Props) {
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const handleOrder = () => {
    addToCart(product);
    showToast(`✅ ${product.name} ajouté au panier !`, '🛒');
  };

  return (
    <div className="product-card">
      <div className="product-img">
        <Link to={`/produit/${product.slug}`} style={{ display: 'block', height: '100%' }}>
          <ProductImage product={product} />
        </Link>
        <span className={`product-badge ${BADGE_CLS[product.badge]}`}>
          {product.badge === 'Best' ? '⭐ Best-Seller' :
           product.badge === 'Tendance' ? '🔥 Tendance' :
           product.badge === 'Top' ? '💜 Top Vente' : '🆕 Nouveau'}
        </span>
        {showPromo && product.discount && (
          <span className="promo-badge">-{product.discount}%</span>
        )}
      </div>
      <div className="product-body">
        <h3 className="product-name">{product.name}</h3>
        <div className="product-stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <i
              key={i}
              className={i < product.stars ? 'fa-solid fa-star' : 'fa-regular fa-star'}
              style={{ fontSize: '13px' }}
            ></i>
          ))}
          <span>({product.reviews} avis)</span>
        </div>
        <p className="product-desc">{product.description}</p>
        <div className="product-price">
          <span className="price-current">{product.price.toLocaleString('fr-FR')} FCFA</span>
          {product.oldPrice && product.oldPrice > 0 && (
            <span className="price-old">{product.oldPrice.toLocaleString('fr-FR')} FCFA</span>
          )}
        </div>
        <button
          className="btn-primary"
          style={{ width: '100%', justifyContent: 'center' }}
          onClick={handleOrder}
        >
          <i className="fa-solid fa-cart-plus"></i>
          Ajouter au panier
        </button>
      </div>
    </div>
  );
}

import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';

const WHATSAPP_NUM = '221778245710';

export default function Commande() {
  const { items, removeFromCart, updateQty, clearCart, totalPrice } = useCart();
  const { showToast } = useToast();

  const handleValidate = () => {
    if (items.length === 0) return;
    const lines = items.map(i =>
      `• ${i.product.name} x${i.quantity} = ${(i.product.price * i.quantity).toLocaleString('fr-FR')} FCFA`
    ).join('\n');
    const total = totalPrice.toLocaleString('fr-FR');
    const msg = encodeURIComponent(
      `Bonjour Mamy & Co ! 👋\n\n` +
      `🛒 *RÉCAPITULATIF DE MA COMMANDE :*\n\n` +
      `${lines}\n\n` +
      `━━━━━━━━━━━━━━━━━\n` +
      `💰 *TOTAL : ${total} FCFA*\n` +
      `━━━━━━━━━━━━━━━━━\n\n` +
      `Merci de confirmer la disponibilité et de m'indiquer le mode de paiement. 🙏`
    );
    window.open(`https://wa.me/${WHATSAPP_NUM}?text=${msg}`, '_blank');
    showToast('Redirection vers WhatsApp...', '🚀');
  };

  const handleRemove = (id: number, name: string) => {
    removeFromCart(id);
    showToast(`${name} retiré du panier`, '🗑️');
  };

  const deliveryFee = items.length > 0 ? 1500 : 0;
  const grandTotal = totalPrice + deliveryFee;

  return (
    <div className="page-fade">
      {/* Page Hero */}
      <div className="page-hero">
        <div style={{ marginBottom: '16px', fontSize: '14px', color: 'var(--color-text-secondary)', fontWeight: 500 }}>
          <span style={{ color: 'var(--color-primary)' }}>Accueil</span> › Commande
        </div>
        <h1>🛒 Mon Panier</h1>
        <p>Récapitulatif de votre commande. Validez pour finaliser via WhatsApp.</p>
      </div>

      <div className="cart-section">
        {items.length === 0 ? (
          <div className="empty-cart">
            <i className="fa-solid fa-bag-shopping"></i>
            <h3>Votre panier est vide</h3>
            <p>Découvrez nos parfums et huiles parfumées de luxe</p>
            <div style={{ marginTop: '28px', display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/boutique" className="btn-primary">
                🛍️ Voir la boutique
              </Link>
              <Link to="/promotions" className="btn-secondary">
                🏷️ Voir les promos
              </Link>
            </div>
          </div>
        ) : (
          <>
            {/* Cart Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', color: 'var(--color-secondary-dark)' }}>
                {items.length} article{items.length > 1 ? 's' : ''} dans votre panier
              </h2>
              <button
                onClick={() => { clearCart(); showToast('Panier vidé', '🗑️'); }}
                style={{
                  background: 'none', border: '1.5px solid #E74C3C', color: '#E74C3C',
                  borderRadius: '50px', padding: '8px 18px', cursor: 'pointer',
                  fontSize: '13px', fontWeight: 600, transition: 'all 0.25s ease',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = '#E74C3C';
                  (e.currentTarget as HTMLElement).style.color = '#fff';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = 'none';
                  (e.currentTarget as HTMLElement).style.color = '#E74C3C';
                }}
              >
                🗑️ Vider le panier
              </button>
            </div>

            {/* Cart Items */}
            {items.map(item => (
              <div key={item.product.id} className="cart-item">
                <img src={item.product.image} alt={item.product.name} />
                <div className="cart-item-info">
                  <div className="cart-item-name">{item.product.name}</div>
                  <div className="cart-item-price">
                    {item.product.price.toLocaleString('fr-FR')} FCFA
                  </div>
                  <div style={{ fontSize: '12px', color: '#999', marginTop: '4px' }}>
                    {item.product.category}
                  </div>
                </div>
                <div className="cart-qty-controls">
                  <button className="qty-btn" onClick={() => updateQty(item.product.id, item.quantity - 1)}>−</button>
                  <span className="qty-num">{item.quantity}</span>
                  <button className="qty-btn" onClick={() => updateQty(item.product.id, item.quantity + 1)}>+</button>
                </div>
                <div style={{ fontWeight: 700, fontSize: '16px', color: 'var(--color-primary)', minWidth: '110px', textAlign: 'right' }}>
                  {(item.product.price * item.quantity).toLocaleString('fr-FR')} FCFA
                </div>
                <button className="cart-remove" onClick={() => handleRemove(item.product.id, item.product.name)}>
                  <i className="fa-solid fa-trash-can"></i>
                </button>
              </div>
            ))}

            {/* Cart Summary */}
            <div className="cart-summary">
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: 'var(--color-secondary-dark)', marginBottom: '16px' }}>
                Récapitulatif
              </h3>
              <div className="cart-summary-row">
                <span>Sous-total</span>
                <span>{totalPrice.toLocaleString('fr-FR')} FCFA</span>
              </div>
              <div className="cart-summary-row">
                <span>Livraison Dakar</span>
                <span style={{ color: '#27AE60', fontWeight: 600 }}>
                  {deliveryFee > 0 ? `${deliveryFee.toLocaleString('fr-FR')} FCFA` : 'Gratuite'}
                </span>
              </div>
              <div className="cart-summary-row total">
                <span>Total</span>
                <span style={{ color: 'var(--color-primary)', fontSize: '22px' }}>{grandTotal.toLocaleString('fr-FR')} FCFA</span>
              </div>

              {/* Payment Methods */}
              <div style={{ margin: '16px 0', padding: '14px', background: 'rgba(245,166,35,0.08)', borderRadius: '12px', border: '1px solid rgba(245,166,35,0.2)' }}>
                <div style={{ fontSize: '13px', color: '#666', marginBottom: '8px', fontWeight: 600 }}>
                  💳 Modes de paiement acceptés :
                </div>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  {[
                    { label: 'WAVE', color: '#1E90FF' },
                    { label: 'Orange Money', color: '#FF6600' },
                    { label: 'Espèces', color: '#28A745' },
                  ].map(m => (
                    <span key={m.label} style={{
                      background: m.color, color: '#fff', borderRadius: '50px',
                      padding: '4px 12px', fontSize: '12px', fontWeight: 700,
                    }}>
                      {m.label}
                    </span>
                  ))}
                </div>
              </div>

              <button
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', padding: '16px', fontSize: '16px', marginTop: '8px' }}
                onClick={handleValidate}
              >
                <i className="fa-brands fa-whatsapp"></i>
                Valider la commande sur WhatsApp
              </button>
              <p style={{ textAlign: 'center', fontSize: '12px', color: '#999', marginTop: '12px' }}>
                🔒 Commande 100% sécurisée — Livraison rapide à Dakar
              </p>
            </div>

            {/* Continue Shopping */}
            <div style={{ textAlign: 'center', marginTop: '24px' }}>
              <Link to="/boutique" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 600, fontSize: '14px' }}>
                ← Continuer mes achats
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

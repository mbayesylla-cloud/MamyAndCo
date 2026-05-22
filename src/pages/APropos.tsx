import { Link } from 'react-router-dom';

const WHATSAPP_NUM = '221778245710';

const VALUES = [
  {
    icon: '💎',
    title: 'Excellence',
    desc: 'Nous sélectionnons rigoureusement chaque fragrance pour vous garantir des produits d\'une qualité exceptionnelle et authentique.',
  },
  {
    icon: '🌸',
    title: 'Authenticité',
    desc: 'Toutes nos huiles et parfums sont 100% authentiques, provenant de producteurs renommés à travers le monde.',
  },
  {
    icon: '💝',
    title: 'Passion',
    desc: 'Notre amour du parfum guide chaque choix. Nous partageons cette passion avec nos clients pour créer des expériences mémorables.',
  },
  {
    icon: '🚀',
    title: 'Service Rapide',
    desc: 'Livraison express à Dakar, réponse WhatsApp sous 30 minutes et suivi personnalisé de chaque commande.',
  },
  {
    icon: '🤝',
    title: 'Confiance',
    desc: 'Plus de 20 clients nous font confiance. Satisfaction garantie et retours simplifiés pour votre tranquillité.',
  },
  {
    icon: '🌍',
    title: 'Ancrage Local',
    desc: 'Fiers d\'être dakarois ! Nous soutenons l\'économie locale tout en vous offrant le meilleur de la parfumerie mondiale.',
  },
];

export default function APropos() {
  return (
    <div className="page-fade">
      {/* About Hero */}
      <section className="about-hero">
        <div className="about-grid">
          <div className="animate-left">
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(245,166,35,0.15)',
                border: '1px solid rgba(245,166,35,0.4)',
                color: 'var(--color-secondary)',
                fontSize: '13px',
                fontWeight: 600,
                padding: '8px 18px',
                borderRadius: '50px',
                marginBottom: '20px',
              }}
            >
              ✨ Notre Histoire
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(32px, 5vw, 52px)',
                fontWeight: 800,
                color: 'var(--color-secondary-dark)',
                marginBottom: '24px',
                lineHeight: 1.15,
              }}
            >
              L'Art du Parfum
              <br />
              <span style={{ color: 'var(--color-primary)' }}>
                né à Dakar
              </span>
            </h1>

            <p
              style={{
                fontSize: '16px',
                color: '#555',
                lineHeight: 1.8,
                marginBottom: '20px',
              }}
            >
              Fondée avec passion en 2025, <strong>Mamy & Co</strong> est née
              d'un rêve simple : rendre accessible la parfumerie de luxe
              authentique aux habitants de Dakar. Ce qui a commencé comme une
              petite boutique de quartier est devenu la référence des amateurs
              de fragrances au Sénégal.
            </p>

            <p
              style={{
                fontSize: '16px',
                color: '#555',
                lineHeight: 1.8,
                marginBottom: '32px',
              }}
            >
              Nous sélectionnons soigneusement chaque parfum et huile parfumée
              pour vous garantir authenticité, durée et sillage exceptionnel.
              Plus de <strong>2 000 clients satisfaits</strong> nous font
              confiance aujourd'hui.
            </p>

            <div
              style={{
                display: 'flex',
                gap: '14px',
                flexWrap: 'wrap',
              }}
            >
              <a
                href={`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(
                  'Bonjour Mamy & Co ! Je voudrais en savoir plus sur votre boutique. 😊'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <i className="fa-brands fa-whatsapp"></i>
                Nous contacter
              </a>

              <Link to="/boutique" className="btn-secondary">
                🛍️ Notre collection
              </Link>
            </div>
          </div>

          <div className="animate-right">
            <img
              src="public\images\Lot 2.jpg"
              alt="Boutique Mamy & Co"
              className="about-img"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <div
        style={{
          background: 'var(--color-primary)',
          padding: '28px 24px',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '16px',
            textAlign: 'center',
          }}
        >
          {[
            { val: '20+', label: 'Clients satisfaits', icon: '👤' },
            { val: '1+', label: "Années d'expérience", icon: '⭐' },
            { val: '10+', label: 'Parfums disponibles', icon: '🧴' },
            { val: '100%', label: 'Qualité garantie', icon: '✅' },
            { val: '24h/7j', label: 'Support WhatsApp', icon: '💬' },
          ].map((s) => (
            <div
              key={s.label}
              style={{
                color: '#fff',
                padding: '8px',
              }}
            >
              <div
                style={{
                  fontSize: '32px',
                  fontWeight: 800,
                  fontFamily: 'var(--font-display)',
                }}
              >
                {s.icon} {s.val}
              </div>

              <div
                style={{
                  fontSize: '13px',
                  opacity: 0.9,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Values */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>🌟 Nos Valeurs</h2>
            <div className="section-divider"></div>
            <p>Ce qui nous guide dans notre mission quotidienne</p>
          </div>

          <div className="values-grid">
            {VALUES.map((v) => (
              <div key={v.title} className="value-card">
                <div className="value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background:
            'linear-gradient(135deg, var(--color-secondary-dark), var(--color-secondary))',
          padding: '70px 24px',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 800,
            color: '#fff',
            marginBottom: '16px',
          }}
        >
          Rejoignez la famille Mamy & Co
        </h2>

        <p
          style={{
            color: 'rgba(255,255,255,0.85)',
            fontSize: '16px',
            marginBottom: '32px',
            maxWidth: '500px',
            margin: '0 auto 32px',
          }}
        >
          Découvrez nos fragrances d'exception et laissez-vous envoûter par
          l'art du parfum.
        </p>

        <div
          style={{
            display: 'flex',
            gap: '14px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <a
            href={`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(
              'Bonjour ! Je souhaite commander un parfum Mamy & Co. 🌸'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <i className="fa-brands fa-whatsapp"></i>
            Commander maintenant
          </a>

          <Link
            to="/boutique"
            style={{
              background: 'rgba(255,255,255,0.15)',
              color: '#fff',
              border: '2px solid rgba(255,255,255,0.4)',
              padding: '13px 28px',
              borderRadius: '50px',
              fontFamily: 'var(--font-body)',
              fontSize: '15px',
              fontWeight: 600,
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.25s ease',
            }}
          >
            🛍️ Voir la boutique
          </Link>
        </div>
      </section>
    </div>
  );
}
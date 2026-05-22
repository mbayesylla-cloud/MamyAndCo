import { useState } from 'react';

const WHATSAPP_NUM = '221778245710';

interface FaqItem {
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
  {
    q: 'Comment passer une commande ?',
    a: 'Pour passer commande, cliquez sur le bouton "Commander" de votre produit préféré. Vous serez redirigé vers WhatsApp avec un message pré-rempli. Notre équipe confirmera votre commande et vous guidera pour le paiement et la livraison.',
  },
  {
    q: 'Quels sont les modes de paiement acceptés ?',
    a: 'Nous acceptons WAVE, Orange Money et les espèces. Pour WAVE et Orange Money, envoyez le paiement au +221 77 824 57 10 et partagez la capture de la transaction sur WhatsApp.',
  },
  {
    q: 'Livrez-vous à domicile à Dakar ?',
    a: 'Oui ! Nous livrons partout à Dakar et ses environs. Les frais et délais de livraison varient selon votre quartier. Contactez-nous sur WhatsApp pour avoir un devis personnalisé.',
  },
  {
    q: 'Les parfums sont-ils 100% authentiques ?',
    a: 'Absolument ! Tous nos parfums et huiles parfumées sont 100% authentiques et de haute qualité. Nous travaillons uniquement avec des fournisseurs de confiance pour vous garantir l\'excellence.',
  },
  {
    q: 'Puis-je retourner un produit ?',
    a: 'Oui, dans les 48h suivant la réception si le produit est défectueux ou ne correspond pas à la commande. Contactez-nous immédiatement sur WhatsApp avec photos à l\'appui.',
  },
];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', subject: '', orderNum: '', message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Bonjour Mamy & Co ! 👋\n\n` +
      `📋 *FORMULAIRE DE CONTACT*\n\n` +
      `👤 Nom : ${form.name}\n` +
      `📧 Email : ${form.email}\n` +
      `📞 Téléphone : ${form.phone}\n` +
      `📌 Sujet : ${form.subject}\n` +
      `🛒 N° de commande : ${form.orderNum || 'N/A'}\n\n` +
      `💬 *Message :*\n${form.message}\n\n` +
      `Merci de me répondre dès que possible ! 🙏`
    );
    window.open(`https://wa.me/${WHATSAPP_NUM}?text=${msg}`, '_blank');
  };

  const toggleFaq = (i: number) => {
    setOpenFaq(prev => prev === i ? null : i);
  };

  const SOCIALS = [
    { name: 'WhatsApp', handle: '+221 77 824 67 10', icon: 'fa-brands fa-whatsapp', color: '#25D366', href: `https://wa.me/${WHATSAPP_NUM}` },
    { name: 'Instagram', handle: '@mamyandco', icon: 'fa-brands fa-instagram', color: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)', href: 'https://instagram.com/mamyandco' },
    { name: 'Snapchat', handle: 'mamyandco', icon: 'fa-brands fa-snapchat', color: '#FFFC00', href: 'https://snapchat.com/add/mamyandco', dark: true },
    { name: 'Facebook', handle: 'Mamy & Co', icon: 'fa-brands fa-facebook-f', color: '#1877F2', href: 'https://facebook.com/mamyandco' },
    { name: 'TikTok', handle: '@mamyandco', icon: 'fa-brands fa-tiktok', color: '#1A1A1A', href: 'https://tiktok.com/@mamyandco' },
    { name: 'X (Twitter)', handle: '@mamyandco', icon: 'fa-brands fa-x-twitter', color: '#000', href: 'https://x.com/mamyandco' },
  ];

  return (
    <div className="page-fade">
      {/* Hero */}
      <div className="page-hero">
        <div style={{ marginBottom: '16px', fontSize: '14px', color: 'var(--color-text-secondary)', fontWeight: 500 }}>
          <span style={{ color: 'var(--color-primary)' }}>Accueil</span> › Contact
        </div>
        <h1>💬 Contactez-nous</h1>
        <p>
          Notre équipe est à votre disposition 7j/7 pour répondre à vos questions,
          vous conseiller et traiter vos commandes rapidement.
        </p>
        <div style={{ marginTop: '24px' }}>
          <a
            href={`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent('Bonjour Mamy & Co ! 👋 Je souhaite vous contacter.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: '16px', padding: '15px 32px' }}
          >
            <i className="fa-brands fa-whatsapp"></i>
            Contactez-nous sur WhatsApp
          </a>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {/* Quick Contacts */}
          <div className="quick-contact" style={{ marginBottom: '50px' }}>
            <a
              href={`https://wa.me/${WHATSAPP_NUM}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <i className="fa-brands fa-whatsapp"></i>
              WhatsApp
            </a>
            <a
              href="tel:+221778245710"
              className="btn-primary"
              style={{ background: 'var(--color-secondary)', boxShadow: '0 4px 20px rgba(123,74,30,0.3)' }}
            >
              <i className="fa-solid fa-phone"></i>
              Appeler
            </a>
            <a
              href="mailto:contact@mamyandco.sn"
              className="btn-primary"
              style={{ background: '#2563EB', boxShadow: '0 4px 20px rgba(37,99,235,0.3)' }}
            >
              <i className="fa-solid fa-envelope"></i>
              Email
            </a>
          </div>

          {/* Social Cards */}
          <div className="section-header">
            <h2>Nos Réseaux Sociaux</h2>
            <div className="section-divider"></div>
            <p>Rejoignez notre communauté sur vos plateformes préférées</p>
          </div>
          <div className="contact-social-grid" style={{ marginBottom: '60px' }}>
            {SOCIALS.map(s => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-card"
                style={{
                  background: s.color,
                  color: s.dark ? '#1A1A1A' : '#fff',
                }}
              >
                <i className={s.icon}></i>
                <h4>{s.name}</h4>
                <p>{s.handle}</p>
              </a>
            ))}
          </div>

          {/* Horaires */}
          <div className="horaires-box">
            <h3>🕐 Nos Horaires</h3>
            <p>🗓️ <strong>Lundi – Samedi :</strong> 8h00 – 20h00</p>
            <p>🗓️ <strong>Dimanche :</strong> 10h00 – 18h00</p>
            <p style={{ marginTop: '12px', opacity: 0.9, fontSize: '14px' }}>
              📍 Dakar, Sénégal — Réponse WhatsApp sous <strong>30 min</strong>
            </p>
          </div>

          {/* Payment Cards */}
          <div className="section-header" style={{ marginTop: '60px' }}>
            <h2>💳 Modes de Paiement</h2>
            <div className="section-divider"></div>
            <p>Paiement 100% sécurisé avec vos méthodes préférées</p>
          </div>
          <div className="payment-cards-grid">
            <div className="payment-card-big">
              <div className="logo-big" style={{ background: '#1E90FF' }}>
                <span style={{ fontWeight: 900, fontSize: '20px' }}>W</span>
              </div>
              <h4>WAVE</h4>
              <p>Paiement mobile rapide et sécurisé via l'application WAVE. Envoi instantané au +221 77 824 67 10.</p>
            </div>
            <div className="payment-card-big">
              <div className="logo-big" style={{ background: '#FF6600' }}>
                <i className="fa-solid fa-mobile-screen"></i>
              </div>
              <h4>Orange Money</h4>
              <p>Transfert sécurisé via Orange Money. Envoyez le montant au +221 77 824 67 10 et partagez la confirmation.</p>
            </div>
            <div className="payment-card-big">
              <div className="logo-big" style={{ background: '#28A745' }}>
                <i className="fa-solid fa-money-bill-wave"></i>
              </div>
              <h4>Espèces</h4>
              <p>Paiement en espèces à la livraison ou en boutique. Montant exact apprécié pour faciliter la transaction.</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="section-header" style={{ marginTop: '60px' }}>
            <h2>📝 Envoyez-nous un message</h2>
            <div className="section-divider"></div>
            <p>Remplissez le formulaire et nous vous contacterons sur WhatsApp</p>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label>👤 Nom complet *</label>
                <input
                  name="name" required value={form.name} onChange={handleChange}
                  placeholder="Votre nom et prénom"
                />
              </div>
              <div className="form-group">
                <label>📧 Adresse email *</label>
                <input
                  name="email" type="email" required value={form.email} onChange={handleChange}
                  placeholder="votre@email.com"
                />
              </div>
              <div className="form-group">
                <label>📞 Téléphone *</label>
                <input
                  name="phone" required value={form.phone} onChange={handleChange}
                  placeholder="+221 77 000 00 00"
                />
              </div>
              <div className="form-group">
                <label>📌 Sujet *</label>
                <select name="subject" required value={form.subject} onChange={handleChange}>
                  <option value="">Choisir un sujet</option>
                  <option value="Commande">Passer une commande</option>
                  <option value="Information">Demande d'information</option>
                  <option value="Livraison">Suivi de livraison</option>
                  <option value="Retour">Retour / Réclamation</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>
              <div className="form-group full">
                <label>🛒 Numéro de commande (si applicable)</label>
                <input
                  name="orderNum" value={form.orderNum} onChange={handleChange}
                  placeholder="ex: CMD-2026-001"
                />
              </div>
              <div className="form-group full">
                <label>💬 Votre message *</label>
                <textarea
                  name="message" required value={form.message} onChange={handleChange}
                  placeholder="Décrivez votre demande en détail..."
                  rows={5}
                ></textarea>
              </div>
              <div className="form-group full" style={{ marginTop: '8px' }}>
                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '16px', fontSize: '16px' }}>
                  <i className="fa-brands fa-whatsapp"></i>
                  Envoyer via WhatsApp
                </button>
              </div>
            </div>
          </form>

          {/* FAQ */}
          <div className="section-header" style={{ marginTop: '70px' }}>
            <h2>❓ Questions fréquentes</h2>
            <div className="section-divider"></div>
            <p>Trouvez rapidement les réponses à vos questions</p>
          </div>
          <div className="faq-list">
            {FAQS.map((faq, i) => (
              <div key={i} className={`faq-item ${openFaq === i ? 'open' : ''}`}>
                <div className="faq-question" onClick={() => toggleFaq(i)}>
                  <span>{faq.q}</span>
                  <i className={`fa-solid fa-chevron-down faq-chevron`}></i>
                </div>
                <div className="faq-answer">
                  <div className="faq-answer-inner">{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

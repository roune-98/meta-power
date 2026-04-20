import { motion } from 'framer-motion';
import './Footer.css';

export default function Footer() {
  const nav = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer__glow" />
      <div className="footer__container">
        {/* Top row */}
        <div className="footer__top">
          {/* Logo */}
          <div className="footer__logo">
            <span className="footer__logo-meta">META</span>
            <span className="footer__logo-power">POWER</span>
            <span className="footer__logo-gym">GYM</span>
            <p className="footer__tagline">Entraîne-toi comme un guerrier. Deviens inarrêtable.</p>
          </div>

          {/* Links */}
          <div className="footer__nav">
            <h4 className="footer__nav-title">Navigation</h4>
            {[
              { href: '#hero',    label: 'Accueil' },
              { href: '#pricing', label: 'Tarifs' },
              { href: '#services',label: 'Services' },
              { href: '#coaches', label: 'Coachs' },
              { href: '#contact', label: 'Contact' },
            ].map((item, i) => (
              <button
                key={i}
                className="footer__link"
                onClick={() => nav(item.href)}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Services list */}
          <div className="footer__nav">
            <h4 className="footer__nav-title">Services</h4>
            {['Musculation', 'Boxe & MMA', 'Cardio Training', 'Coaching Perso', 'Nutrition', 'Récupération'].map((s, i) => (
              <span key={i} className="footer__link footer__link--static">{s}</span>
            ))}
          </div>

          {/* Contact info */}
          <div className="footer__contact">
            <h4 className="footer__nav-title">Contact</h4>
            <span className="footer__contact-item">📍 Dakar, Sénégal</span>
            <span className="footer__contact-item">📞 +221 XX XXX XX XX</span>
            <span className="footer__contact-item">📧 contact@metapowergym.sn</span>
            <span className="footer__contact-item">🕐 Lun–Sam 6h–22h</span>
          </div>
        </div>

        {/* Divider */}
        <div className="footer__divider" />

        {/* Bottom */}
        <div className="footer__bottom">
          <span className="footer__copy">
            © 2025 META POWER GYM — Dakar, Sénégal. Tous droits réservés.
          </span>
          <span className="footer__made">
            Conçu pour les <span className="text--gold">guerriers</span>
          </span>
        </div>
      </div>

      {/* Back to top */}
      <motion.button
        className="footer__totop"
        onClick={() => nav('#hero')}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        ↑
      </motion.button>
    </footer>
  );
}

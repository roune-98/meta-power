import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const links = [
  { label: 'Accueil', href: '#hero' },
  { label: 'Tarifs', href: '#pricing' },
  { label: 'Services', href: '#services' },
  { label: 'Coachs', href: '#coaches' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setActiveLink(href);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'navbar--solid' : ''}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="navbar__inner">
        {/* Logo */}
        <motion.div
          className="navbar__logo"
          whileHover={{ scale: 1.05 }}
          onClick={() => handleNav('#hero')}
        >
          <span className="logo__meta">META</span>
          <span className="logo__power">POWER</span>
          <span className="logo__gym">GYM</span>
        </motion.div>

        {/* Desktop Links */}
        <ul className="navbar__links">
          {links.map((link) => (
            <li key={link.href}>
              <button
                className={`navbar__link ${activeLink === link.href ? 'navbar__link--active' : ''}`}
                onClick={() => handleNav(link.href)}
              >
                {link.label}
                <span className="navbar__link-line" />
              </button>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <motion.button
          className="navbar__cta"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => handleNav('#contact')}
        >
          Rejoindre
        </motion.button>

        {/* Burger */}
        <button
          className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {links.map((link, i) => (
              <motion.button
                key={link.href}
                className="navbar__mobile-link"
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => handleNav(link.href)}
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              className="navbar__cta navbar__cta--mobile"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              onClick={() => handleNav('#contact')}
            >
              Rejoindre maintenant
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

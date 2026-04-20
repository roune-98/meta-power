import { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const formules = [
  'Séance Libre (2 000 FCFA)',
  'Mensualité (20 000 FCFA / mois)',
  'Coaching Personnalisé',
];

const objectifs = [
  'Perte de poids',
  'Prise de masse musculaire',
  'Amélioration cardio',
  'Apprentissage arts martiaux',
  'Performance sportive',
  'Bien-être général',
];

const contactInfo = [
  { icon: '📍', label: 'Adresse',   value: 'Dakar, Sénégal — Zone Fitness Élite' },
  { icon: '📞', label: 'Téléphone', value: '+221 XX XXX XX XX' },
  { icon: '📧', label: 'Email',     value: 'contact@metapowergym.sn' },
  { icon: '🕐', label: 'Horaires',  value: 'Lun–Sam : 6h00–22h00 · Dim : 8h–18h' },
];

export default function Contact() {
  const [form, setForm]         = useState({ prenom: '', telephone: '', formule: '', objectif: '' });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused]   = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ prenom: '', telephone: '', formule: '', objectif: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__bg" />

      <div className="contact__container">
        <motion.div
          className="section-header"
          initial={{ y: 40 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-tag">Première étape</span>
          <h2 className="section-title">REJOIGNEZ-NOUS</h2>
          <p className="section-subtitle">
            Remplissez le formulaire et notre équipe vous contacte sous 24h.
          </p>
        </motion.div>

        <div className="contact__layout">
          {/* Form */}
          <motion.div
            className="contact__form-wrap"
            initial={{ x: -30 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className={`contact__field ${focused === 'prenom' ? 'contact__field--focused' : ''}`}>
                <label className="contact__label">Prénom *</label>
                <input
                  className="contact__input"
                  type="text"
                  name="prenom"
                  value={form.prenom}
                  onChange={handleChange}
                  onFocus={() => setFocused('prenom')}
                  onBlur={() => setFocused('')}
                  placeholder="Votre prénom"
                  required
                />
              </div>

              <div className={`contact__field ${focused === 'telephone' ? 'contact__field--focused' : ''}`}>
                <label className="contact__label">Téléphone *</label>
                <input
                  className="contact__input"
                  type="tel"
                  name="telephone"
                  value={form.telephone}
                  onChange={handleChange}
                  onFocus={() => setFocused('telephone')}
                  onBlur={() => setFocused('')}
                  placeholder="+221 XX XXX XX XX"
                  required
                />
              </div>

              <div className={`contact__field ${focused === 'formule' ? 'contact__field--focused' : ''}`}>
                <label className="contact__label">Formule choisie *</label>
                <select
                  className="contact__select"
                  name="formule"
                  value={form.formule}
                  onChange={handleChange}
                  onFocus={() => setFocused('formule')}
                  onBlur={() => setFocused('')}
                  required
                >
                  <option value="">Choisissez une formule</option>
                  {formules.map((f, i) => <option key={i} value={f}>{f}</option>)}
                </select>
              </div>

              <div className={`contact__field ${focused === 'objectif' ? 'contact__field--focused' : ''}`}>
                <label className="contact__label">Objectif principal *</label>
                <select
                  className="contact__select"
                  name="objectif"
                  value={form.objectif}
                  onChange={handleChange}
                  onFocus={() => setFocused('objectif')}
                  onBlur={() => setFocused('')}
                  required
                >
                  <option value="">Quel est votre objectif ?</option>
                  {objectifs.map((o, i) => <option key={i} value={o}>{o}</option>)}
                </select>
              </div>

              <motion.button
                type="submit"
                className="contact__submit"
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(229,9,20,0.6)' }}
                whileTap={{ scale: 0.98 }}
              >
                {submitted ? '✓ Inscription envoyée !' : "S'inscrire maintenant"}
              </motion.button>
            </form>
          </motion.div>

          {/* Right side */}
          <motion.div
            className="contact__info-side"
            initial={{ x: 30 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="contact__info-cards">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={i}
                  className="contact__info-card"
                  whileHover={{ x: 4 }}
                >
                  <span className="contact__info-icon">{info.icon}</span>
                  <div>
                    <span className="contact__info-label">{info.label}</span>
                    <span className="contact__info-value">{info.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="contact__map">
              <iframe
                title="META POWER GYM Location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-17.5%2C14.6%2C-17.3%2C14.8&layer=mapnik"
                width="100%"
                height="240"
                style={{ border: 0, borderRadius: '12px', filter: 'invert(90%) hue-rotate(180deg) brightness(0.7) contrast(1.1)' }}
                loading="lazy"
              />
              <div className="contact__map-overlay">
                <span>📍 META POWER GYM — Dakar</span>
              </div>
            </div>

            <div className="contact__socials">
              <a href="#" className="contact__social contact__social--whatsapp"><span>💬</span> WhatsApp</a>
              <a href="#" className="contact__social contact__social--insta"><span>📸</span> Instagram</a>
              <a href="#" className="contact__social contact__social--fb"><span>👤</span> Facebook</a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <motion.a
        href="https://wa.me/221XXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="whatsapp-float__icon">💬</span>
        <span className="whatsapp-float__label">WhatsApp</span>
      </motion.a>
    </section>
  );
}

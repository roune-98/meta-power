import { motion } from 'framer-motion';
import './Rules.css';

const rules = [
  {
    category: 'HYGIÈNE',
    color: 'gold',
    icon: '✨',
    items: [
      { icon: '🧴', text: 'Essuyez les équipements après utilisation' },
      { icon: '🏊', text: 'Utilisez toujours une serviette personnelle' },
      { icon: '👟', text: 'Chaussures de sport obligatoires' },
      { icon: '🚿', text: 'Douchez-vous après chaque séance' },
    ],
  },
  {
    category: 'RESPECT',
    color: 'red',
    icon: '🤝',
    items: [
      { icon: '🔇', text: 'Limitez le bruit et les cris excessifs' },
      { icon: '🏋️', text: 'Rangez les poids après utilisation' },
      { icon: '📵', text: 'Limitez le temps sur les machines en heure de pointe' },
      { icon: '⚠️', text: 'Signalez tout équipement endommagé' },
    ],
  },
];

export default function Rules() {
  return (
    <section id="rules" className="rules">
      <div className="rules__bg-pattern" />

      <div className="rules__container">
        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ y: 40 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-tag">Vivre ensemble</span>
          <h2 className="section-title">RÈGLES DE LA SALLE</h2>
          <p className="section-subtitle">
            Le respect mutuel est la base d'un environnement d'entraînement optimal.
          </p>
        </motion.div>

        {/* Rules Grid */}
        <div className="rules__grid">
          {rules.map((rule, i) => (
            <motion.div
              key={i}
              className={`rules__card rules__card--${rule.color}`}
              initial={{ x: -20 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
            >
              <div className="rules__card-header">
                <span className="rules__card-icon">{rule.icon}</span>
                <h3 className="rules__card-title">{rule.category}</h3>
              </div>

              <div className="rules__card-divider" />

              <ul className="rules__items">
                {rule.items.map((item, j) => (
                  <li key={j} className="rules__item">
                    <span className="rules__item-icon">{item.icon}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Banner */}
        <motion.div
          className="rules__banner"
          initial={{ y: 30 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.01 }}
        >
          <div className="rules__banner-glow" />
          <span className="rules__banner-icon">🏴</span>
          <div className="rules__banner-text">
            <span className="rules__banner-main">SERVIETTE OBLIGATOIRE</span>
            <span className="rules__banner-sub">Sans serviette, pas d'accès à la salle — règle non négociable</span>
          </div>
          <span className="rules__banner-icon">🏴</span>
        </motion.div>
      </div>
    </section>
  );
}

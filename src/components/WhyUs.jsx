import { motion } from 'framer-motion';
import './WhyUs.css';

const reasons = [
  {
    icon: '🏆',
    title: 'Coaching d\'Élite',
    description: 'Nos coachs certifiés créent des programmes 100% personnalisés adaptés à vos objectifs réels.',
    color: 'gold',
  },
  {
    icon: '⚡',
    title: 'Équipements Premium',
    description: 'Matériel professionnel de dernière génération renouvelé régulièrement pour une performance optimale.',
    color: 'red',
  },
  {
    icon: '🔥',
    title: 'Ambiance Unique',
    description: 'Une communauté soudée, motivante et bienveillante qui pousse chacun à se surpasser chaque jour.',
    color: 'gold',
  },
  {
    icon: '📈',
    title: 'Résultats Garantis',
    description: 'Méthodes éprouvées avec suivi régulier de vos progrès pour des transformations visibles et durables.',
    color: 'red',
  },
  {
    icon: '🕐',
    title: 'Horaires Flexibles',
    description: 'Ouvert 7j/7 de 6h à 23h pour s\'adapter à votre emploi du temps sans compromis.',
    color: 'gold',
  },
  {
    icon: '💰',
    title: 'Tarifs Accessibles',
    description: 'Des formules adaptées à tous les budgets, sans frais cachés ni engagement forcé.',
    color: 'red',
  },
];

const stats = [
  { value: '500+', label: 'Membres Actifs' },
  { value: '15+', label: 'Coachs Certifiés' },
  { value: '8', label: 'Années d\'Expérience' },
  { value: '98%', label: 'Taux de Satisfaction' },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="whyus">
      <div className="whyus__bg-accent" />
      <div className="whyus__container">
        <motion.div
          className="section-header"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-tag">Notre différence</span>
          <h2 className="section-title">POURQUOI CHOISIR META POWER</h2>
          <p className="section-subtitle">
            Pas juste une salle. Un environnement d'excellence conçu pour forger les champions.
          </p>
        </motion.div>

        <div className="whyus__grid">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              className={`whyus__card whyus__card--${reason.color}`}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <div className={`whyus__icon-wrap whyus__icon-wrap--${reason.color}`}>
                <span className="whyus__icon">{reason.icon}</span>
              </div>
              <div className="whyus__card-content">
                <h3 className="whyus__card-title">{reason.title}</h3>
                <p className="whyus__card-desc">{reason.description}</p>
              </div>
              <div className={`whyus__card-bar whyus__card-bar--${reason.color}`} />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="whyus__stats"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {stats.map((stat, i) => (
            <div key={i} className="whyus__stat">
              <span className="whyus__stat-value">{stat.value}</span>
              <span className="whyus__stat-label">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

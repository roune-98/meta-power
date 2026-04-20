import { motion } from 'framer-motion';
import './Pricing.css';

const plans = [
  {
    name: 'Séance Libre',
    price: '2 000',
    unit: 'FCFA / séance',
    badge: null,
    features: [
      'Accès libre à la salle',
      'Équipements musculation',
      'Vestiaires & douches',
      'Sans engagement',
      'Disponible 7j/7',
    ],
    cta: 'Commencer',
    variant: 'basic',
    icon: '🏋️',
  },
  {
    name: 'Mensualité',
    price: '20 000',
    unit: 'FCFA / mois',
    badge: 'POPULAIRE 🔥',
    features: [
      'Accès illimité à la salle',
      'Tous les équipements',
      'Cours collectifs inclus',
      'Suivi de progression',
      'Programme personnalisé',
      'Vestiaires premium',
    ],
    cta: 'Rejoindre',
    variant: 'popular',
    icon: '⚡',
  },
  {
    name: 'Coaching Perso',
    price: 'SUR DEVIS',
    unit: 'Coach dédié',
    badge: 'PREMIUM',
    features: [
      'Coach personnel attitré',
      'Programme 100% personnalisé',
      'Suivi nutritionnel',
      'Sessions privées',
      'Disponibilité prioritaire',
      'Bilan mensuel détaillé',
    ],
    cta: 'Contacter',
    variant: 'premium',
    icon: '👑',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <div className="pricing__bg" />
      <div className="pricing__glow" />

      <div className="pricing__container">
        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ y: 40 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-tag">Investissez en vous</span>
          <h2 className="section-title">NOS OFFRES</h2>
          <p className="section-subtitle">
            Des formules adaptées à chaque guerrier. Pas d'excuse, commencez aujourd'hui.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="pricing__cards">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              className={`pricing__card pricing__card--${plan.variant}`}
              initial={{ y: 60 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: 'easeOut' }}
              whileHover={{ y: -14, scale: 1.02, transition: { duration: 0.3 } }}
            >
              {plan.badge && (
                <div className={`pricing__badge pricing__badge--${plan.variant}`}>
                  {plan.badge}
                </div>
              )}

              <div className="pricing__icon">{plan.icon}</div>
              <h3 className="pricing__name">{plan.name}</h3>

              <div className="pricing__price-wrap">
                <span className="pricing__price">{plan.price}</span>
                <span className="pricing__unit">{plan.unit}</span>
              </div>

              <div className="pricing__divider" />

              <ul className="pricing__features">
                {plan.features.map((f, j) => (
                  <li key={j} className="pricing__feature">
                    <span className="pricing__feature-check">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <motion.button
                className={`pricing__cta pricing__cta--${plan.variant}`}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

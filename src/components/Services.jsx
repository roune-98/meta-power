import { useState } from 'react';
import { motion } from 'framer-motion';
import './Services.css';

const services = [
  { icon: '🏋️', name: 'Musculation',         description: 'Équipements de pointe, zones dédiées par groupe musculaire.', color: 'gold' },
  { icon: '🥊', name: 'Boxing / Sparring',    description: 'Ring professionnel, sacs de frappe, entraînement technique.',  color: 'red'  },
  { icon: '🏃', name: 'Cardio Training',      description: 'Tapis, vélos, rameurs — zone cardio dernière génération.',     color: 'gold' },
  { icon: '🎯', name: 'Coaching Perso',       description: 'Programme 100% sur mesure avec un coach certifié.',            color: 'red'  },
  { icon: '🥗', name: 'Nutrition',            description: 'Plans alimentaires adaptés à vos objectifs de transformation.',color: 'gold' },
  { icon: '💆', name: 'Récupération',         description: 'Stretching, massage, cryothérapie — récupérez mieux.',        color: 'red'  },
  { icon: '👥', name: 'Cours Collectifs',     description: 'HIIT, CrossFit, Combat — ambiance groupe ultra-motivante.',   color: 'gold' },
  { icon: '📊', name: 'Suivi Digital',        description: 'App dédiée : progression, stats, programmes et objectifs.',  color: 'red'  },
];

function ServiceCard({ service, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
    >
      <div
        className={`service__card service__card--${service.color}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          transform: hovered
            ? 'perspective(800px) rotateX(-4deg) rotateY(4deg) translateY(-8px) scale(1.03)'
            : 'perspective(800px) rotateX(0) rotateY(0)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        }}
      >
        <div className="service__card-glow" />
        <div className={`service__icon service__icon--${service.color}`}>{service.icon}</div>
        <h3 className="service__name">{service.name}</h3>
        <p className="service__desc">{service.description}</p>
        <div className={`service__line service__line--${service.color}`} />
        <motion.div
          className="service__arrow"
          animate={hovered ? { x: 4, opacity: 1 } : { x: 0, opacity: 0.4 }}
          transition={{ duration: 0.2 }}
        >→</motion.div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="services__container">
        <motion.div
          className="section-header"
          initial={{ y: 40 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-tag">Ce qu'on offre</span>
          <h2 className="section-title">NOS SERVICES</h2>
          <p className="section-subtitle">
            Tout ce qu'il faut pour forger un corps et un mental d'élite.
          </p>
        </motion.div>

        <div className="services__grid">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

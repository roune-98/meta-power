import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Equipment.css';

const categories = ['Tout', 'Musculation', 'Cardio', 'Combat'];

const equipment = [
  {
    img: '/img/META4.webp',
    name: 'Zone Musculation',
    brand: 'Hammer Strength',
    category: 'Musculation',
    description: 'Barres olympiques, machines à câbles, bancs multipositions et racks de squat professionnels.',
  },
  {
    img: '/img/META5.webp',
    name: 'Espace Cardio',
    brand: 'Technogym',
    category: 'Cardio',
    description: 'Tapis motorisés 22km/h, vélos spinning Keiser et rameurs Concept2 dernière génération.',
  },
  {
    img: '/img/META6.webp',
    name: 'Ring de Boxe',
    brand: 'Cleto Reyes',
    category: 'Combat',
    description: 'Ring professionnel 6×6m homologué compétition avec plancher amorti et cordes tendues.',
  },
  {
    img: '/img/META7.webp',
    name: 'Salle de Frappe',
    brand: 'Fairtex',
    category: 'Combat',
    description: 'Sacs lourds 40kg en cuir véritable, pattes d\'ours et miroirs pour la technique.',
  },
  {
    img: '/img/META8.webp',
    name: 'Poids Libres',
    brand: 'Eleiko Pro',
    category: 'Musculation',
    description: 'Haltères de 2kg à 60kg, disques certifiés IPF et barres spécialisées pour chaque exercice.',
  },
  {
    img: '/img/2026-02-04.webp',
    name: 'Zone Fonctionnelle',
    brand: 'Life Fitness',
    category: 'Cardio',
    description: 'TRX, kettlebells, caisses de CrossFit et tapis de sol pour l\'entraînement fonctionnel.',
  },
];

export default function Equipment() {
  const [active, setActive] = useState('Tout');

  const filtered = active === 'Tout'
    ? equipment
    : equipment.filter(e => e.category === active);

  return (
    <section id="equipment" className="equipment">
      <div className="equipment__container">
        <motion.div
          className="section-header"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-tag">Infrastructure de pointe</span>
          <h2 className="section-title">NOS ÉQUIPEMENTS</h2>
          <p className="section-subtitle">
            Du matériel professionnel de marques mondiales pour des performances sans compromis.
          </p>
        </motion.div>

        <motion.div
          className="equipment__filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {categories.map(cat => (
            <button
              key={cat}
              className={`equipment__filter-btn ${active === cat ? 'equipment__filter-btn--active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="equipment__grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.name}
                className="equipment__card"
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                whileHover="hover"
              >
                <motion.div
                  className="equipment__img-wrap"
                  variants={{ hover: { scale: 1.06 } }}
                  transition={{ duration: 0.5 }}
                >
                  <img src={item.img} alt={item.name} className="equipment__img" loading="lazy" />
                </motion.div>

                <div className="equipment__gradient" />

                <div className="equipment__info">
                  <span className="equipment__category">{item.category}</span>
                  <h3 className="equipment__name">{item.name}</h3>
                  <span className="equipment__brand">{item.brand}</span>
                  <motion.p
                    className="equipment__desc"
                    variants={{ hover: { opacity: 1, y: 0 } }}
                    initial={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.25 }}
                  >
                    {item.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

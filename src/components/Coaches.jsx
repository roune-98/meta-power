import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Coaches.css';

const STARS = '★★★★★';

const coaches = [
  {
    name: 'MAMADOU DIALLO',
    initials: 'MD',
    role: 'Coach Force & Musculation',
    experience: '12 ans',
    specialty: 'Hypertrophie, Force Max',
    bio: "Ancien champion national de powerlifting, Mamadou transforme des corps depuis 12 ans. Sa méthode combine science de l'entraînement et motivation extrême pour des résultats garantis.",
    certifications: ['BPJEPS', 'Cert. Nutrition', 'CrossFit L2'],
    color: 'gold',
  },
  {
    name: 'IBRAHIMA KANE',
    initials: 'IK',
    role: 'Coach Boxe & MMA',
    experience: '18 ans',
    specialty: 'Technique, Sparring, Combat',
    bio: 'Ancien boxeur professionnel avec 45 combats au compteur. Ibrahima a formé plusieurs champions régionaux. Son approche est brutalement efficace.',
    certifications: ['Diplôme Fédéral Boxe', 'Licence MMA Pro', 'Kickboxing K1'],
    color: 'red',
  },
  {
    name: 'FATOU NDIAYE',
    initials: 'FN',
    role: 'Coach Fitness & Nutrition',
    experience: '8 ans',
    specialty: 'Perte de poids, Cardio, Nutrition',
    bio: 'Nutritionniste certifiée et coach fitness, Fatou personnalise chaque programme selon votre métabolisme et vos objectifs.',
    certifications: ['Nutritionniste Cert.', 'HIIT Expert', 'Yoga Instructor'],
    color: 'gold',
  },
];

function CoachCard({ coach, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className={`coach__card coach__card--${coach.color}`}
      initial={{ y: 60 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.14 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`coach__avatar coach__avatar--${coach.color}`}>
        <div className="coach__avatar-inner">
          <div className={`coach__initials coach__initials--${coach.color}`}>
            {coach.initials}
          </div>
        </div>
        <div className={`coach__ring coach__ring--${coach.color}`} />
        <div className={`coach__ring coach__ring--${coach.color} coach__ring--2`} />
      </div>

      <div className="coach__info">
        <h3 className="coach__name">{coach.name}</h3>
        <p className={`coach__role coach__role--${coach.color}`}>{coach.role}</p>
        <div className="coach__stars">{STARS}</div>
        <div className="coach__meta">
          <span className="coach__meta-item">
            <span className="coach__meta-icon">⏱</span>
            {coach.experience}
          </span>
          <span className="coach__meta-divider">·</span>
          <span className="coach__meta-item">{coach.specialty}</span>
        </div>
      </div>

      <AnimatePresence>
        {hovered && (
          <motion.div
            className={`coach__overlay coach__overlay--${coach.color}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25 }}
          >
            <p className="coach__bio">{coach.bio}</p>
            <div className="coach__certs">
              {coach.certifications.map((cert, i) => (
                <span key={i} className={`coach__cert coach__cert--${coach.color}`}>{cert}</span>
              ))}
            </div>
            <motion.button
              className={`coach__cta coach__cta--${coach.color}`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Prendre RDV
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Coaches() {
  return (
    <section id="coaches" className="coaches">
      <div className="coaches__bg" />
      <div className="coaches__container">
        <motion.div
          className="section-header"
          initial={{ y: 40 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-tag">Notre équipe d'élite</span>
          <h2 className="section-title">NOS COACHS</h2>
          <p className="section-subtitle">
            Des experts passionnés, certifiés et dévoués à votre transformation. Survolez les cartes pour en savoir plus.
          </p>
        </motion.div>

        <div className="coaches__grid">
          {coaches.map((coach, i) => (
            <CoachCard key={i} coach={coach} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

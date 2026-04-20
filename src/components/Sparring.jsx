import { motion } from 'framer-motion';
import './Sparring.css';

const sports = [
  { name: 'BOXE ANGLAISE',      icon: '🥊', level: 95, description: 'Technique, vitesse et précision — le sport-roi du gym' },
  { name: 'MMA',                icon: '🥋', level: 88, description: 'Arts martiaux mixtes pour combattants complets' },
  { name: 'LUTTE SÉNÉGALAISE',  icon: '💪', level: 80, description: 'La tradition guerrière africaine au service du fitness' },
  { name: 'KICKBOXING',         icon: '🦵', level: 92, description: 'Frappe pieds-poings — explosivité totale' },
];

const coachStats = [
  { value: '15+', label: "Années d'expérience" },
  { value: '200+', label: 'Combattants formés' },
  { value: '12',   label: 'Titres nationaux' },
  { value: '3',    label: 'Champions régionaux' },
];

export default function Sparring() {
  return (
    <section id="sparring" className="sparring">
      <div className="sparring__bg" />
      <div className="sparring__bg-grid" />

      <div className="sparring__container">
        <div className="sparring__layout">
          {/* LEFT */}
          <motion.div
            className="sparring__visual"
            initial={{ x: -40 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8 }}
          >
            <div className="sparring__ring">
              <div className="sparring__ring-inner">
                <div className="sparring__ring-glow" />
                {[0,1,2,3].map(i => (
                  <div key={i} className={`sparring__rope sparring__rope--${i+1}`} />
                ))}
                <img
                  src="https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=900&q=80"
                  alt="Entraînement de boxe"
                  className="sparring__ring-photo"
                />
                <div className="sparring__ring-overlay" />
                <div className="sparring__ring-text">
                  <span>COMBAT</span>
                  <span>ZONE</span>
                </div>
                <motion.div
                  className="sparring__float sparring__float--1"
                  animate={{ y: [-8, 8, -8], rotate: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >🥊</motion.div>
                <motion.div
                  className="sparring__float sparring__float--2"
                  animate={{ y: [8, -8, 8], rotate: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                >🥋</motion.div>
              </div>
            </div>

            <div className="sparring__stats">
              {coachStats.map((s, i) => (
                <motion.div
                  key={i}
                  className="sparring__stat"
                  initial={{ y: 20 }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                >
                  <span className="sparring__stat-value">{s.value}</span>
                  <span className="sparring__stat-label">{s.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            className="sparring__content"
            initial={{ x: 40 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="section-tag">Combat & Performance</span>
            <h2 className="sparring__title">
              <span>SPARRING</span>
              <span className="sparring__title-accent">& COMBAT</span>
            </h2>
            <p className="sparring__desc">
              Entraînez-vous comme un combattant professionnel. Nos coachs expérimentés
              vous guident à travers des disciplines de combat pour forger un mental et
              un corps indestructibles.
            </p>

            <div className="sparring__sports">
              {sports.map((sport, i) => (
                <motion.div
                  key={i}
                  className="sparring__sport"
                  initial={{ x: 20 }}
                  whileInView={{ x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.1 }}
                >
                  <div className="sparring__sport-header">
                    <span className="sparring__sport-icon">{sport.icon}</span>
                    <div className="sparring__sport-info">
                      <span className="sparring__sport-name">{sport.name}</span>
                      <span className="sparring__sport-desc">{sport.description}</span>
                    </div>
                    <span className="sparring__sport-pct">{sport.level}%</span>
                  </div>
                  <div className="sparring__bar-track">
                    <motion.div
                      className="sparring__bar-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${sport.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.3 + i * 0.15, ease: 'easeOut' }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              className="sparring__cta"
              whileHover={{ scale: 1.04, boxShadow: '0 0 28px rgba(229,9,20,0.6)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Rejoindre le programme combat
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

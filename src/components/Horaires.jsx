import { motion } from 'framer-motion';
import './Horaires.css';

const schedule = [
  { day: 'Lundi',    hours: '05h00 – 22h00', open: true },
  { day: 'Mardi',    hours: '05h00 – 22h00', open: true },
  { day: 'Mercredi', hours: '05h00 – 22h00', open: true },
  { day: 'Jeudi',    hours: '05h00 – 22h00', open: true },
  { day: 'Vendredi', hours: '05h00 – 22h00', open: true },
  { day: 'Samedi',   hours: '05h00 – 19h00', open: true },
  { day: 'Dimanche', hours: 'Fermé',          open: false },
];

const slots = [
  {
    icon: '🌅',
    label: 'Matin calme',
    hours: '05h – 08h',
    desc: 'Idéal pour une séance sans attente',
    highlight: false,
  },
  {
    icon: '☀️',
    label: 'Mi-journée',
    hours: '11h – 14h',
    desc: 'Affluence modérée, machines disponibles',
    highlight: false,
  },
  {
    icon: '🔥',
    label: 'Heure de pointe',
    hours: '17h – 20h',
    desc: 'Ambiance électrique — énergie maximale',
    highlight: true,
  },
  {
    icon: '🌙',
    label: 'Soirée',
    hours: '20h – 23h',
    desc: 'Tranquille, parfait pour finir la journée',
    highlight: false,
  },
];

export default function Horaires() {
  return (
    <section id="horaires" className="horaires">
      <div className="horaires__container">
        <motion.div
          className="section-header"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-tag">Organisation</span>
          <h2 className="section-title">
            HORAIRES <span className="horaires__title-red">&amp; AFFLUENCE</span>
          </h2>
          <p className="section-subtitle">Planifiez votre visite pour une expérience optimale</p>
        </motion.div>

        <div className="horaires__body">
          {/* Left — schedule table */}
          <motion.div
            className="horaires__table-wrap"
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <table className="horaires__table">
              <thead>
                <tr>
                  <th>JOUR</th>
                  <th>HORAIRES</th>
                  <th>STATUT</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((row, i) => (
                  <tr key={i} className={!row.open ? 'horaires__row--closed' : ''}>
                    <td className="horaires__day">{row.day}</td>
                    <td className="horaires__hours">{row.hours}</td>
                    <td className="horaires__status">
                      <span className={row.open ? 'horaires__badge--open' : 'horaires__badge--closed'}>
                        {row.open ? '● Ouvert' : '● Fermé'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="horaires__note">
              <span className="horaires__note-icon">⚡</span>
              <span>
                Heure de pointe&nbsp;:&nbsp;
                <strong className="horaires__note-time">18h00</strong>
                &nbsp;tous les jours de semaine
              </span>
            </div>
          </motion.div>

          {/* Right — quand venir */}
          <motion.div
            className="horaires__slots"
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="horaires__slots-title">QUAND VENIR ?</h3>
            {slots.map((slot, i) => (
              <motion.div
                key={i}
                className={`horaires__slot ${slot.highlight ? 'horaires__slot--highlight' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <span className="horaires__slot-icon">{slot.icon}</span>
                <div className="horaires__slot-info">
                  <div className="horaires__slot-header">
                    <span className="horaires__slot-label">{slot.label}</span>
                    <span className={`horaires__slot-hours ${slot.highlight ? 'horaires__slot-hours--red' : ''}`}>
                      {slot.hours}
                    </span>
                  </div>
                  <p className="horaires__slot-desc">{slot.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

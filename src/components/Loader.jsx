import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Loader.css';

export default function Loader() {
  const [phase, setPhase] = useState('visible'); // 'visible' | 'fading' | 'gone'

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('fading'), 1800);
    const t2 = setTimeout(() => setPhase('gone'),   2400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (phase === 'gone') return null;

  return (
    <div className={`loader ${phase === 'fading' ? 'loader--fading' : ''}`}>
      <div className="loader__inner">
        <motion.div
          className="loader__logo"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'backOut' }}
        >
          <span className="loader__meta">META</span>
          <span className="loader__power">POWER</span>
          <span className="loader__gym">GYM</span>
        </motion.div>

        <div className="loader__bar-wrap">
          <motion.div
            className="loader__bar"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ delay: 0.3, duration: 1.4, ease: 'easeInOut' }}
          />
        </div>

        <p className="loader__text">TRAIN LIKE A WARRIOR</p>
      </div>
    </div>
  );
}

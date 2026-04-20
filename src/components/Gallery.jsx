import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Gallery.css';

const images = [
  { src: '/img/meta1.webp',       alt: 'Meta Power Gym' },
  { src: '/img/Meta2.webp',       alt: 'Entraînement Meta Power' },
  { src: '/img/META4.webp',       alt: 'Salle de musculation' },
  { src: '/img/META5.webp',       alt: 'Zone cardio' },
  { src: '/img/META6.webp',       alt: 'Ring de boxe' },
  { src: '/img/META7.webp',       alt: 'Coaching personnalisé' },
  { src: '/img/META8.webp',       alt: 'Ambiance Meta Power' },
  { src: '/img/2026-02-04.webp',  alt: 'Meta Power Gym' },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  const prev = () => setLightbox(i => (i - 1 + images.length) % images.length);
  const next = () => setLightbox(i => (i + 1) % images.length);

  const handleKey = (e) => {
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
    if (e.key === 'Escape') setLightbox(null);
  };

  return (
    <section id="gallery" className="gallery">
      <div className="gallery__container">
        <motion.div
          className="section-header"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-tag">Nos installations</span>
          <h2 className="section-title">NOS GALERIE</h2>
          <p className="section-subtitle">
            Découvrez l'univers Meta Power — équipements, ambiance et espace d'entraînement d'exception.
          </p>
        </motion.div>

        <div className="gallery__grid">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className="gallery__item"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              onClick={() => setLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="gallery__img"
                loading="lazy"
              />
              <div className="gallery__overlay">
                <span className="gallery__zoom">🔍</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="gallery__lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setLightbox(null)}
            onKeyDown={handleKey}
            tabIndex={0}
          >
            <motion.div
              className="gallery__lightbox-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={e => e.stopPropagation()}
            >
              <img
                src={images[lightbox].src}
                alt={images[lightbox].alt}
                className="gallery__lightbox-img"
              />
              <button className="gallery__lb-close" onClick={() => setLightbox(null)}>✕</button>
              <button className="gallery__lb-btn gallery__lb-btn--prev" onClick={prev}>‹</button>
              <button className="gallery__lb-btn gallery__lb-btn--next" onClick={next}>›</button>
              <div className="gallery__lb-counter">
                {lightbox + 1} / {images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

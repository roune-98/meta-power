import { useEffect, useRef } from 'react';
import './Hero.css';

/* ── Particle canvas ── */
function Particles() {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext('2d');
    let w = (c.width = innerWidth), h = (c.height = innerHeight), id;
    const pts = Array.from({length:70},()=>({
      x:Math.random()*w, y:Math.random()*h,
      r:Math.random()*1.6+.3,
      vx:(Math.random()-.5)*.3, vy:-(Math.random()*.45+.1),
      o:Math.random()*.5+.1, g:Math.random()>.5
    }));
    const loop=()=>{
      ctx.clearRect(0,0,w,h);
      pts.forEach(p=>{
        p.x+=p.vx; p.y+=p.vy;
        p.o+=(Math.random()-.5)*.01;
        p.o=Math.max(.04,Math.min(.55,p.o));
        if(p.y<-5){p.y=h+5;p.x=Math.random()*w;}
        if(p.x<-5)p.x=w+5; if(p.x>w+5)p.x=-5;
        ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle=p.g?`rgba(255,215,0,${p.o})`:`rgba(229,9,20,${p.o*.4})`;
        ctx.fill();
      });
      id=requestAnimationFrame(loop);
    };
    loop();
    const onR=()=>{w=c.width=innerWidth;h=c.height=innerHeight;};
    addEventListener('resize',onR);
    return()=>{cancelAnimationFrame(id);removeEventListener('resize',onR);};
  },[]);
  return <canvas ref={ref} className="hero__canvas"/>;
}

export default function Hero() {
  return (
    <section id="hero" className="hero">
      {/* Real background image */}
      <div className="hero__img" />
      <div className="hero__overlay-dark" />
      <div className="hero__overlay-left" />
      <Particles />
      <div className="hero__light-streak hero__light-streak--1"/>
      <div className="hero__light-streak hero__light-streak--2"/>

      <div className="hero__content">
        {/* Live badge */}
        <div className="hero__badge fade-up-1">
          <span className="hero__badge-dot"/>
          INSCRIPTIONS OUVERTES
        </div>

        {/* Massive title */}
        <div className="hero__title-wrap fade-up-2">
          <h1 className="hero__title">
            <span className="t-white">FORGE</span>
            <span className="t-gold">TON</span>
            <span className="t-stroke">CORPS</span>
          </h1>
        </div>

        <p className="hero__sub fade-up-3">
          Entraîne-toi comme un guerrier.&nbsp;
          <span className="gold-txt">Deviens inarrêtable.</span>
        </p>

        <div className="hero__btns fade-up-4">
          <button className="cta-red"
            onClick={()=>document.querySelector('#contact')?.scrollIntoView({behavior:'smooth'})}>
            Rejoindre maintenant
          </button>
          <button className="cta-outline"
            onClick={()=>document.querySelector('#pricing')?.scrollIntoView({behavior:'smooth'})}>
            Voir les tarifs
          </button>
        </div>

        {/* Stats */}
        <div className="hero__stats fade-up-5">
          <div className="hero__stat">
            <span className="s-num">500<span className="s-plus">+</span></span>
            <span className="s-lbl">Membres</span>
          </div>
          <div className="hero__stat-divider"/>
          <div className="hero__stat">
            <span className="s-num">2K<span className="s-plus"> FCFA</span></span>
            <span className="s-lbl">/ Séance</span>
          </div>
          <div className="hero__stat-divider"/>
          <div className="hero__stat">
            <span className="s-num">10<span className="s-plus">+</span></span>
            <span className="s-lbl">Coachs Pro</span>
          </div>
        </div>
      </div>

      {/* Right side: athlete image frame */}
      <div className="hero__athlete-frame fade-up-2">
        <div className="hero__athlete-img"/>
        <div className="hero__athlete-glow"/>
        <div className="hero__athlete-badge">
          <span>🏆</span>
          <span>ENTRAÎNEMENT ÉLITE</span>
        </div>
      </div>

      {/* Scroll */}
      <div className="hero__scroll fade-up-5">
        <div className="hero__scroll-track"><div className="hero__scroll-dot"/></div>
        <span>DÉFILER</span>
      </div>
    </section>
  );
}

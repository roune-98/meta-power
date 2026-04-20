import { useEffect, useRef } from 'react';
import './Cursor.css';

export default function Cursor() {
  const dotRef = useRef(null);
  const circleRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const circle = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    let raf;
    const animate = () => {
      circle.current.x += (pos.current.x - circle.current.x) * 0.12;
      circle.current.y += (pos.current.y - circle.current.y) * 0.12;
      if (circleRef.current) {
        circleRef.current.style.transform = `translate(${circle.current.x}px, ${circle.current.y}px)`;
      }
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(animate);

    const handleHover = () => {
      circleRef.current?.classList.add('cursor__circle--hover');
      dotRef.current?.classList.add('cursor__dot--hover');
    };
    const handleLeave = () => {
      circleRef.current?.classList.remove('cursor__circle--hover');
      dotRef.current?.classList.remove('cursor__dot--hover');
    };

    document.querySelectorAll('a, button, [data-hover]').forEach((el) => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor__dot" />
      <div ref={circleRef} className="cursor__circle" />
    </>
  );
}

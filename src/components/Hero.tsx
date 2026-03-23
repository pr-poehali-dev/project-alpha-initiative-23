import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <div ref={container} className="relative flex items-center justify-center h-screen overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        <img
          src="https://cdn.poehali.dev/projects/853aaa2c-2f2d-41f4-9b3b-18a68c5eca7f/files/9ca91fde-5a54-4fd4-9777-1d3a3c564acf.jpg"
          alt="Крымский пейзаж"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(13,17,23,0.5) 0%, rgba(13,17,23,0.3) 40%, rgba(13,17,23,0.85) 100%)' }} />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="mb-4 text-xs tracking-[0.4em] uppercase" style={{ color: 'var(--gold)', fontFamily: 'Cinzel, serif' }}>
          ✦ Настольная игра ✦
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-white leading-tight" style={{ fontFamily: 'Cinzel, serif' }}>
          Enigma.<br />
          <span style={{ color: 'var(--gold)' }}>Легенды Крыма</span>
        </h1>
        <p className="text-base md:text-xl max-w-2xl mx-auto mb-10 text-white/70 font-light leading-relaxed">
          Открой полуостров по-новому — увлекательное путешествие в мир древних мифов, загадочных легенд и стратегической борьбы за тайны крымской земли
        </p>
        <a
          href="#pricing"
          className="inline-block px-10 py-4 text-sm uppercase tracking-widest font-semibold transition-all duration-300 hover:scale-105"
          style={{ background: 'var(--gold)', color: '#0D1117', fontFamily: 'Cinzel, serif' }}
        >
          Купить игру
        </a>
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest uppercase text-white/40">Листай вниз</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8"
          style={{ background: 'var(--gold)', opacity: 0.5 }}
        />
      </motion.div>
    </div>
  );
}
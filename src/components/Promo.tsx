import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "Brain",
    title: "Стратегическое мышление",
    desc: "Каждый ход требует анализа, планирования и тактики. Игра развивает логику и умение принимать решения под давлением.",
  },
  {
    icon: "Palette",
    title: "Уникальный дизайн",
    desc: "Арт-стиль вдохновлён крымскими пейзажами и фэнтезийными мотивами. Каждая карточка — произведение искусства.",
  },
  {
    icon: "BookOpen",
    title: "Легенды и мифы",
    desc: "80+ уникальных карт с настоящими преданиями полуострова — от Ласточкиного гнезда до пещер Эски-Кермен.",
  },
  {
    icon: "Users",
    title: "Для всей семьи",
    desc: "От 10 лет, 2–6 игроков, 45–90 минут игры. Идеально для вечеров с близкими или в компании друзей.",
  },
  {
    icon: "Globe",
    title: "Масштабируемость",
    desc: "Enigma — это платформа. Следующие выпуски охватят другие регионы и культуры мира.",
  },
  {
    icon: "Award",
    title: "Образовательная ценность",
    desc: "Рекомендовано историками и педагогами как инструмент живого изучения культурного наследия.",
  },
];

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <>
      <section id="features" className="py-24 px-6" style={{ background: 'var(--dark-card)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: 'var(--teal)', fontFamily: 'Cinzel, serif' }}>
              ✦ Особенности игры
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-white" style={{ fontFamily: 'Cinzel, serif' }}>
              Почему выбирают <span style={{ color: 'var(--gold)' }}>Enigma</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="p-6 rounded-xl transition-all duration-300 hover:scale-105"
                style={{ background: 'var(--dark-bg)', border: '1px solid rgba(201,168,76,0.15)' }}
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ background: 'rgba(201,168,76,0.1)' }}>
                  <Icon name={f.icon} size={22} style={{ color: 'var(--gold)' }} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'Cinzel, serif' }}>{f.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div
        ref={container}
        className="relative flex items-center justify-center h-screen overflow-hidden"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
          <motion.div style={{ y }} className="relative w-full h-full">
            <img
              src="/images/spiral-circles.jpg"
              alt="Абстрактный фон"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'rgba(13,17,23,0.75)' }} />
          </motion.div>
        </div>

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
          <div className="text-xs tracking-[0.4em] uppercase mb-6" style={{ color: 'var(--teal)', fontFamily: 'Cinzel, serif' }}>
            ✦ Масштаб проекта
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-tight mb-6" style={{ fontFamily: 'Cinzel, serif' }}>
            Крым — только<br /><span style={{ color: 'var(--gold)' }}>начало пути</span>
          </h2>
          <p className="text-white/60 max-w-xl text-base leading-relaxed">
            Enigma — это живая платформа для сохранения культурного наследия через игру. После Крыма серия расширится на другие регионы России и мира. Каждый уголок планеты заслуживает своей легенды.
          </p>
        </div>
      </div>
    </>
  );
}

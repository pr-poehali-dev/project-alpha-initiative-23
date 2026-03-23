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
    desc: "Загадка — это платформа. Следующие выпуски охватят другие регионы и культуры мира.",
  },
  {
    icon: "Award",
    title: "Образовательная ценность",
    desc: "Рекомендовано историками и педагогами как инструмент живого изучения культурного наследия.",
  },
];

export default function Promo() {
  return (
    <>
      <section id="features" className="py-24 px-6" style={{ background: 'var(--wf-bg)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-widest font-medium mb-4" style={{ color: 'var(--wf-text-muted)' }}>
              Особенности игры
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold" style={{ color: 'var(--wf-text)' }}>
              Почему выбирают Загадку
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="p-6 rounded-xl"
                style={{ background: 'var(--wf-bg-alt)', border: '1px solid var(--wf-border)' }}
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ background: 'var(--wf-placeholder)' }}>
                  <Icon name={f.icon} size={22} style={{ color: 'var(--wf-text-muted)' }} />
                </div>
                <h3 className="text-base font-semibold mb-2" style={{ color: 'var(--wf-text)' }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--wf-text-muted)' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 text-center" style={{ background: 'var(--wf-bg-alt)', borderTop: '1px solid var(--wf-border)', borderBottom: '1px solid var(--wf-border)' }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-xs uppercase tracking-widest font-medium mb-6" style={{ color: 'var(--wf-text-muted)' }}>
            Масштаб проекта
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: 'var(--wf-text)' }}>
            Крым — только начало пути
          </h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--wf-text-muted)' }}>
            Загадка — это живая платформа для сохранения культурного наследия через игру. После Крыма серия расширится на другие регионы России и мира. Каждый уголок планеты заслуживает своей легенды.
          </p>
        </div>
      </section>
    </>
  );
}

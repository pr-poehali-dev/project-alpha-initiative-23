import Icon from "@/components/ui/icon";

const features = [
  { icon: "Brain", title: "Стратегия", desc: "Логика и тактика в каждом ходу" },
  { icon: "Palette", title: "Дизайн", desc: "Иллюстрации с крымскими мотивами" },
  { icon: "BookOpen", title: "Легенды", desc: "80+ карточек с преданиями Крыма" },
  { icon: "Users", title: "Для всей семьи", desc: "От 10 лет, 2–6 игроков, 45–90 мин" },
  { icon: "Globe", title: "Платформа", desc: "Следующие выпуски — другие регионы" },
  { icon: "Award", title: "Образование", desc: "Рекомендовано историками и педагогами" },
];

export default function Promo() {
  return (
    <>
      <section id="features" className="py-20 px-6 bg-gray-100 border-b border-gray-300">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-widest text-gray-500 mb-3">Особенности</div>
            <h2 className="text-3xl font-bold text-gray-900">Почему выбирают Загадку</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <div key={i} className="p-6 bg-white border border-gray-300">
                <div className="w-10 h-10 bg-gray-200 border border-gray-400 flex items-center justify-center mb-4">
                  <Icon name={f.icon} size={20} className="text-gray-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{f.title}</h3>
                <p className="text-gray-500 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-200 border-b border-gray-300 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="text-xs uppercase tracking-widest text-gray-500 mb-4">Масштаб проекта</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Крым — только начало</h2>
          <p className="text-gray-600">
            Загадка — платформа для сохранения культурного наследия. После Крыма серия расширится на другие регионы.
          </p>
        </div>
      </section>
    </>
  );
}
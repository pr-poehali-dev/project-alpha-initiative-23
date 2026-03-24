const reviews = [
  { name: "Алина М.", city: "Симферополь", rating: 5, text: "Провели за игрой весь вечер. Узнали много нового о Крыме." },
  { name: "Дмитрий К.", city: "Ялта", rating: 5, text: "Правила понятны сразу, легенды захватывают." },
  { name: "Светлана Р.", city: "Севастополь", rating: 5, text: "Лучший способ познакомить детей с культурой полуострова." },
  { name: "Михаил Б.", city: "Феодосия", rating: 4, text: "Втянулись основательно. Иллюстрации великолепны." },
  { name: "Анастасия В.", city: "Керчь", rating: 5, text: "Игра стала любимой у всей семьи." },
  { name: "Игорь Н.", city: "Евпатория", rating: 5, text: "Теперь вся семья знает крымские легенды." },
];

export default function Reviews() {
  return (
    <section className="py-20 px-6 bg-white border-b border-gray-300">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-widest text-gray-500 mb-3">Отзывы</div>
          <h2 className="text-3xl font-bold text-gray-900">Что говорят игроки</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((r, i) => (
            <div key={i} className="p-5 bg-gray-100 border border-gray-300">
              <div className="flex gap-0.5 mb-3 text-gray-700">
                {"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}
              </div>
              <p className="text-gray-600 text-sm mb-4">"{r.text}"</p>
              <div className="text-gray-800 text-sm font-bold">{r.name}</div>
              <div className="text-gray-400 text-xs">{r.city}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

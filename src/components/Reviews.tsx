import { motion } from "framer-motion";

const reviews = [
  {
    name: "Алина М.",
    city: "Симферополь",
    rating: 5,
    text: "Купила в подарок сыну на день рождения — он в восторге! Мы сами не заметили, как провели за игрой весь вечер. Красивые карточки, интересные легенды — узнали много нового о Крыме.",
  },
  {
    name: "Дмитрий К.",
    city: "Ялта",
    rating: 5,
    text: "Отличная игра для компании! Мы брали с собой на дачу, играли 4 человека. Правила понятны сразу, а легенды Крыма такие захватывающие, что хотелось остановиться и просто читать их.",
  },
  {
    name: "Светлана Р.",
    city: "Севастополь",
    rating: 5,
    text: "Как учитель истории, могу сказать — это лучший способ познакомить детей с культурой полуострова. Приобрела для класса. Дети просят играть снова и снова. Браво создателям!",
  },
  {
    name: "Михаил Б.",
    city: "Феодосия",
    rating: 4,
    text: "Сначала скептически отнёсся — ну что это, просто игра. Но когда начали играть с семьёй, втянулись основательно. Иллюстрации просто великолепны, видно что душа вложена.",
  },
  {
    name: "Анастасия В.",
    city: "Керчь",
    rating: 5,
    text: "Заказала онлайн — доставили быстро, упаковка очень достойная. Игра стала любимой у всей семьи. Спасибо, что сохраняете историю Крыма таким необычным способом!",
  },
  {
    name: "Игорь Н.",
    city: "Евпатория",
    rating: 5,
    text: "Классная штука для туристов! Купил как сувенир, но потом сам же и не смог расстаться. Теперь вся семья знает легенды о Мангупе, Чуфут-Кале и Ласточкином гнезде.",
  },
];

export default function Reviews() {
  return (
    <section className="py-24 px-6 overflow-hidden" style={{ background: 'var(--dark-bg)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: 'var(--teal)', fontFamily: 'Cinzel, serif' }}>
            ✦ Отзывы покупателей
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-white" style={{ fontFamily: 'Cinzel, serif' }}>
            Что говорят <span style={{ color: 'var(--gold)' }}>игроки</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl flex flex-col gap-4"
              style={{ background: 'var(--dark-card)', border: '1px solid rgba(201,168,76,0.12)' }}
            >
              <div className="flex gap-1">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <span key={j} style={{ color: 'var(--gold)' }}>★</span>
                ))}
                {Array.from({ length: 5 - r.rating }).map((_, j) => (
                  <span key={j} className="text-white/20">★</span>
                ))}
              </div>
              <p className="text-white/65 text-sm leading-relaxed flex-1">"{r.text}"</p>
              <div className="flex items-center gap-3 pt-2" style={{ borderTop: '1px solid rgba(201,168,76,0.1)' }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: 'rgba(201,168,76,0.15)', color: 'var(--gold)' }}>
                  {r.name[0]}
                </div>
                <div>
                  <div className="text-white text-sm font-medium">{r.name}</div>
                  <div className="text-white/40 text-xs">{r.city}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

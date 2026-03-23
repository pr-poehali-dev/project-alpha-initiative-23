export default function Footer() {
  return (
    <>
      <section id="pricing" className="py-24 px-6" style={{ background: 'var(--dark-bg)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: 'var(--teal)', fontFamily: 'Cinzel, serif' }}>
            ✦ Каталог и цены
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-16" style={{ fontFamily: 'Cinzel, serif' }}>
            Получи игру сегодня
          </h2>
          <div className="relative inline-block w-full max-w-md">
            <div className="absolute inset-0 rounded-2xl blur-2xl opacity-30" style={{ background: 'var(--gold)' }} />
            <div className="relative rounded-2xl p-10" style={{ background: 'var(--dark-card)', border: '1px solid rgba(201,168,76,0.4)' }}>
              <div className="text-xs tracking-widest uppercase mb-4 text-white/50" style={{ fontFamily: 'Cinzel, serif' }}>Полный набор</div>
              <div className="text-6xl font-bold mb-2 text-white" style={{ fontFamily: 'Cinzel, serif', color: 'var(--gold)' }}>
                2 500 ₽
              </div>
              <p className="text-white/50 text-sm mb-8">Включает всё необходимое для игры на 2–6 человек</p>
              <ul className="text-left space-y-3 mb-10">
                {[
                  "80+ карточек с легендами Крыма",
                  "Игровое поле-карта полуострова",
                  "Фигурки и кубики",
                  "Правила на русском языке",
                  "Эксклюзивный арт-дизайн",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/70 text-sm">
                    <span style={{ color: 'var(--gold)' }}>✦</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="mailto:info@enigma-crimea.ru"
                className="block w-full py-4 text-center text-sm uppercase tracking-widest font-semibold transition-all duration-300 hover:opacity-90 hover:scale-105 rounded-lg"
                style={{ background: 'var(--gold)', color: '#0D1117', fontFamily: 'Cinzel, serif' }}
              >
                Заказать игру
              </a>
            </div>
          </div>
        </div>
      </section>

      <div
        className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
          <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
            <div className="py-4 sm:py-6 lg:py-8 px-4 sm:px-6 h-full w-full flex flex-col justify-between" style={{ background: '#08090C' }}>
              <div className="flex shrink-0 gap-8 sm:gap-12 lg:gap-20">
                <div className="flex flex-col gap-1 sm:gap-2">
                  <h3 className="mb-2 uppercase text-xs sm:text-sm" style={{ color: 'var(--gold)', fontFamily: 'Cinzel, serif' }}>Навигация</h3>
                  {[["#about", "О проекте"], ["#features", "Особенности"], ["#pricing", "Купить"]].map(([href, label]) => (
                    <a key={href} href={href} className="text-white/60 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                      {label}
                    </a>
                  ))}
                </div>
                <div className="flex flex-col gap-1 sm:gap-2">
                  <h3 className="mb-2 uppercase text-xs sm:text-sm" style={{ color: 'var(--gold)', fontFamily: 'Cinzel, serif' }}>Контакты</h3>
                  <a href="mailto:info@enigma-crimea.ru" className="text-white/60 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                    info@enigma-crimea.ru
                  </a>
                  <a href="https://t.me/enigmacrimea" className="text-white/60 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                    Telegram
                  </a>
                  <a href="https://instagram.com/enigmacrimea" className="text-white/60 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                    Instagram
                  </a>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
                <h1
                  className="text-[14vw] sm:text-[12vw] lg:text-[10vw] leading-[0.8] mt-4 sm:mt-6 lg:mt-10 font-bold tracking-tight"
                  style={{ color: 'var(--gold)', fontFamily: 'Cinzel, serif', opacity: 0.15 }}
                >
                  ENIGMA
                </h1>
                <p className="text-white/30 text-sm sm:text-base">{new Date().getFullYear()} Enigma. Легенды Крыма</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

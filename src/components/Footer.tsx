export default function Footer() {
  return (
    <>
      <section id="pricing" className="py-24 px-6" style={{ background: 'var(--wf-bg-alt)', borderTop: '1px solid var(--wf-border)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-xs uppercase tracking-widest font-medium mb-4" style={{ color: 'var(--wf-text-muted)' }}>
            Каталог и цены
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-16" style={{ color: 'var(--wf-text)' }}>
            Получи игру сегодня
          </h2>
          <div className="inline-block w-full max-w-md">
            <div className="rounded-2xl p-10 text-left" style={{ background: 'var(--wf-bg)', border: '2px solid var(--wf-border)' }}>
              <div className="text-xs uppercase tracking-widest mb-4 font-medium" style={{ color: 'var(--wf-text-muted)' }}>Полный набор</div>
              <div className="text-5xl font-bold mb-2" style={{ color: 'var(--wf-text)' }}>
                2 500 ₽
              </div>
              <p className="text-sm mb-2" style={{ color: 'var(--wf-text-muted)' }}>Включает всё необходимое для игры на 2–6 человек</p>
              <p className="text-sm mb-8 font-medium" style={{ color: 'var(--wf-btn-dark)' }}>
                Доставка только по Крыму
              </p>
              <ul className="space-y-3 mb-10">
                {[
                  "80+ карточек с легендами Крыма",
                  "Игровое поле-карта полуострова",
                  "Фигурки и кубики",
                  "Правила на русском языке",
                  "Эксклюзивный арт-дизайн",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm" style={{ color: 'var(--wf-text-muted)' }}>
                    <span style={{ color: 'var(--wf-btn-dark)' }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="/order"
                className="block w-full py-4 text-center text-sm font-semibold rounded-lg transition-opacity hover:opacity-80"
                style={{ background: 'var(--wf-btn-dark)', color: '#fff' }}
              >
                Заказать игру
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-8 py-12" style={{ background: 'var(--wf-header)', borderTop: '1px solid var(--wf-border)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-12 mb-12">
            <div className="flex flex-col gap-2">
              <h3 className="mb-2 uppercase text-xs font-semibold tracking-widest" style={{ color: 'var(--wf-text)' }}>Навигация</h3>
              {[["#about", "О проекте"], ["#features", "Особенности"], ["#pricing", "Купить"]].map(([href, label]) => (
                <a key={href} href={href} className="text-sm transition-opacity hover:opacity-70" style={{ color: 'var(--wf-text-muted)' }}>
                  {label}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="mb-2 uppercase text-xs font-semibold tracking-widest" style={{ color: 'var(--wf-text)' }}>Контакты</h3>
              <a href="tel:+79785553535" className="text-sm transition-opacity hover:opacity-70" style={{ color: 'var(--wf-text-muted)' }}>
                +7 978 555-35-35
              </a>
              <a href="mailto:zagadkicrimea@gmail.com" className="text-sm transition-opacity hover:opacity-70" style={{ color: 'var(--wf-text-muted)' }}>
                zagadkicrimea@gmail.com
              </a>
              <a href="https://t.me/zagadkacrimea" className="text-sm transition-opacity hover:opacity-70" style={{ color: 'var(--wf-text-muted)' }}>
                Telegram
              </a>
              <a href="https://vk.com/zagadkacrimea" className="text-sm transition-opacity hover:opacity-70" style={{ color: 'var(--wf-text-muted)' }}>
                ВКонтакте
              </a>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-8" style={{ borderTop: '1px solid var(--wf-border)' }}>
            <span className="text-2xl font-bold tracking-tight" style={{ color: 'var(--wf-text-muted)', opacity: 0.4 }}>ЗАГАДКА</span>
            <p className="text-sm" style={{ color: 'var(--wf-text-muted)' }}>{new Date().getFullYear()} Загадка. Легенды Крыма</p>
          </div>
        </div>
      </footer>
    </>
  );
}

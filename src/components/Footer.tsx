export default function Footer() {
  return (
    <>
      <section id="pricing" className="py-20 px-6 bg-gray-100 border-b border-gray-300">
        <div className="max-w-md mx-auto text-center">
          <div className="text-xs uppercase tracking-widest text-gray-500 mb-3">Цена</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Получи игру сегодня</h2>
          <div className="bg-white border border-gray-300 p-8">
            <div className="text-xs uppercase text-gray-400 mb-3">Полный набор</div>
            <div className="text-5xl font-bold text-gray-900 mb-2">2 500 ₽</div>
            <p className="text-gray-500 text-sm mb-2">Для 2–6 игроков</p>
            <p className="text-gray-500 text-sm mb-6">Доставка по Крыму</p>
            <ul className="text-left space-y-2 mb-8">
              {[
                "80+ карточек с легендами Крыма",
                "Игровое поле-карта полуострова",
                "Фигурки и кубики",
                "Правила на русском языке",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                  <span className="text-gray-400">—</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="/order"
              className="block w-full py-3 text-center text-sm uppercase tracking-widest font-semibold bg-gray-800 text-white hover:bg-gray-700"
            >
              Заказать игру
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-200 border-t border-gray-400 px-6 py-10">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between gap-8">
          <div>
            <h3 className="text-xs uppercase font-bold text-gray-700 mb-3">Навигация</h3>
            <div className="flex flex-col gap-1">
              {[["#about", "О проекте"], ["#features", "Особенности"], ["#pricing", "Купить"]].map(([href, label]) => (
                <a key={href} href={href} className="text-gray-500 hover:text-gray-900 text-sm">{label}</a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xs uppercase font-bold text-gray-700 mb-3">Контакты</h3>
            <div className="flex flex-col gap-1">
              <a href="tel:+79785553535" className="text-gray-500 hover:text-gray-900 text-sm">+7 978 555-35-35</a>
              <a href="mailto:zagadkicrimea@gmail.com" className="text-gray-500 hover:text-gray-900 text-sm">zagadkicrimea@gmail.com</a>
              <a href="https://t.me/zagadkacrimea" className="text-gray-500 hover:text-gray-900 text-sm">Telegram</a>
              <a href="https://vk.com/zagadkacrimea" className="text-gray-500 hover:text-gray-900 text-sm">ВКонтакте</a>
            </div>
          </div>
          <div className="self-end">
            <p className="text-gray-400 text-sm">{new Date().getFullYear()} Загадка. Легенды Крыма</p>
          </div>
        </div>
      </footer>
    </>
  );
}

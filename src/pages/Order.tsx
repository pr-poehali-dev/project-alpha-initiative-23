import { useState } from "react";
import { Link } from "react-router-dom";

export default function Order() {
  const [form, setForm] = useState({ name: "", phone: "", city: "", address: "", comment: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20" style={{ background: 'var(--dark-bg)' }}>
      <div className="w-full max-w-lg">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest mb-10 transition-colors hover:opacity-70"
          style={{ color: 'var(--gold)', fontFamily: 'Cinzel, serif' }}
        >
          ← Вернуться на сайт
        </Link>

        {submitted ? (
          <div className="text-center py-16">
            <div className="text-5xl mb-6">✦</div>
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Cinzel, serif' }}>
              Заказ принят!
            </h2>
            <p className="text-white/60 leading-relaxed mb-8">
              Спасибо! Мы свяжемся с вами в ближайшее время для подтверждения заказа и уточнения деталей доставки.
            </p>
            <p className="text-sm" style={{ color: 'var(--teal)' }}>
              Доставка осуществляется только по Крыму
            </p>
          </div>
        ) : (
          <>
            <div className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: 'var(--teal)', fontFamily: 'Cinzel, serif' }}>
              ✦ Оформление заказа
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2" style={{ fontFamily: 'Cinzel, serif' }}>
              Загадка.<br />
              <span style={{ color: 'var(--gold)' }}>Легенды Крыма</span>
            </h1>
            <p className="text-white/50 text-sm mb-8">Цена: <span className="font-semibold" style={{ color: 'var(--gold)' }}>2 500 ₽</span> &nbsp;·&nbsp; Доставка только по Крыму</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Имя *</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Ваше имя"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-white text-sm rounded-lg outline-none focus:ring-1 transition-all"
                  style={{ background: 'var(--dark-card)', border: '1px solid rgba(201,168,76,0.2)', focusRingColor: 'var(--gold)' }}
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Телефон *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+7 978 000-00-00"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-white text-sm rounded-lg outline-none transition-all"
                  style={{ background: 'var(--dark-card)', border: '1px solid rgba(201,168,76,0.2)' }}
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Город (Крым) *</label>
                <input
                  type="text"
                  name="city"
                  required
                  placeholder="Например: Симферополь"
                  value={form.city}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-white text-sm rounded-lg outline-none transition-all"
                  style={{ background: 'var(--dark-card)', border: '1px solid rgba(201,168,76,0.2)' }}
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Адрес доставки *</label>
                <input
                  type="text"
                  name="address"
                  required
                  placeholder="Улица, дом, квартира"
                  value={form.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-white text-sm rounded-lg outline-none transition-all"
                  style={{ background: 'var(--dark-card)', border: '1px solid rgba(201,168,76,0.2)' }}
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Комментарий</label>
                <textarea
                  name="comment"
                  rows={3}
                  placeholder="Пожелания к заказу..."
                  value={form.comment}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-white text-sm rounded-lg outline-none transition-all resize-none"
                  style={{ background: 'var(--dark-card)', border: '1px solid rgba(201,168,76,0.2)' }}
                />
              </div>

              <div className="pt-2 p-4 rounded-lg text-sm" style={{ background: 'rgba(45,212,191,0.08)', border: '1px solid rgba(45,212,191,0.2)' }}>
                <p style={{ color: 'var(--teal)' }}>🚚 Доставка осуществляется только в пределах Крыма. После оформления заказа наш менеджер свяжется с вами для уточнения деталей.</p>
              </div>

              <button
                type="submit"
                className="w-full py-4 text-sm uppercase tracking-widest font-semibold transition-all duration-300 hover:opacity-90 hover:scale-[1.02] rounded-lg mt-2"
                style={{ background: 'var(--gold)', color: '#0D1117', fontFamily: 'Cinzel, serif' }}
              >
                Отправить заказ
              </button>
            </form>

            <p className="text-center text-white/30 text-xs mt-6">
              Вопросы? Пишите на{" "}
              <a href="mailto:zagadkicrimea@gmail.com" className="underline hover:text-white/60 transition-colors">
                zagadkicrimea@gmail.com
              </a>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

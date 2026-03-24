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
    <div className="min-h-screen flex items-center justify-center px-6 py-20" style={{ background: 'var(--wf-bg)' }}>
      <div className="w-full max-w-lg">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium mb-10 transition-opacity hover:opacity-70"
          style={{ color: 'var(--wf-text-muted)' }}
        >
          ← Вернуться на сайт
        </Link>

        {submitted ? (
          <div className="text-center py-16">
            <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: 'var(--wf-btn)', color: '#fff', fontSize: 28 }}>✓</div>
            <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--wf-text)' }}>
              Заказ принят!
            </h2>
            <p className="leading-relaxed mb-8" style={{ color: 'var(--wf-text-muted)' }}>
              Спасибо! Мы свяжемся с вами в ближайшее время для подтверждения заказа и уточнения деталей доставки.
            </p>
            <p className="text-sm font-medium" style={{ color: 'var(--wf-btn-dark)' }}>
              Доставка осуществляется только по Крыму
            </p>
          </div>
        ) : (
          <>
            <div className="text-xs uppercase tracking-widest font-medium mb-4" style={{ color: 'var(--wf-text-muted)' }}>
              Оформление заказа
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold mb-2" style={{ color: 'var(--wf-text)' }}>
              Загадка. Легенды Крыма
            </h1>
            <p className="text-sm mb-8" style={{ color: 'var(--wf-text-muted)' }}>
              Цена: <strong style={{ color: 'var(--wf-text)' }}>2 500 ₽</strong> · Доставка только по Крыму
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { label: "Имя", name: "name", type: "text", placeholder: "Ваше имя", required: true },
                { label: "Телефон", name: "phone", type: "tel", placeholder: "+7 978 000-00-00", required: true },
                { label: "Город (Крым)", name: "city", type: "text", placeholder: "Например: Симферополь", required: true },
                { label: "Адрес доставки", name: "address", type: "text", placeholder: "Улица, дом, квартира", required: true },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-xs uppercase tracking-widest font-medium mb-2" style={{ color: 'var(--wf-text-muted)' }}>
                    {field.label} {field.required && "*"}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    required={field.required}
                    placeholder={field.placeholder}
                    value={form[field.name as keyof typeof form]}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-sm rounded-lg outline-none focus:ring-2 focus:ring-gray-400 transition-all"
                    style={{ background: 'var(--wf-bg-alt)', border: '1px solid var(--wf-border)', color: 'var(--wf-text)' }}
                  />
                </div>
              ))}

              <div>
                <label className="block text-xs uppercase tracking-widest font-medium mb-2" style={{ color: 'var(--wf-text-muted)' }}>
                  Комментарий
                </label>
                <textarea
                  name="comment"
                  rows={3}
                  placeholder="Пожелания к заказу..."
                  value={form.comment}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-sm rounded-lg outline-none focus:ring-2 focus:ring-gray-400 transition-all resize-none"
                  style={{ background: 'var(--wf-bg-alt)', border: '1px solid var(--wf-border)', color: 'var(--wf-text)' }}
                />
              </div>

              <div className="p-4 rounded-lg text-sm" style={{ background: 'var(--wf-bg-alt)', border: '1px solid var(--wf-border)' }}>
                <p style={{ color: 'var(--wf-text-muted)' }}>Доставка осуществляется только в пределах Крыма. После оформления заказа наш менеджер свяжется с вами для уточнения деталей.</p>
              </div>

              <button
                type="submit"
                className="w-full py-4 text-sm font-semibold rounded-lg transition-opacity hover:opacity-80 mt-2"
                style={{ background: 'var(--wf-btn-dark)', color: '#fff' }}
              >
                Отправить заказ
              </button>
            </form>

            <p className="text-center text-xs mt-6" style={{ color: 'var(--wf-text-muted)' }}>
              Вопросы? Пишите на{" "}
              <a href="mailto:zagadkicrimea@gmail.com" className="underline hover:opacity-70 transition-opacity">
                zagadkicrimea@gmail.com
              </a>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

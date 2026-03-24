export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] px-6 text-center" style={{ background: 'var(--wf-bg)' }}>
      <h1 className="text-5xl md:text-7xl font-bold mb-4" style={{ color: 'var(--wf-text)' }}>
        Загадка. Легенды Крыма
      </h1>
      <p className="text-lg md:text-xl mb-12" style={{ color: 'var(--wf-text-muted)' }}>
        Настольная игра о культурном наследии полуострова
      </p>
      <div className="flex gap-6 flex-wrap justify-center">
        <a
          href="#about"
          className="px-10 py-4 rounded-xl text-base font-medium transition-opacity hover:opacity-80"
          style={{ background: 'var(--wf-btn)', color: '#fff' }}
        >
          О проекте
        </a>
        <a
          href="/order"
          className="px-10 py-4 rounded-xl text-base font-medium transition-opacity hover:opacity-80"
          style={{ background: 'var(--wf-btn-dark)', color: '#fff' }}
        >
          Заказать игру
        </a>
      </div>
    </div>
  );
}

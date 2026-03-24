export default function Featured() {
  return (
    <section id="about" className="py-24 px-6" style={{ background: 'var(--wf-bg-alt)' }}>
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 flex items-center justify-center">
          <div
            className="w-full max-w-sm aspect-[3/4] rounded-2xl flex items-center justify-center"
            style={{ background: 'var(--wf-placeholder)', border: '2px dashed var(--wf-border)' }}
          >
            <span className="text-sm font-medium" style={{ color: 'var(--wf-text-muted)' }}>Изображение игры</span>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-6 max-w-xl">
          <div className="text-xs uppercase tracking-widest font-medium" style={{ color: 'var(--wf-text-muted)' }}>
            О проекте
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold leading-tight" style={{ color: 'var(--wf-text)' }}>
            Сохранить фольклор в эпоху технологий
          </h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--wf-text-muted)' }}>
            Загадка. Легенды Крыма — это живой мост между древними преданиями полуострова и современным миром. Каждая карточка, каждый ход хранит в себе фрагмент настоящей крымской легенды.
          </p>
          <p className="text-base leading-relaxed" style={{ color: 'var(--wf-text-muted)' }}>
            Игра создана для <strong style={{ color: 'var(--wf-text)' }}>студентов</strong>, увлечённых историей, <strong style={{ color: 'var(--wf-text)' }}>туристов</strong>, желающих открыть полуостров глубже, и <strong style={{ color: 'var(--wf-text)' }}>семей</strong>, которые ищут вечера, полные смысла и приключений.
          </p>
          <a
            href="#features"
            className="inline-block w-fit px-8 py-3 text-sm font-medium rounded-lg transition-opacity hover:opacity-80"
            style={{ background: 'var(--wf-btn)', color: '#fff' }}
          >
            Узнать больше
          </a>
        </div>
      </div>
    </section>
  );
}

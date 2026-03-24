export default function Featured() {
  return (
    <section id="about" className="min-h-screen flex flex-col lg:flex-row items-center px-6 py-20 lg:py-0" style={{ background: 'var(--dark-bg)' }}>
      <div className="flex-1 lg:h-[90vh] flex items-center justify-center mb-12 lg:mb-0 lg:pr-16">
        <div className="relative">
          <div className="absolute inset-0 rounded-2xl blur-3xl opacity-20" style={{ background: 'var(--gold)' }} />
          <img
            src="https://cdn.poehali.dev/projects/853aaa2c-2f2d-41f4-9b3b-18a68c5eca7f/bucket/57dfd696-b020-4b10-a6bc-040e50a48dfd.jpg"
            alt="Карта игры Enigma. Легенды Крыма"
            className="relative rounded-2xl shadow-2xl max-h-[70vh] w-auto object-contain"
            style={{ border: '1px solid rgba(201,168,76,0.3)' }}
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center max-w-xl">
        <div className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: 'var(--teal)', fontFamily: 'Cinzel, serif' }}>
          ✦ О проекте
        </div>
        <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white leading-tight" style={{ fontFamily: 'Cinzel, serif' }}>
          Сохранить фольклор<br />
          <span style={{ color: 'var(--gold)' }}>в эпоху технологий</span>
        </h2>
        <p className="text-white/60 text-base leading-relaxed mb-6">
          Enigma. Легенды Крыма — это не просто настольная игра. Это живой мост между древними преданиями полуострова и современным миром. Каждая карточка, каждый ход хранит в себе фрагмент настоящей крымской легенды.
        </p>
        <p className="text-white/60 text-base leading-relaxed mb-8">
          Игра создана для <span style={{ color: 'var(--gold)' }}>студентов</span>, увлечённых историей, <span style={{ color: 'var(--gold)' }}>туристов</span>, желающих открыть полуостров глубже, и <span style={{ color: 'var(--gold)' }}>семей</span>, которые ищут вечера, полные смысла и приключений.
        </p>
        <a
          href="#features"
          className="inline-block w-fit px-8 py-3 text-sm uppercase tracking-widest transition-all duration-300 hover:opacity-80"
          style={{ border: '1px solid var(--gold)', color: 'var(--gold)', fontFamily: 'Cinzel, serif' }}
        >
          Узнать больше
        </a>
      </div>
    </section>
  );
}

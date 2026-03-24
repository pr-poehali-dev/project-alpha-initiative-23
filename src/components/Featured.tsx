export default function Featured() {
  return (
    <section id="about" className="py-20 px-6 bg-white border-b border-gray-300">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
        <div className="flex-1 bg-gray-200 border border-gray-400 flex items-center justify-center" style={{ minHeight: 300 }}>
          <span className="text-gray-500 text-sm">[ Изображение игры ]</span>
        </div>
        <div className="flex-1">
          <div className="text-xs uppercase tracking-widest text-gray-500 mb-3">О проекте</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Настольная игра о Крыме
          </h2>
          <p className="text-gray-600 mb-4">
            Enigma — игра для тех, кто хочет узнать крымские легенды. Подходит для семьи, туристов и студентов.
          </p>
          <a
            href="#features"
            className="inline-block px-6 py-2 border border-gray-800 text-gray-800 text-sm uppercase hover:bg-gray-100"
          >
            Особенности
          </a>
        </div>
      </div>
    </section>
  );
}

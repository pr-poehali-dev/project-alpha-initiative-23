export default function Hero() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 border-b border-gray-300">
      <div className="text-center px-6 max-w-3xl mx-auto">
        <div className="text-xs uppercase tracking-widest text-gray-500 mb-4">Настольная игра</div>
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Загадка. Легенды Крыма
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Настольная игра о крымских легендах для 2–6 игроков
        </p>
        <a
          href="#about"
          className="inline-block px-8 py-3 bg-gray-800 text-white text-sm uppercase tracking-widest hover:bg-gray-700"
        >
          Узнать больше
        </a>
      </div>
    </div>
  );
}

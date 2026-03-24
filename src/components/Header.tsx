export default function Header() {
  return (
    <header className="w-full bg-gray-200 border-b border-gray-400 px-6 py-4">
      <div className="flex justify-between items-center max-w-5xl mx-auto">
        <div className="font-bold text-gray-800 uppercase tracking-widest text-sm">
          ЗАГАДКА
        </div>
        <nav className="flex gap-8">
          <a href="#about" className="text-gray-600 hover:text-gray-900 text-sm uppercase">О проекте</a>
          <a href="#features" className="text-gray-600 hover:text-gray-900 text-sm uppercase">Особенности</a>
          <a href="#pricing" className="text-gray-600 hover:text-gray-900 text-sm uppercase">Купить</a>
        </nav>
      </div>
    </header>
  );
}

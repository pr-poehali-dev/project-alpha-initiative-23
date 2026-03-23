interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-50 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-white font-bold tracking-widest uppercase" style={{ fontFamily: 'Cinzel, serif', color: 'var(--gold)' }}>
          ✦ ENIGMA
        </div>
        <nav className="flex gap-8">
          <a href="#about" className="text-white/80 hover:text-yellow-400 transition-colors duration-300 uppercase text-xs tracking-widest">
            О проекте
          </a>
          <a href="#features" className="text-white/80 hover:text-yellow-400 transition-colors duration-300 uppercase text-xs tracking-widest">
            Особенности
          </a>
          <a href="#pricing" className="text-white/80 hover:text-yellow-400 transition-colors duration-300 uppercase text-xs tracking-widest">
            Купить
          </a>
        </nav>
      </div>
    </header>
  );
}

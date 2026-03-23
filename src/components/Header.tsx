interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`sticky top-0 z-50 px-8 py-4 flex items-center justify-between ${className ?? ""}`} style={{ background: 'var(--wf-header)', borderBottom: '1px solid var(--wf-border)' }}>
      <div className="flex-1 flex items-center gap-12">
        <a href="#about" className="text-sm font-medium" style={{ color: 'var(--wf-text)' }}>О проекте</a>
        <a href="#features" className="text-sm font-medium" style={{ color: 'var(--wf-text)' }}>Особенности</a>
      </div>

      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-full" style={{ background: 'var(--wf-bg)' }} />
      </div>

      <div className="flex-1 flex items-center justify-end gap-12">
        <a href="#reviews" className="text-sm font-medium" style={{ color: 'var(--wf-text)' }}>Отзывы</a>
        <a href="#pricing" className="text-sm font-medium" style={{ color: 'var(--wf-text)' }}>Контакты</a>
      </div>
    </header>
  );
}

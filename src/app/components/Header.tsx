interface HeaderProps {
  title: string
  subtitle?: string
  className?: string
}

export default function Header({ title, subtitle, className = '' }: HeaderProps) {
  return (
    <header className={`page-header ${className}`}>
      <h1 className="text-4xl font-bold mb-2">{title}</h1>
      {subtitle && <p className="text-lg text-gray-700">{subtitle}</p>}
    </header>
  )
}

'use client'

interface BannerProps {
  children: React.ReactNode
  className?: string
}

export default function Banner({ children, className = '' }: BannerProps) {
  return <div className={`banner ${className}`}>{children}</div>
}

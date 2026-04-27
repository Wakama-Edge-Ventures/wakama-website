import { cn } from "@/lib/utils"

interface CardProps {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className }: Readonly<CardProps>) {
  return (
    <div
      className={cn(
        "rounded-2xl border bg-[var(--wk-paper)] p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04)]",
        className
      )}
    >
      {children}
    </div>
  )
}

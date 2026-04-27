import { cn } from "@/lib/utils"

interface BadgeProps {
  children: React.ReactNode
  className?: string
}

export function Badge({ children, className }: Readonly<BadgeProps>) {
  return (
    <span
      className={cn(
        "inline-flex rounded-md border bg-[var(--wk-paper)] px-3 py-1 font-mono text-xs text-[var(--wk-stone)]",
        className
      )}
    >
      {children}
    </span>
  )
}

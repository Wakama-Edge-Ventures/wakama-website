import { cn } from "@/lib/utils"

interface TagProps {
  children: React.ReactNode
  className?: string
}

export function Tag({ children, className }: Readonly<TagProps>) {
  return (
    <span
      className={cn(
        "inline-flex rounded-md bg-[var(--wk-bone)] px-3 py-1 font-mono text-xs uppercase tracking-[0.08em] text-[var(--wk-graphite)]",
        className
      )}
    >
      {children}
    </span>
  )
}

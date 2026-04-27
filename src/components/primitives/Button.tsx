import Link from "next/link"
import { cn } from "@/lib/utils"

interface ButtonProps {
  href: string
  children: React.ReactNode
  variant?: "primary" | "secondary"
}

export function Button({
  href,
  children,
  variant = "primary"
}: Readonly<ButtonProps>) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-lg border px-6 py-3 text-sm font-medium",
        variant === "primary"
          ? "border-[var(--wk-ink)] bg-[var(--wk-ink)] text-[var(--wk-paper)] hover:bg-[var(--wk-graphite)]"
          : "border-[var(--wk-ink)] bg-transparent text-[var(--wk-ink)] hover:bg-[rgb(15_26_20_/_4%)]"
      )}
    >
      {children}
    </Link>
  )
}

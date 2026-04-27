import Link from "next/link"
import { cn } from "@/lib/utils"
import type { LocaleOption } from "@/types"

interface LocaleSwitcherProps {
  options: LocaleOption[]
}

export function LocaleSwitcher({ options }: Readonly<LocaleSwitcherProps>) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[rgb(15_26_20_/_8%)] bg-[var(--wk-paper)] px-2 py-1">
      {options.map((option) => (
        <Link
          key={option.label}
          href={option.href}
          className={cn(
            "rounded-full px-3 py-1 text-xs font-medium",
            option.isActive
              ? "bg-[var(--wk-ink)] text-[var(--wk-paper)]"
              : "text-[var(--wk-stone)] hover:text-[var(--wk-ink)]"
          )}
        >
          {option.label}
        </Link>
      ))}
    </div>
  )
}

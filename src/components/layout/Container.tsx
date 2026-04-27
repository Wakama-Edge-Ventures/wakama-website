import { cn } from "@/lib/utils"

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export function Container({ children, className }: Readonly<ContainerProps>) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-6 md:px-12 xl:px-24", className)}>
      {children}
    </div>
  )
}

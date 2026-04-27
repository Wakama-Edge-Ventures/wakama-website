import { type HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

export function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1280px] px-6 md:px-12 lg:px-24", className)}
      {...props}
    >
      {children}
    </div>
  )
}

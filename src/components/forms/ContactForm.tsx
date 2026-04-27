"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
  name: z.string().min(1),
  email: z.email(),
  organization: z.string().min(1),
  message: z.string().min(1)
})

type FormValues = z.infer<typeof formSchema>

interface ContactFormProps {
  labels: {
    name: string
    email: string
    organization: string
    message: string
    submit: string
  }
}

export function ContactForm({ labels }: Readonly<ContactFormProps>) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      organization: "",
      message: ""
    }
  })

  const onSubmit = () => undefined

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      <input {...register("name")} aria-label={labels.name} className="rounded-lg border bg-[var(--wk-paper)] px-4 py-3" />
      <input {...register("email")} aria-label={labels.email} className="rounded-lg border bg-[var(--wk-paper)] px-4 py-3" />
      <input
        {...register("organization")}
        aria-label={labels.organization}
        className="rounded-lg border bg-[var(--wk-paper)] px-4 py-3"
      />
      <textarea
        {...register("message")}
        aria-label={labels.message}
        className="min-h-32 rounded-lg border bg-[var(--wk-paper)] px-4 py-3"
      />
      <button type="submit" className="rounded-lg bg-[var(--wk-ink)] px-6 py-3 text-sm font-medium text-[var(--wk-paper)]">
        {labels.submit}
      </button>
      <div className="hidden">{Object.keys(errors).length}</div>
    </form>
  )
}

import { getTranslations, setRequestLocale } from "next-intl/server"

export default async function HomePage({
  params,
}: Readonly<{
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: "home" })

  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      <span className="mb-4 font-mono text-sm uppercase tracking-widest text-wk-green">
        {t("eyebrow")}
      </span>
      <h1 className="max-w-3xl text-5xl font-semibold md:text-7xl">
        {t("title")}
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-wk-stone">
        {t("subtitle")}
      </p>
    </section>
  )
}

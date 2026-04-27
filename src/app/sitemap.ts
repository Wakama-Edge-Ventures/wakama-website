import type { MetadataRoute } from "next"
import { routing } from "@/lib/i18n"

const localizedPaths = [
  "",
  "/products/score",
  "/products/services",
  "/products/insurance",
  "/solutions/imf",
  "/solutions/banks",
  "/solutions/insurers",
  "/technology",
  "/compliance",
  "/company/about",
  "/company/team",
  "/company/newsroom",
  "/investors",
  "/contact",
  "/legal/terms",
  "/legal/privacy"
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://wakama.farm"

  return routing.locales.flatMap((locale) =>
    localizedPaths.map((path) => ({
      url: `${baseUrl}${locale === "fr" ? path || "/" : `/en${path}`}`,
      lastModified: new Date()
    }))
  )
}

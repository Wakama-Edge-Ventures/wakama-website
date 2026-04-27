import type { Metadata } from "next"

export function getBaseUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "https://wakama.farm"
}

export function buildMetadata(title: string, description: string): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: getBaseUrl()
    },
    openGraph: {
      title,
      description,
      url: getBaseUrl(),
      siteName: "Wakama",
      type: "website"
    }
  }
}

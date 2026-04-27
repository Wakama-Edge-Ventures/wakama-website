export type Locale = "fr" | "en"

export interface NavItem {
  href: string
  label: string
}

export interface LocaleOption {
  href: string
  label: string
  isActive: boolean
}

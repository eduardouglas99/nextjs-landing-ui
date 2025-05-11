import enTranslations from "../locales/en.json"
import ptTranslations from "../locales/pt.json"

export type Language = "EN" | "PT"
export type Currency = "USD" | "BRL"

export const translations = {
  EN: enTranslations,
  PT: ptTranslations,
}

export function getTranslation(language: Language, path: string) {
  const keys = path.split(".")
  let current: any = translations[language]

  for (const key of keys) {
    if (current[key] === undefined) {
      console.warn(`Translation missing: ${path} for language ${language}`)
      return path
    }
    current = current[key]
  }

  return current
}

export const exchangeRates = {
  USD: 1,
  BRL: 5.2,
}

export function convertPrice(priceUSD: number, currency: Currency) {
  const rate = exchangeRates[currency]
  const price = priceUSD * rate

  if (currency === "USD") {
    return `$${price.toFixed(2)}`
  } else {
    return `R$${price.toFixed(2)}`
  }
}

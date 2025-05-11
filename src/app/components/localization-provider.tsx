"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { Language, Currency, getTranslation, convertPrice } from "../lib/i18n";

interface LocalizationContextType {
  language: Language;
  currency: Currency;
  t: (path: string) => string;
  formatPrice: (priceUSD: number) => string;
  setLanguage: (lang: Language) => void;
  setCurrency: (currency: Currency) => void;
}

const LocalizationContext = createContext<LocalizationContextType>({
  language: "EN",
  currency: "USD",
  t: (path) => path,
  formatPrice: (price) => `$${price.toFixed(2)}`,
  setLanguage: () => {},
  setCurrency: () => {},
});

export const useLocalization = () => useContext(LocalizationContext);

export function LocalizationProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("EN");
  const [currency, setCurrency] = useState<Currency>("USD");

  const t = (path: string) => getTranslation(language, path);

  const formatPrice = (priceUSD: number) => convertPrice(priceUSD, currency);

  return (
    <LocalizationContext.Provider
      value={{
        language,
        currency,
        t,
        formatPrice,
        setLanguage,
        setCurrency,
      }}
    >
      {children}
    </LocalizationContext.Provider>
  );
}

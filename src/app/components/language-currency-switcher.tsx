"use client";

import { Globe, DollarSign, Info } from "lucide-react";
import { useLocalization } from "./localization-provider";
import { Currency, Language } from "../lib/i18n";

export function LanguageCurrencySwitcher() {
  const { language, currency, t, setLanguage, setCurrency } = useLocalization();

  const toggleLanguage = () => {
    const newLanguage: Language = language === "EN" ? "PT" : "EN";
    setLanguage(newLanguage);
    localStorage.setItem("preferredLanguage", newLanguage);
  };

  const toggleCurrency = () => {
    const newCurrency: Currency = currency === "USD" ? "BRL" : "USD";
    setCurrency(newCurrency);
    localStorage.setItem("preferredCurrency", newCurrency);
  };

  const languageButtonLabel =
    language === "EN"
      ? t("buttons.changeToPortuguese")
      : t("buttons.changeToEnglish");

  const currencyButtonLabel =
    currency === "USD"
      ? t("buttons.changeToReal")
      : t("buttons.changeToDollar");

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={toggleLanguage}
        className="cursor-pointer text-gray-400 hover:text-white text-sm flex items-center transition-colors"
        aria-label={languageButtonLabel}
      >
        <Globe className="h-4 w-4 mr-1" />
        {language}
      </button>

      <button
        onClick={toggleCurrency}
        className="cursor-pointer text-gray-400 hover:text-white text-sm flex items-center transition-colors"
        aria-label={currencyButtonLabel}
      >
        <DollarSign className="h-4 w-4 mr-1" />
        {currency}
      </button>

      <button
        className="cursor-pointer text-gray-400 hover:text-white text-sm transition-colors"
        aria-label={t("buttons.information")}
      >
        <Info className="h-4 w-4" />
      </button>
    </div>
  );
}

"use client";

import { useLocalization } from "../components/localization-provider";

type TranslationKey =
  | "welcome"
  | "about"
  | "contact"
  | "products"
  | "addToCart";

const translations: Record<TranslationKey, Record<"EN" | "PT", string>> = {
  welcome: {
    EN: "Welcome to our store",
    PT: "Bem-vindo à nossa loja",
  },
  about: {
    EN: "About us",
    PT: "Sobre nós",
  },
  contact: {
    EN: "Contact us",
    PT: "Entre em contato",
  },
  products: {
    EN: "Products",
    PT: "Produtos",
  },
  addToCart: {
    EN: "Add to cart",
    PT: "Adicionar ao carrinho",
  },
};

export function useTranslations() {
  const { language } = useLocalization();

  const t = (key: TranslationKey) => {
    return translations[key][language];
  };

  return { t };
}

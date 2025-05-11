"use client";
import Link from "next/link";
import { ArrowRight, Globe, Euro, Info } from "lucide-react";
import Image from "next/image";
import { Container } from "../Container";
import { LanguageCurrencySwitcher } from "../language-currency-switcher";
import { useLocalization } from "../localization-provider";

export function Footer() {
  const { t } = useLocalization();
  return (
    <footer className="bg-primary-color text-white">
      <Container className="pt-12 pb-9 md:px-10 md:py-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            <div className="lg:col-span-1">
              <Image
                src="/images/footer/logo-teach.png"
                alt="Teach"
                title="Teach"
                width={173}
                height={35}
              />
            </div>

            <div className="lg:col-span-1">
              <h3 className="font-medium text-lg mb-4">
                {t("footer.product")}
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/pricing"
                    className="text-gray-300 hover:text-white  text-header-base-hover transition-colors"
                  >
                    {t("footer.pricing")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/overview"
                    className="text-gray-300 hover:text-white  text-header-base-hover transition-colors"
                  >
                    {t("footer.overview")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/browse"
                    className="text-gray-300 hover:text-white text-header-base-hover transition-colors"
                  >
                    {t("footer.browse")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/accessibility"
                    className="text-gray-300 hover:text-white text-header-base-hover transition-colors flex items-center"
                  >
                    Accessibility
                    <span className="ml-2 text-xs bg-white text-purple-600 px-1.5 py-0.5 rounded">
                      {t("footer.beta")}
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-1">
              <h3 className="font-medium text-lg mb-4">
                {" "}
                {t("footer.solutions")}
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/brainstorming"
                    className="text-gray-300 hover:text-white text-header-base-hover transition-colors"
                  >
                    {t("footer.brainstorming")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ideation"
                    className="text-gray-300 hover:text-white text-header-base-hover transition-colors"
                  >
                    {t("footer.ideation")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/wireframing"
                    className="text-gray-300 hover:text-white text-header-base-hover transition-colors"
                  >
                    {t("footer.wireframing")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/research"
                    className="text-gray-300 hover:text-white text-header-base-hover transition-colors"
                  >
                    {t("footer.research")}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-1">
              <h3 className="font-medium text-lg mb-4">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/help-center"
                    className="text-gray-300 hover:text-white text-header-base-hover transition-colors"
                  >
                    {t("footer.helpcenter")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-300 hover:text-white text-header-base-hover transition-colors"
                  >
                    {t("footer.blog")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tutorials"
                    className="text-gray-300 hover:text-white text-header-base-hover transition-colors"
                  >
                    {t("footer.tutorials")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faqs"
                    className="text-gray-300 hover:text-white text-header-base-hover transition-colors"
                  >
                    {t("footer.faqs")}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-1">
              <h3 className="font-medium text-lg mb-4">
                {" "}
                {t("footer.support")}
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-300 hover:text-white text-header-base-hover transition-colors"
                  >
                    {t("footer.contactus")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/developers"
                    className="text-gray-300 hover:text-white text-header-base-hover transition-colors"
                  >
                    {t("footer.developers")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/documentation"
                    className="text-gray-300 hover:text-white text-header-base-hover transition-colors"
                  >
                    {t("footer.documentation")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/integrations"
                    className="text-gray-300 hover:text-white text-header-base-hover transition-colors"
                  >
                    {t("footer.integrations")}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-1">
              <h3 className="font-medium text-lg mb-4">
                {" "}
                {t("footer.company")}
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-300 hover:text-white text-header-base-hover transition-colors"
                  >
                    {t("footer.about")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/press"
                    className="text-gray-300 hover:text-white text-header-base-hover transition-colors"
                  >
                    {t("footer.press")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/events"
                    className="text-gray-300 hover:text-white text-header-base-hover transition-colors"
                  >
                    {t("footer.events")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/request-demo"
                    className="text-gray-300 hover:text-white text-header-base-hover transition-colors flex items-center"
                  >
                    {t("footer.requestdemo")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800"></div>

        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              uteach © {new Date().getFullYear()}. {t("footer.rights")}
            </div>
            <div className="flex items-center space-x-6">
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white  text-header-base-hover text-sm transition-colors"
              >
                {t("footer.terms")}
              </Link>
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white  text-header-base-hover text-sm transition-colors"
              >
                {t("navigation.privacy")}
              </Link>
              <Link
                href="/contact"
                className="text-gray-400 hover:text-white  text-header-base-hover text-sm transition-colors"
              >
                {t("footer.contact")}
              </Link>
              <LanguageCurrencySwitcher />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

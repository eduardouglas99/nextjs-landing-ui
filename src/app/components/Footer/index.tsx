import Link from "next/link";
import { ArrowRight, Globe, Euro, Info } from "lucide-react";
import Image from "next/image";
import { Container } from "../components/Container";

export function Footer() {
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
              <h3 className="font-medium text-lg mb-4">Product</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/pricing"
                    className="text-gray-300 hover:text-white  text-header-base-hover transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/overview"
                    className="text-gray-300 hover:text-white  text-header-base-hover transition-colors"
                  >
                    Overview
                  </Link>
                </li>
                <li>
                  <Link
                    href="/browse"
                    className="text-gray-300 hover:text-white text-header-base-hover transition-colors"
                  >
                    Browse
                  </Link>
                </li>
                <li>
                  <Link
                    href="/accessibility"
                    className="text-gray-300 hover:text-white text-header-base-hover transition-colors flex items-center"
                  >
                    Accessibility
                    <span className="ml-2 text-xs bg-white text-purple-600 px-1.5 py-0.5 rounded">
                      BETA
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-1">
              <h3 className="font-medium text-lg mb-4">Solutions</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/brainstorming"
                    className="text-gray-300 hover:text-white text-header-base-hover transition-colors"
                  >
                    Brainstorming
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ideation"
                    className="text-gray-300 hover:text-white text-header-base-hover transition-colors"
                  >
                    Ideation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/wireframing"
                    className="text-gray-300 hover:text-white text-header-base-hover transition-colors"
                  >
                    Wireframing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/research"
                    className="text-gray-300 hover:text-white text-header-base-hover transition-colors"
                  >
                    Research
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
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-300 hover:text-white text-header-base-hover transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tutorials"
                    className="text-gray-300 hover:text-white text-header-base-hover transition-colors"
                  >
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faqs"
                    className="text-gray-300 hover:text-white text-header-base-hover transition-colors"
                  >
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-1">
              <h3 className="font-medium text-lg mb-4">Support</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-300 hover:text-white text-header-base-hover transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/developers"
                    className="text-gray-300 hover:text-white text-header-base-hover transition-colors"
                  >
                    Developers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/documentation"
                    className="text-gray-300 hover:text-white text-header-base-hover transition-colors"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/integrations"
                    className="text-gray-300 hover:text-white text-header-base-hover transition-colors"
                  >
                    Integrations
                  </Link>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-1">
              <h3 className="font-medium text-lg mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-300 hover:text-white text-header-base-hover transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/press"
                    className="text-gray-300 hover:text-white text-header-base-hover transition-colors"
                  >
                    Press
                  </Link>
                </li>
                <li>
                  <Link
                    href="/events"
                    className="text-gray-300 hover:text-white text-header-base-hover transition-colors"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="/request-demo"
                    className="text-gray-300 hover:text-white text-header-base-hover transition-colors flex items-center"
                  >
                    Request Demo
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
              uteach © {new Date().getFullYear()}. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white  text-header-base-hover text-sm transition-colors"
              >
                Terms
              </Link>
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white  text-header-base-hover text-sm transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/contact"
                className="text-gray-400 hover:text-white  text-header-base-hover text-sm transition-colors"
              >
                Contact
              </Link>
              <button className="text-gray-400 hover:text-white  text-header-base-hover text-sm flex items-center transition-colors">
                <Globe className="h-4 w-4 mr-1" />
                EN
              </button>
              <button className="text-gray-400 hover:text-white  text-header-base-hover text-sm flex items-center transition-colors">
                <Euro className="h-4 w-4 mr-1" />
                EUR
              </button>
              <button className="text-gray-400 hover:text-white  text-header-base-hover text-sm transition-colors">
                <Info className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Container } from "../Container";
import SectionTitle from "../SectionTitle";

export default function AppPromo() {
  return (
    <Container className="md:p-20">
      <section className="w-full bg-white overflow-hidden">
        <div className="container mx-auto relative">
          <div className="flex flex-col lg:flex-row items-center relative z-10 lg:gap-x-12">
            <div className="space-y-8 flex-1 lg:max-w-[50%] lg:pr-16">
              <SectionTitle
                words={[
                  "An",
                  "all-in-one",
                  "app",
                  "that",
                  "makes",
                  "it",
                  "easier",
                ]}
                underlineIndex={1}
                className="text-[52px] font-extrabold leading-[110.00000000000001%] w-[93%] max-w-full p-0 m-0"
              />

              <ul className="space-y-3 pb-0 m-0 my-8">
                <li className="flex items-start gap-2">
                  <Check
                    className="h-5 w-5 primary-color mt-1 flex-shrink-0"
                    width={24}
                    height={24}
                  />
                  <span className="primary-color text-lg">
                    Est et in pharetra magna adipiscing ornare aliquam.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check
                    className="h-5 w-5 primary-color mt-1 flex-shrink-0"
                    width={24}
                    height={24}
                  />
                  <span className="primary-color text-lg">
                    Tellus arcu sed consequat ac velit ut eu blandit.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check
                    className="h-5 w-5 primary-color mt-1 flex-shrink-0"
                    width={24}
                    height={24}
                  />
                  <span className="primary-color text-lg">
                    Ullamcorper ornare in et egestas dolor orci.
                  </span>
                </li>
              </ul>

              <Link
                href="/"
                className="inline-flex items-center text-lg text-blue-600 font-medium hover:text-blue-700 transition-colors text-header-base-hover"
              >
                Find more about the app
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="relative flex-1 flex-shrink-0 mt-12 lg:mt-0 lg:max-w-[50%]">
              <Image
                src="/images/app-promo/yellow-points.svg"
                alt="Yellow points"
                width={139}
                height={582}
                className="absolute z-20 h-[510px] lg:left-[-32%] top-0 hidden sm:block"
              />

              <Image
                src="/images/app-promo/blob.svg"
                alt="Blob"
                width={506}
                height={448}
                className="absolute z-10 h-[390px] lg:left-[-170px] bottom-5 -rotate-[calc(345deg)] hidden sm:block"
              />

              <div className="relative z-30 rounded-lg overflow-hidden md:h-[500px] max-w-[600px] mx-auto">
                <Image
                  src="/images/app-promo/desktop.svg"
                  alt="App interface demonstration"
                  width={600}
                  height={350}
                  className="w-full h-auto"
                />
              </div>

              <div className="absolute z-50 bottom-[20px] left-[40%] transform -translate-x-1/2 flex flex-col md:flex-row items-center justify-center gap-4 w-full md:max-w-[720px] mx-auto">
                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 w-[90%] md:w-[30%]"
                    style={{ boxShadow: '0px 20px 25px -5px #0000001A' }}>
                  <div className="p-4">
                    <div className="text-xs font-medium text-orange-500 mb-2 bg-orange-50 w-fit px-2 py-1 rounded">
                      Featured
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      The map of mathematics
                    </h3>
                    <p className="text-xs text-gray-500">
                      Egestas elit dui pellentesque ut augue aliquet vitae
                      habitasse.
                    </p>
                  </div>
                  <div className="px-4 pb-4">
                    <button className="w-full py-2 text-sm text-center border border-gray-300 rounded hover:bg-gray-50 transition-colors">
                      Take Lesson
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 w-[90%] md:w-[30%]"
                    style={{ boxShadow: '0px 20px 25px -5px #0000001A' }}>
                  <div className="p-4">
                    <div className="text-xs font-medium text-blue-500 mb-2 bg-blue-50 w-fit px-2 py-1 rounded">
                      Popular
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Design for how people think
                    </h3>
                    <p className="text-xs text-gray-500">
                      Aliquam ut euismod consectetur elementum ultricies
                      volutpat sit non.
                    </p>
                  </div>
                  <div className="px-4 pb-4">
                    <button className="w-full py-2 text-sm text-center border border-gray-300 rounded hover:bg-gray-50 transition-colors">
                      Take Lesson
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 w-[90%] md:w-[30%]"
                    style={{ boxShadow: '0px 20px 25px -5px #0000001A' }}>
                  <div className="p-4">
                    <div className="text-xs font-medium text-green-500 mb-2 bg-green-50 w-fit px-2 py-1 rounded">
                      New
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      International & commercial law
                    </h3>
                    <p className="text-xs text-gray-500">
                      Molestie integer eu arcu, mauris bibendum rhoncus
                      imperdiet dui.
                    </p>
                  </div>
                  <div className="px-4 pb-4">
                    <button className="w-full py-2 text-sm text-center border border-gray-300 rounded hover:bg-gray-50 transition-colors">
                      Take Lesson
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Container } from "../Container";
import SectionTitle from "../SectionTitle";
import CardPromo from "../CardPromo";

export default function AppPromo() {
  const cardPromoInfos = [
    {
      label: "Featured",
      color: "#6B21A8",
      title: "The map of mathematics",
      description:
        "Egestas elit dui pellentesque ut augue aliquet vitae habitasse.",
    },
    {
      label: "Popular",
      color: "#1E40AF",
      title: "Design for how people think",
      description:
        "Aliquam ut euismod consectetur elementum ultricies volutpat sit non.",
    },
    {
      label: "New",
      color: "#166534",
      title: "International & commercial law",
      description:
        "Molestie integer eu arcu, mauris bibendum rhoncus imperdiet dui.",
    },
  ];
  return (
    <Container className="py-12 pb-0 md:px-10 md:pt-20">
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
                {cardPromoInfos &&
                  cardPromoInfos.map(
                    ({ color, description, label, title }, id) => (
                      <CardPromo
                        key={id}
                        title={title}
                        ariaLabel="Take Lesson"
                        buttonName="Take Lesson"
                        description={description}
                        color={color}
                        label={label}
                      />
                    )
                  )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

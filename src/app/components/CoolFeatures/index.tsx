import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Container } from "../Container";
import SectionTitle from "../SectionTitle";
import CardPromo from "../CardPromo";

export default function CoolFeatures() {
  const cardPromoInfos = [
    {
      label: "Popular",
      color: "#1E40AF",
      title: "Design for how people think",
      description:
        "Aliquam ut euismod consectetur elementum ultricies volutpat sit non.",
    },
  ];
  return (
    <Container className="py-12 pb-0 md:px-10 md:py-20">
      <section className="w-full bg-white overflow-hidden">
        <div className="container mx-auto relative">
          <div className="flex flex-col lg:flex-row items-center relative z-10 lg:gap-x-12">
            <div className="space-y-8 flex-1 lg:max-w-[50%] lg:pr-16">
              <SectionTitle
                words={["All", "the", "cool", "features"]}
                underlineIndex={3}
                className="md:font-extrabold leading-[110.00000000000001%] w-[93%] max-w-full p-0 m-0"
              />

              <p className="primary-color my-6 sm:my-8 text-base sm:font-normal leading-[140%] sm:leading-[180%]">
                Mauris consequat, cursus pharetra et, habitasse rhoncus quis
                odio ac. In et dolor eu donec maecenas nulla. Cum sed orci, sit
                pellentesque quisque feugiat cras ullamcorper. Ultrices in amet,
                ullamcorper non viverra a, neque orci.
              </p>

              <Link
                href="/"
                className="inline-flex items-center text-lg text-blue-600 font-medium hover:text-blue-700 transition-colors text-header-base-hover"
              >
                View all the features
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="relative flex-1 flex flex-col flex-shrink-0 mt-12 lg:mt-0 lg:max-w-[50%]">
              <img
                src="/images/app-promo/yellow-points.svg"
                alt="Yellow points"
                width={139}
                height={582}
                className="absolute h-[510px] left-[30%] lg:left-[40%] top-[-12%] lg:top-[2-00px] sm:block z-[999]"
              />

              <img
                src="/images/app-promo/blob.svg"
                alt="Blob"
                width={506}
                height={448}
                className="absolute z-10 h-[507px] top-0 lg:top-[30px] left-[-150px] lg:left-[-80px] bottom-5 -rotate-[calc(340deg)] sm:block overflow-visible"
              />

              <div className="grid grid-rows-2 gap-2.5 max-h-[540px] h-full mt-14">
                <div className="grid grid-cols-2 z-50 flex-row max-w-[440px] items-end">
                  <div className="z-50 flex md:flex-row items-stretch justify-center flex-wrap lg:flex-nowrap gap-2.5 lg:gap-4 w-full md:max-w-[225px] min-h-[232px] max-h-[232px]">
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
                            className={
                              id === cardPromoInfos.length - 1
                                ? "hidden sm:block"
                                : ""
                            }
                          />
                        )
                      )}
                  </div>

                  <img
                    src="/images/cool-features/img02.png"
                    className="rounded-xl block object-cover w-[304px] h-[179px]"
                    alt="Moldure"
                    title="Moldure"
                    width="304"
                    height="179"
                  />
                </div>

                <div className="grid grid-cols-2 z-50 flex-row justify-start gap-2 max-w-[390px] items-start">
                  <img
                    src="/images/cool-features/img01.png"
                    className="rounded-xl block object-cover w-[186px] h-[158px]"
                    alt="Moldure"
                    title="Moldure"
                    width="186"
                    height="158"
                  />

                  <img
                    src="/images/cool-features/img03.png"
                    className="rounded-xl block object-cover w-[232px] h-[179px]"
                    alt="Moldure"
                    title="Moldure"
                    width="232"
                    height="179"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

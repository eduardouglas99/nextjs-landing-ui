"use client";

import Image from "next/image";
import { Container } from "../Container";
import Counter from "@/app/utils/AnimatedCounter";
import { useLocalization } from "../localization-provider";

export default function CounterStatistic() {
  const { t } = useLocalization();
  const statistic = [
    {
      icon: "/images/counter-statistic/heart.svg",
      value: "195",
      text: "user countries",
      iconName: "Heart",
      translatename: "counter.heart.label",
    },
    {
      icon: "/images/counter-statistic/diamond.svg",
      value: "1M",
      text: "valued teachers",
      iconName: "Diamond",
      suffix: "M",
      translatename: "counter.diamond.label",
    },
    {
      icon: "/images/counter-statistic/school.svg",
      value: "17M",
      text: "happy students",
      iconName: "School",
      suffix: "M",
      translatename: "counter.school.label",
    },
  ];
  return (
    <div className="bg-[#0F172A] ">
      <Container className="py-12 md:px-10 md:py-20">
        <div className="gap-10 sm:gap-0 flex-col sm:flex-row flex justify-around">
          {statistic &&
            statistic.map(
              ({ icon, text, value, iconName, suffix, translatename }, id) => (
                <div
                  key={id}
                  className="gap-2 sm:gap-4 flex flex-col items-center"
                >
                  <Image
                    src={icon}
                    width="64"
                    height="64"
                    alt={iconName}
                    title={iconName}
                  />
                  <Counter
                    to={parseInt(value)}
                    suffix={suffix}
                    className="text-[#FACC15] text-7xl"
                  />
                  <h5 className="text-[#FACC15] text-2xl">
                    {t(`${translatename}`)}
                  </h5>
                </div>
              )
            )}
        </div>
      </Container>
    </div>
  );
}

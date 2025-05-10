import Image from "next/image";
import { Container } from "../Container";

export default function CounterStatistic() {
  const statistic = [
    {
      icon: "/images/counter-statistic/heart.svg",
      value: "195",
      text: "user countries",
      iconName: "Heart",
    },
    {
      icon: "/images/counter-statistic/diamond.svg",
      value: "1M",
      text: "valued teachers",
      iconName: "Diamond",
    },
    {
      icon: "/images/counter-statistic/school.svg",
      value: "17M",
      text: "happy students",
      iconName: "School",
    },
  ];
  return (
    <div className="bg-[#0F172A] ">
      <Container className="py-12 md:px-10 md:py-20">
        <div className="gap-10 sm:gap-0 flex-col sm:flex-row flex justify-between">
          {statistic &&
            statistic.map(({ icon, text, value, iconName }, id) => (
              <div key={id} className="gap-2 sm:gap-4 flex flex-col items-center">
                <Image
                  src={icon}
                  width="64"
                  height="64"
                  alt={iconName}
                  title={iconName}
                />

                <h3 className="text-[#FACC15] text-7xl">{value}</h3>
                <h5 className="text-[#FACC15] text-2xl">{text}</h5>
              </div>
            ))}
        </div>
      </Container>
    </div>
  );
}

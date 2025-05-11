import AppPromo from "./components/AppPromo";
import CounterStatistic from "./components/CounterStatistic";
import DemoRequestForm from "./components/DemoRequestForm";
import HeroBanner from "./components/HeroBanner";
import MeetTheCommunity from "./components/MeetTheCommunity";
import Testimonial from "./components/Testimonial";
import WhatEveryoneSays from "./components/WhatEveryoneSays";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <AppPromo/>
      <Testimonial />
      <MeetTheCommunity />
      <CounterStatistic />
      <WhatEveryoneSays />
      <DemoRequestForm />
    </>
  );
}

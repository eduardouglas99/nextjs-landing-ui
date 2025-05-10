import AppPromo from "./components/AppPromo";
import HeroBanner from "./components/HeroBanner";
import MeetTheCommunity from "./components/MeetTheCommunity";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <AppPromo/>
      <Testimonial />
      <MeetTheCommunity />
    </>
  );
}

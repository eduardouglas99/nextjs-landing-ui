import { Container } from "../Container";
import SectionTitle from "../SectionTitle";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function MeetTheCommunity() {
  return (
    <Container className="py-12 pb-0 md:px-10 md:py-20">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between relative z-10 lg:gap-x-12">
        <div className="relative z-0 max-w-[500px] mx-auto mb-10 lg:mb-0 lg:max-w-none w-[340px] sm:w-[500px] lg:relative lg:order-1">
          <div className="grid grid-cols-4 gap-4 items-center">
            <div className="flex flex-col">
              <img
                src="/images/meet-the-comunity/img01.svg"
                className="rounded-xl object-cover w-[128px] h-[192px]"
                alt="Moldure"
                title="Moldure"
                width="128"
                height="192"
              />
              <img
                src="/images/meet-the-comunity/img02.svg"
                className="rounded-xl object-cover w-[172px] h-[258px]"
                alt="Moldure"
                title="Moldure"
                width="172"
                height="258"
              />
            </div>
            <div className="flex flex-col mt-6">
              <img
                src="/images/meet-the-comunity/img03.svg"
                className="rounded-xl object-cover w-[128px] h-[212px]"
                alt="Moldure"
                title="Moldure"
                width="128"
                height="212"
              />
              <img
                src="/images/meet-the-comunity/img04.svg"
                className="rounded-xl object-cover w-[128px] h-[215px]"
                alt="Moldure"
                title="Moldure"
                width="128"
                height="215"
              />
              <img
                src="/images/meet-the-comunity/img05.svg"
                className="rounded-xl object-cover w-[128px] h-[160px]"
                alt="Moldure"
                title="Moldure"
                width="128"
                height="160"
              />
            </div>
            <div className="flex flex-col">
              <img
                src="/images/meet-the-comunity/img06.svg"
                className="rounded-xl object-cover w-[128px] h-[171px]"
                alt="Moldure"
                title="Moldure"
                width="128"
                height="171"
              />
              <img
                src="/images/meet-the-comunity/img07.svg"
                className="rounded-xl object-cover w-[128px] h-[165px]"
                alt="Moldure"
                title="Moldure"
                width="128"
                height="165"
              />
              <img
                src="/images/meet-the-comunity/img08.svg"
                className="rounded-xl object-cover w-[128px] h-[192px]"
                alt="Moldure"
                title="Moldure"
                width="128"
                height="192"
              />
            </div>
            <div className="flex flex-col">
              <img
                src="/images/meet-the-comunity/img09.svg"
                className="rounded-xl object-cover w-[160px] h-[255px]"
                alt="Moldure"
                title="Moldure"
                width="160"
                height="255"
              />
              <img
                src="/images/meet-the-comunity/img10.svg"
                className="rounded-xl object-cover w-[128px] h-[165px]"
                alt="Moldure"
                title="Moldure"
                width="128"
                height="165"
              />
            </div>
          </div>
        </div>
        <div className="space-y-8 flex-1 lg:max-w-[50%] lg:pr-16 lg:order-2">
          <SectionTitle
            words={["Meet", "international", "students", "&", "teachers"]}
            className="md:font-extrabold leading-[110.00000000000001%] w-[93%] max-w-full p-0 m-0"
          />
          <p className="primary-color my-6 sm:my-8 text-base sm:font-normal leading-[140%] sm:leading-[180%]">
            Morbi sit egestas dignissim pharetra, sed amet. Tempus justo
            senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam
            facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus
            urna, faucibus aenean lorem faucibus integer.
          </p>
          <Link
            href="/"
            className="inline-flex items-center text-lg text-blue-600 font-medium hover:text-blue-700 transition-colors text-header-base-hover mb-11"
          >
            Explore teachers and students
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </Container>
  );
}

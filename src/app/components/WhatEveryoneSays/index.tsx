"use client";

import { useRef } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import { Container } from "../Container";
import SectionTitle from "../SectionTitle";

const testimonials = [
  {
    id: 1,
    content:
      "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",
    author: "Hellen Jummy",
    company: "Financial Counselor",
    image: "/images/what-everyone-says/hellen-avatar.png",
  },
  {
    id: 2,
    content:
      "Odio rhoncus ornare ut quam. Molestie vel duis quis scelerisque ut id. In tortor turpis viverra sagittis ultrices nisi, nec tortor. Vestibulum, ultrices ultricies neque, hac ultricies dolor.",
    author: "Ralph Edwards",
    company: "Math Teacher",
    image: "/images/what-everyone-says/ralph-avatar.png",
  },
  {
    id: 3,
    content:
      "Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et cras aliquam. Diam tellus, amet, hac imperdiet. Tellus mi volutpat tellus, congue malesuada sit nisl donec a.",
    author: "Hellena John",
    company: "Psychology Student",
    image: "/images/what-everyone-says/hellena-avatar.png",
  },
  {
    id: 4,
    content:
      "Sapien, sollicitudin et vitae id et laoreet sapien consectetur. Felis egestas egestas amet aliquam sit euismod. Pellentesque neque, sed ut volutpat. Ullamcorper in at nulla dignissim.",
    author: "David Oshodi",
    company: "Manager",
    image: "/images/what-everyone-says/david-half-avatar.png",
  },
];

export default function WhatEveryoneSays() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="py-16">
      <Container>
        <div className="mb-10 flex justify-between items-center">
          <SectionTitle words={["What", "everyone", "says"]} className="primary-color md:font-extrabold p-0 m-0"/>

          <div className="flex gap-2">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="cursor-pointer w-10 h-10 rounded-full border border-orange-500 flex items-center justify-center hover:bg-orange-50 transition-colors"
              aria-label="Slide anterior"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 16L6 10L12 4"
                  stroke="#F97316"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="cursor-pointer w-10 h-10 rounded-full border border-orange-500 flex items-center justify-center hover:bg-orange-50 transition-colors"
              aria-label="Próximo slide"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 4L14 10L8 16"
                  stroke="#F97316"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="rounded-lg p-4">
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 3,
              },
            }}
            className="testimonials-swiper h-auto"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="h-full">
                <div
                  className="h-full flex flex-col justify-between p-8 rounded-[20px] border border-[#e3e3e3c4] border-solid"
                  style={{
                    boxShadow: "0 4px 12px -5px rgb(18 18 18 / 57%)",
                  }}
                >
                  <div className="h-full flex flex-col">
                    <p className="text-gray-700 text-lg mb-6 flex-grow">
                      {testimonial.content}
                    </p>
                    <div className="flex items-stretch">
                      <div className="w-12 h-12 mr-4 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={`Foto de ${testimonial.author}`}
                          title={`Foto de ${testimonial.author}`}
                          width={64}
                          height={64}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-[#475569] text-lg">
                          {testimonial.author}
                        </p>
                        <div className="relative">
                          <p className="text-base text-[#475569]">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <style jsx global>{`
          .swiper-wrapper {
            align-items: stretch;
            height: 100%;
          }

          .swiper-slide {
            height: auto !important;
            display: flex;
            align-items: stretch;
          }
        `}</style>
      </Container>
    </section>
  );
}

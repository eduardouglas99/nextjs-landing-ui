"use client";

import { Container } from "../Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const testimonials = [
  {
    id: 1,
    content:
      "Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. At vel erat ultricies commodo. Neque suspendisse a habitasse commodo.",
    author: "Marie Poirot",
    company: "Bigapp",
    image: "/images/testmonial/person.svg",
  },
  {
    id: 2,
    content:
      "Vestibulum sed metus eu orci pulvinar vehicula. Nullam feugiat nulla ut ligula tempor aliquam. Vivamus non molestie eros, vel gravida sapien.",
    author: "Thomas Laurent",
    company: "TechFlow",
    image: "/images/testmonial/person.svg",
  },
  {
    id: 3,
    content:
      "Praesent eget volutpat risus. Cras pharetra lacinia magna, at commodo sem. Nullam ut lorem vel nisi tempor scelerisque in vel ante.",
    author: "Sophie Dubois",
    company: "Innovate",
    image: "/images/testmonial/person.svg",
  },
];

export default function Testimonial() {
  return (
    <div className="w-full bg-yellow-400 relative">
      <Container className="py-12 md:px-10 md:pt-20 md:pb-20 overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet swiper-custom-bullet",
            bulletActiveClass:
              "swiper-pagination-bullet-active swiper-custom-bullet-active",
          }}
          autoplay={{
            delay: 500,
            disableOnInteraction: false,
          }}
          speed={8000}
          loop={true}
          className="testimonial-yellow-swiper overflow-visible"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="overflow-visible">
              <div className="flex flex-col md:flex-row gap-8 justify-center items-center mx-auto max-w-[1010px] w-full overflow-visible relative">
                <div className="relative z-10 max-w-full w-[500px]">
                  <blockquote className="max-w-[430px] w-full">
                    <p className="text-testimonial mb-4">
                      {testimonial.content}
                    </p>
                    <footer>
                      <p className="text-testimonial">{testimonial.author},</p>
                      <p className="font-bold text-testimonial mb-4">
                        {testimonial.company}
                      </p>
                    </footer>
                  </blockquote>
                </div>

                <div className="relative w-full max-w-[528px] aspect-[4/3] z-10 overflow-hidden rounded-xl">
                  <Image
                    src={testimonial.image}
                    alt={`Foto de ${testimonial.author}`}
                    title={`Foto de ${testimonial.author}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 528px"
                    className="object-cover rounded-xl"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center text-white rounded-full hover:bg-white/50 transition-colors cursor-pointer">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 19L8 12L15 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center text-black  rounded-full hover:bg-white/50 transition-colors cursor-pointer">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5L16 12L9 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </Swiper>

        <style jsx global>{`
          .testimonial-yellow-swiper .swiper-pagination {
            position: relative;
            margin-top: 2rem;
          }
          .swiper-custom-bullet {
            width: 8px;
            height: 8px;
            display: inline-block;
            border-radius: 50%;
            background: #000;
            opacity: 0.3;
            margin: 0 4px;
            cursor: pointer;
            transition: all 0.3s ease;
          }
          .swiper-custom-bullet-active {
            opacity: 1;
            width: 12px;
            border-radius: 4px;
          }
          .testimonial-yellow-swiper {
            overflow: visible !important;
          }
          .testimonial-yellow-swiper .swiper-wrapper,
          .testimonial-yellow-swiper .swiper-slide {
            overflow: visible !important;
          }
          .swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets.swiper-pagination-horizontal {
            max-width: 1018px !important;
            top: -70px;
            text-align: left;
            margin: 0 auto;
          }
          @media (max-width: 800px) {
            .swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets.swiper-pagination-horizontal {
              top: -50px;
            }
          }

          @media (max-width: 768px) {
            .swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets.swiper-pagination-horizontal {
              top: -23px;
              position: absolute;
            }
          }
        `}</style>
      </Container>
    </div>
  );
}

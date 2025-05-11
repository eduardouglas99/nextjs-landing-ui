"use client";

import Image from "next/image";
import SectionTitle from "../SectionTitle";
import ButtonSignUp from "../ButtonSignUp";
import { useLocalization } from "../localization-provider";

interface StudentImage {
  src: string;
  size: "sm" | "md" | "lg";
  position: {
    side: "left" | "right";
    horizontal: string;
    vertical: string;
  };
}

interface JoinLearningSectionProps {
  studentImages?: StudentImage[];
}

export function WorldOfLearning({
  studentImages,
}: JoinLearningSectionProps) {
  const defaultImages: StudentImage[] = [
    {
      src: "/images/world-of-learning/user-thumb-02.png",
      size: "sm",
      position: { side: "left", horizontal: "30px", vertical: "-50px" },
    },
    {
      src: "/images/world-of-learning/user-thumb-03.png",
      size: "sm",
      position: { side: "left", horizontal: "8%", vertical: "10%" },
    },
    {
      src: "/images/world-of-learning/user-thumb-04.png",
      size: "md",
      position: { side: "left", horizontal: "-40px", vertical: "40%" },
    },
    {
      src: "/images/world-of-learning/user-thumb-05.png",
      size: "lg",
      position: { side: "left", horizontal: "7%", vertical: "63%" },
    },
    {
      src: "/images/world-of-learning/user-thumb-07.png",
      size: "sm",
      position: { side: "left", horizontal: "-20px", vertical: "120%" },
    },
    {
      src: "/images/world-of-learning/user-thumb-08.png",
      size: "sm",
      position: { side: "left", horizontal: "20%", vertical: "115%" },
    },
    {
      src: "/images/world-of-learning/user-thumb-01.png",
      size: "md",
      position: { side: "left", horizontal: "22%", vertical: "-90px" },
    },

    {
      src: "/images/world-of-learning/user-thumb-15.png",
      size: "lg",
      position: { side: "right", horizontal: "-10px", vertical: "-80px" },
    },
    {
      src: "/images/world-of-learning/user-thumb-13.png",
      size: "md",
      position: { side: "right", horizontal: "8%", vertical: "10%" },
    },
    {
      src: "/images/world-of-learning/user-thumb-10.png",
      size: "lg",
      position: { side: "right", horizontal: "-40px", vertical: "40%" },
    },

    {
      src: "/images/world-of-learning/user-thumb-11.png",
      size: "sm",
      position: { side: "right", horizontal: "60px", vertical: "120%" },
    },
    {
      src: "/images/world-of-learning/user-thumb-12.png",
      size: "md",
      position: { side: "right", horizontal: "20%", vertical: "96%" },
    },
    {
      src: "/images/world-of-learning/user-thumb-14.png",
      size: "md",
      position: { side: "right", horizontal: "22%", vertical: "-90px" },
    },
  ];

   const { t } = useLocalization();

  const images = studentImages || defaultImages;

  const getImageSize = (size: "sm" | "md" | "lg") => {
    switch (size) {
      case "sm":
        return { width: 10, height: 10, imgSize: 40 };
      case "md":
        return { width: 14, height: 14, imgSize: 56 };
      case "lg":
        return { width: 20, height: 20, imgSize: 80 };
      default:
        return { width: 12, height: 12, imgSize: 48 };
    }
  };

  return (
    <section className="relative w-full bg-[#FACC15] py-30 md:py-30 overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="w-full mx-auto text-center relative z-10">
          <SectionTitle
            words={[t("joinlearning.title")]}
            className="justify-center"
          />
          <p className="max-w-[600px] my-8 m-auto text-testimonial text-center">
            Malesuada ut aliquam at ac est nisi, interdum etiam dignissim. Risus
            elit et fringilla habitant ut facilisi.
          </p>
          <ButtonSignUp
            title="Sign Up Now"
            className="w-[40%] max-w-full md:w-[220px] text-[16px] md:text-[18px] text-white py-4 bg-oragen-color border-[#0F172A]"
            ariaLabel="Sign up now"
          />
        </div>

        {images.map((image, index) => {
          const { width, height, imgSize } = getImageSize(image.size);
          const position =
            image.position.side === "left"
              ? `left-[${image.position.horizontal}] top-[${image.position.vertical}]`
              : `right-[${image.position.horizontal}] top-[${image.position.vertical}]`;

          return (
            <div
              key={index}
              className={`absolute ${position} w-${width} h-${height} rounded-full overflow-hidden border-2 border-yellow-300 opacity-[0.1] lg:opacity-100`}
              style={{
                width: `${width * 0.25}rem`,
                height: `${height * 0.25}rem`,
                left:
                  image.position.side === "left"
                    ? image.position.horizontal
                    : "auto",
                right:
                  image.position.side === "right"
                    ? image.position.horizontal
                    : "auto",
                top: image.position.vertical,
              }}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt="Student"
                title="Student"
                width={imgSize}
                height={imgSize}
                className="object-cover"
              />
            </div>
          );
        })}

        <div className="absolute left-[15%] top-[0%] opacity-[0.1] lg:opacity-100">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L2 7L12 12L22 7L12 2Z"
              stroke="#FFF"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 17L12 22L22 17"
              stroke="#FFF"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 12L12 17L22 12"
              stroke="#FFF"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="absolute left-[4%] top-[56%] opacity-[0.1] lg:opacity-100">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" stroke="#FFF" strokeWidth="1" />
            <path
              d="M12 8V16"
              stroke="#FFF"
              strokeWidth="1"
              strokeLinecap="round"
            />
            <path
              d="M8 12H16"
              stroke="#FFF"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="absolute left-[17%] top-[70%] opacity-[0.1] lg:opacity-100">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="3"
              y="6"
              width="18"
              height="15"
              rx="2"
              stroke="#FFF"
              strokeWidth="1"
            />
            <path d="M3 10H21" stroke="#FFF" strokeWidth="1" />
            <path
              d="M8 3V6"
              stroke="#FFF"
              strokeWidth="1"
              strokeLinecap="round"
            />
            <path
              d="M16 3V6"
              stroke="#FFF"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="absolute right-[15%] top-[30%] opacity-[0.1] lg:opacity-100">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="#FFF"
              strokeWidth="1"
            />
            <path
              d="M12 16V12"
              stroke="#FFF"
              strokeWidth="1"
              strokeLinecap="round"
            />
            <path
              d="M12 8H12.01"
              stroke="#FFF"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="absolute right-[20%] top-[60%] opacity-[0.1] lg:opacity-100">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
              stroke="#FFF"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="absolute right-[12%] top-[90%] opacity-[0.1] lg:opacity-100">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z"
              stroke="#FFF"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21"
              stroke="#FFF"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

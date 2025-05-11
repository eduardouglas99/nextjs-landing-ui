import { twMerge } from "tailwind-merge";

interface SectionTitleProps {
  words: string[];
  underlineIndex?: number;
  underlineImageSrc?: string;
  className?: string;
}

export default function SectionTitle({
  words,
  underlineIndex,
  underlineImageSrc = "/images/hero-banner/underline.png",
  className,
}: SectionTitleProps) {
  return (
    <h1
      className={twMerge(
        "text-[32px] font-bold md:text-[56px] sm:font-extrabold text-slate-900 tracking-tight leading-[110%] flex flex-wrap gap-x-1 md:gap-x-2",
        className
      )}
    >
      {words.map((word, index) => {
        const isUnderlined = index === underlineIndex;

        return (
          <span key={index} className="relative inline-block mr-2">
            <span className={isUnderlined ? "relative z-10" : ""}>{word}</span>
            {isUnderlined && (
              <img
                src={underlineImageSrc}
                alt="underline"
                className="absolute bottom-0 left-0 w-full h-3 z-0 pointer-events-none"
              />
            )}
          </span>
        );
      })}
    </h1>
  );
}

import { twMerge } from "tailwind-merge";

interface SectionTitleProps {
  words: string[];
  underlineIndex?: number;
  underlineImageSrc?: string;
  className?: string
}

export default function SectionTitle({
  words,
  underlineIndex,
  underlineImageSrc = "/images/hero-banner/underline.png",
  className
}: SectionTitleProps) {
  return (
    <h1 className={twMerge("font-extrabold text-slate-900 tracking-tight leading-[110%] flex flex-wrap gap-x-2", className)}>
      {words.map((word, index) => (
        <span key={index} className="relative inline-block mr-2">
          {index === underlineIndex ? (
            <>
              <span className="relative z-10">{word}</span>
              <img
                src={underlineImageSrc}
                alt="underline"
                className="absolute bottom-0 left-0 w-full h-3 z-0 pointer-events-none"
              />
            </>
          ) : (
            word
          )}
        </span>
      ))}
    </h1>
  );
}

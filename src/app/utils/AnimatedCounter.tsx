"use client";

import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

type CounterProps = {
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  locale?: string;
  separator?: boolean;
  className?: string;
};

export default function Counter({
  to,
  duration = 2000,
  prefix = "",
  suffix = "",
  locale = "en-US",
  separator = true,
  className,
}: CounterProps) {
  const [count, setCount] = useState(0);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldAnimate(true);
        } else {
          setCount(0);
          setShouldAnimate(false);
        }
      },
      {
        threshold: 0.6,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  useEffect(() => {
    if (!shouldAnimate) return;

    let start: number | null = null;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const current = Math.min(Math.floor((progress / duration) * to), to);
      setCount(current);
      if (current < to) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [shouldAnimate, to, duration]);

  const formatted = separator
    ? new Intl.NumberFormat(locale).format(count)
    : count;

  return (
    <div ref={ref}>
      <h3 className={twMerge(`text-[30px]`, className)}>
        {prefix}
        {formatted}
        {suffix}
      </h3>
    </div>
  );
}

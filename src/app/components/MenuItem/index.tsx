"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useLocalization } from "../localization-provider";

interface MenuItemProps {
  url: string;
  title: string;
  hasDropdown?: boolean;
  translatename: string;
}

export function MenuItem({
  url,
  title,
  hasDropdown = false,
  translatename,
}: MenuItemProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkTouch = () => {
      setIsMobile("ontouchstart" in window || navigator.maxTouchPoints > 0);
    };
    checkTouch();
  }, []);

  const toggleDropdown = () => {
    if (isMobile && hasDropdown) {
      setIsOpen((prev) => !prev);
    }
  };

  const { t } = useLocalization();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const targetElement = document.querySelector(url);

    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={`relative group`}>
      <div
        onClick={toggleDropdown}
        className="flex items-center gap-2 cursor-pointer select-none"
      >
        <Link
          href={url}
          className="text-header-base text-header-base-hover"
          onClick={handleClick}
        >
          {t(`${translatename}`)}
        </Link>
        {hasDropdown && (
          <ChevronDown color="#0F172A" size={13.34} className="ml-[13.4px]" />
        )}
      </div>

      {hasDropdown && (
        <div
          className={`absolute left-0 top-full mt-2 w-48 bg-white shadow-lg border border-gray-200 rounded-md z-50 transition-all duration-200
                ${
                  isMobile
                    ? isOpen
                      ? "opacity-100 visible"
                      : "opacity-0 invisible"
                    : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                } `}
        >
          <ul className="py-2">
            <Link
              href="#"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Blog
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 hover:bg-gray-100"
              onClick={handleClick}
            >
              {t(`links.webinars`)}
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 hover:bg-gray-100"
              onClick={handleClick}
            >
              {t(`links.guides`)}
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
}

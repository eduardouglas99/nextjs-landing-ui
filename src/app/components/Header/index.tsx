"use client";

import { Container } from "../Container";
import Image from "next/image";
import TeachLogo from "../../../../public/images/header/logo-teach.png";
import { MenuItem } from "../MenuItem";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ButtonSignUp from "../ButtonSignUp";

export default function Header() {
  const menuItens = [
    {
      url: "/",
      title: "Products",
      dropdown: false,
      translatename: "links.products",
    },
    {
      url: "/",
      title: "Solutions",
      dropdown: false,
      translatename: "links.solutions",
    },
    {
      url: "/",
      title: "Pricing",
      dropdown: false,
      translatename: "links.pricing",
    },
    {
      url: "/",
      title: "Resources",
      dropdown: true,
      translatename: "links.resources",
    },
  ];

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header>
      <Container className="flex justify-between items-center p-5 md:px-10 md:py-6 gap-5 flex-wrap">
        <div className="flex 48 gap-12 ">
          <Image
            src={TeachLogo}
            alt="Teach"
            title="Teach"
            width={103}
            height={35}
          />
          <nav className="hidden md:flex items-center gap-12">
            {menuItens &&
              menuItens.map(
                ({ url, title, dropdown, translatename }, index) => (
                  <MenuItem
                    key={index}
                    url={url}
                    title={title}
                    hasDropdown={dropdown}
                    translatename={translatename}
                  />
                )
              )}
          </nav>
        </div>
        <div className="flex gap-4">
          <button
            type="button"
            className="hidden md:block cursor-pointer text-header-base text-header-base-hover"
          >
            Log In{" "}
          </button>
          <ButtonSignUp
            ariaLabel="Sign Up Now"
            title="Sign Up Now"
            className="hidden md:block cursor-pointer text-header-base btn-header-base-hover py-2 px-7 border-2 rounded-lg border-[#0F172A]"
          />
          {!isNavOpen && (
            <button
              className="md:hidden text-2xl"
              onClick={() => setIsNavOpen(true)}
              aria-label="Abrir menu"
            >
              <Menu size={28} />
            </button>
          )}
        </div>
        <div
          className={`fixed top-0 left-0 h-full w-[75vw] bg-white z-50 shadow-lg transform transition-transform duration-300 ${
            isNavOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          <div className="flex w-full items-center p-4">
            <Image
              src={TeachLogo}
              alt="Teach"
              title="Teach"
              width={103}
              height={35}
            />
            <div className="ml-auto">
              <button
                onClick={() => setIsNavOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
          </div>
          <div className="border-t border-gray-200 mx-4" />
          <div className="my-6">
            <nav className="flex flex-col gap-6 px-6 pt-6">
              {menuItens.map(
                ({ url, title, dropdown, translatename }, index) => (
                  <MenuItem
                    key={index}
                    url={url}
                    title={title}
                    hasDropdown={dropdown}
                    translatename={translatename}
                  />
                )
              )}
            </nav>
            <div className="fixed bottom-8 max-w-full w-full flex flex-col gap-4 px-6 pt-6">
              <div className="border-t border-gray-200 mx-4" />
              <button
                type="button"
                className="cursor-pointer text-left text-header-base text-header-base-hover"
              >
                Log In
              </button>
              <ButtonSignUp
                title="Sign Up Now"
                className="w-fit py-2 px-4 border-2 border-[#0F172A]"
                ariaLabel="Sign up now"
              />
            </div>
          </div>
        </div>
        <div
          className={`fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden transition-opacity duration-300 ease-in-out ${
            isNavOpen
              ? "opacity-50 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsNavOpen(false)}
        />
      </Container>
    </header>
  );
}

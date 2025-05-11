"use client";

import { twMerge } from "tailwind-merge";
import { useState } from "react";
import SignUpModal from "../Modals/sign-up-modal";

interface ButtonSignUpProps {
  title: string;
  className?: string;
  ariaLabel: string;
}

export default function ButtonSignUp({ title, className, ariaLabel }: ButtonSignUpProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={twMerge("cursor-pointer text-center text-header-base btn-header-base-hover rounded-lg", className)}
        aria-label={ariaLabel}
        onClick={() => setIsModalOpen(true)}
      >
        {title}
      </button>

      {isModalOpen && <SignUpModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
}

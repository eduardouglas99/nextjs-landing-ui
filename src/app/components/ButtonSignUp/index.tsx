"use client";

import { twMerge } from "tailwind-merge";
import { useState } from "react";
import SignUpModal from "../Modals/sign-up-modal";
import { useLocalization } from "../localization-provider";

interface ButtonSignUpProps {
  title: string;
  className?: string;
  ariaLabel: string;
}

export default function ButtonSignUp({
  className,
  ariaLabel,
}: ButtonSignUpProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useLocalization();

  return (
    <>
      <button
        type="button"
        className={twMerge(
          "cursor-pointer text-center text-header-base btn-header-base-hover rounded-lg",
          className
        )}
        aria-label={ariaLabel}
        onClick={() => setIsModalOpen(true)}
      >
        {t("links.signupnow")}
      </button>

      {isModalOpen && <SignUpModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
}

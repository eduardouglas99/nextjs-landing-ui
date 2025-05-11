"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { CircleCheckBig } from "lucide-react";
import { useLocalization } from "../localization-provider";

const formSchema = z.object({
  fullname: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .regex(/^[a-zA-ZÀ-ÿ\s]+$/, "Name must contain only letters")
    .nonempty("Name is required"),
  email: z.string().email("Invalid email").nonempty("Email is required"),
  phone: z
    .string()
    .nonempty("Phone number is required")
    .regex(/^\(?\d{2,3}\)?\s?\d{4,5}-?\d{4}$/, "Enter a valid phone number"),
});

type FormData = z.infer<typeof formSchema>;

interface SignUpModalProps {
  onClose: () => void;
}

export default function SignUpModal({ onClose }: SignUpModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { t } = useLocalization();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    setIsSubmitted(true);
    reset();
  };

  return (
    <div className="fixed inset-0 bg-[#000000c9] bg-opacity-50 z-50 flex items-center justify-center px-4">
      <div className="bg-white text-left rounded-xl max-w-lg w-full p-9 relative">
        <button
          className="cursor-pointer absolute top-4 right-4 primary-color text-2xl"
          onClick={onClose}
        >
          ✕
        </button>

        {!isSubmitted ? (
          <>
            <h2 className="text-2xl font-bold mb-4 primary-color text-center">
              {t("modal.title")}
            </h2>
            <h3 className="primary-color my-4 text-base font-normal text-center">
              {t("modal.subtitle")}
            </h3>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-5 mt-10"
            >
              <div>
                <label
                  htmlFor="fullname"
                  className="block font-medium mb-1 primary-color"
                >
                  {t("modal.fullname")}
                </label>
                <input
                  {...register("fullname")}
                  className="w-full border border-gray-300 rounded-lg p-2 primary-color focus:outline-0"
                  placeholder={t("modal.fullname")}
                />
                {errors.fullname && (
                  <span className="text-red-500 text-sm">
                    {t("modal.nameerror")}
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block font-medium mb-1 primary-color"
                >
                  {t("modal.email")}
                </label>
                <input
                  {...register("email")}
                  className="w-full border border-gray-300 rounded-lg p-2 primary-color focus:outline-0"
                  placeholder={t("modal.placeemail")}
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    {t("modal.emailerro")}
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block font-medium mb-1 primary-color"
                >
                  {t("modal.phone")}
                </label>
                <input
                  {...register("phone")}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-0"
                  placeholder={t("modal.placetelefone")}
                />
                {errors.phone && (
                  <span className="text-red-500 text-sm">
                    {t("modal.telefoneerro")}
                  </span>
                )}
              </div>
              <button
                type="submit"
                className="cursor-pointer py-3.5 m-5  bg-oragen-color text-white font-semibold rounded-lg hover:opacity-90 transition"
                aria-label="Send request"
              >
                {t("modal.send")}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center flex flex-col items-center">
            <CircleCheckBig size={50} color="green" className="mb-5" />
            <h2 className="text-2xl font-bold mb-4 mx-auto primary-color text-center">
              {t("modal.registration")}
            </h2>
            <h3 className="primary-color my-2 text-base font-normal text-center">
              {t("modal.sub")}
            </h3>
            <button
              onClick={onClose}
              className="cursor-pointer py-3.5 mt-5 max-w-[200px] w-full bg-oragen-color text-white font-semibold rounded-lg hover:opacity-90 transition"
              aria-label="Close"
            >
              {t("modal.close")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

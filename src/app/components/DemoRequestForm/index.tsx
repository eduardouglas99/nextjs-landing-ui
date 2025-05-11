"use client";

import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Container } from "../Container";
import SectionTitle from "../SectionTitle";
import { CircleCheckBig } from "lucide-react";
import { useLocalization } from "../localization-provider";

const createUserFormSchema = z.object({
  email: z.string().email("Invalid email").nonempty("Email is required"),
  message: z.string().nonempty("Message is required"),
});

type createUserFormData = z.infer<typeof createUserFormSchema>;

export default function DemoRequestForm() {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const { t } = useLocalization();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<createUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  });

  const onSubmit = (data: any) => {
    reset({ email: "", message: "" });
    setFormData(data);
    setIsSuccessModalOpen(true);
  };

  const closeModal = () => {
    setIsSuccessModalOpen(false);
  };

  return (
    <div className="bg-oragen-color relative">
      {isSuccessModalOpen && (
        <div className="fixed inset-0 bg-[#000000c9] bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full text-center flex flex-col items-center">
            <CircleCheckBig size={50} color="green" className="mb-5" />
            <h2 className="text-2xl font-bold mb-4 primary-color">
              {t("form.request")}
            </h2>
            <h3 className="primary-color my-2 text-base font-normal">
              {t("form.requessub")}
              <span className="font-medium">{formData.email}</span>.
            </h3>
            <button
              onClick={closeModal}
              className="cursor-pointer py-3.5 mt-5 max-w-[200px] w-full bg-oragen-color text-white font-semibold rounded-lg hover:opacity-90 transition"
              aria-label="Close"
            >
              {t("form.btn")}
            </button>
          </div>
        </div>
      )}

      <Container className="py-12 md:px-10 md:py-20 relative z-10">
        <div className="flex flex-col items-center">
          <SectionTitle
            words={[t("form.title")]}
            className="text-white font-[56px] md:font-extrabold leading-[110.00000000000001%] w-[93%] max-w-full p-0 m-auto justify-center"
          />
          <p className="my-8 text-center text-white font-light text-[18px] sm:text-[32px]">
            Sit elit feugiat turpis sed integer integer accumsan turpis.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto max-w-[550px] w-full flex flex-col gap-1"
          >
            <div className="m-4 flex flex-col gap-4">
              <label htmlFor="email" className="text-lg font-medium text-white">
                Email
              </label>
              <input
                {...register("email")}
                className="bg-white rounded-[10px] w-full p-2.5 focus:outline-0 border-2 border-white focus:border-2 focus:border-[primary-color]"
                placeholder={t("form.placeemail")}
              />
              {errors.email && (
                <span className="text-white bg-red-500 p-1.5 max-w-max rounded-md relative bottom-1.5 text-xs">
                  {t("form.emailerro")}
                </span>
              )}
            </div>
            <div className="m-4 flex flex-col gap-4">
              <label
                htmlFor="message"
                className="text-lg font-medium text-white"
              >
                {t("form.message_label")}
              </label>
              <textarea
                {...register("message")}
                className="bg-white rounded-[10px] w-full p-2.5 focus:outline-0 h-20"
                placeholder={t("form.placemessage")}
              />
              {errors.message && (
                <span className="text-white bg-red-500 p-1.5 max-w-max rounded-md relative bottom-1.5 text-xs">
                  {t("form.messageerro")}
                </span>
              )}
            </div>
            <button
              type="submit"
              className="mt-8 py-5 px-12 cursor-pointer bg-primary-color text-white font-bold text-2xl rounded-lg w-full max-w-[260px] m-auto btn-form-hover"
            >
              {t("form.button")}
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
}

"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { CircleCheckBig } from 'lucide-react';

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
    <div className="fixed inset-0 bg-[#000000b8] bg-opacity-50 z-50 flex items-center justify-center px-4">
      <div className="bg-white text-left rounded-xl max-w-lg w-full p-9 relative">
        <button className="absolute top-4 right-4 text-black" onClick={onClose}>
          ✕
        </button>

        {!isSubmitted ? (
          <>
            <h2 className="text-2xl font-bold mb-4 primary-color text-center">
              Sign Up for Early Access
            </h2>
            <h3 className="primary-color my-4 text-base font-normal text-center">
              Join our community and be the first to experience our new
              platform.
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
                  Full name
                </label>
                <input
                  {...register("fullname")}
                  className="w-full border border-gray-300 rounded-lg p-2 primary-color focus:outline-0"
                  placeholder="Enter your full name"
                />
                {errors.fullname && (
                  <span className="text-red-500 text-sm">
                    {errors.fullname.message}
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block font-medium mb-1 primary-color"
                >
                  Email
                </label>
                <input
                  {...register("email")}
                  className="w-full border border-gray-300 rounded-lg p-2 primary-color focus:outline-0"
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block font-medium mb-1 primary-color"
                >
                  Phone (opcional)
                </label>
                <input
                  {...register("phone")}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-0"
                  placeholder="Enter your phone"
                />
                {errors.phone && (
                  <span className="text-red-500 text-sm">
                    {errors.phone.message}
                  </span>
                )}
              </div>
              <button
                type="submit"
                className="cursor-pointer py-3.5 m-5  bg-oragen-color text-white font-semibold rounded-lg hover:opacity-90 transition"
                aria-label="Send request"
              >
                Send Request
              </button>
            </form>
          </>
        ) : (
          <div className="text-center flex flex-col items-center">
            <CircleCheckBig size={50} color="green" className="mb-5"/>
            <h2 className="text-2xl font-bold mb-4 mx-auto primary-color text-center">
              Registration Successful!
            </h2>
            <h3 className="primary-color my-2 text-base font-normal text-center">
              Thank you for signing up! We've sent a confirmation email to your address.
            </h3>
            <button
              onClick={onClose}
            className="cursor-pointer py-3.5 m-5 max-w-[30%] w-full  bg-oragen-color text-white font-semibold rounded-lg hover:opacity-90 transition"
              aria-label="Close"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

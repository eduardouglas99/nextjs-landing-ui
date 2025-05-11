"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Container } from "../Container";
import SectionTitle from "../SectionTitle";

const createUserFormSchema = z.object({
  email: z.string().email().nonempty("Email is required"),
  message: z.string().nonempty("Message is required"),
});

type createUserFormData = z.infer<typeof createUserFormSchema>;

export default function DemoRequestForm() {
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
  };
  return (
    <div className="bg-oragen-color">
      <Container className="py-12 md:px-10 md:py-20">
        <div className="flex flex-col items-center">
          <SectionTitle
            words={["Ready", "for", "your", "next", "project?"]}
            className="text-white font-[56px] md:font-extrabold leading-[110.00000000000001%] w-[93%] max-w-full p-0 m-auto justify-center"
          />
          <p className="my-8 text-center text-white font-light text-[18px] sm:text-[32px]">Sit elit feugiat turpis sed integer integer accumsan turpis.</p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto max-w-[550px] w-full flex flex-col gap-1"
          >
            <div className="m-4 flex flex-col gap-4">
              <label htmlFor="email" className="text-lg font-medium text-white">Email</label>
              <input
                {...register("email")}
                className="bg-white rounded-[10px] w-full p-2.5 focus:outline-0 border-2 border-white focus:border-2 focus:border-[primary-color]"
                placeholder="Enter your email"
              />
              {errors.email && <span className="text-white bg-red-500 p-1.5 max-w-max rounded-md relative bottom-1.5 text-xs">{errors.email.message}</span>}
            </div>
            <div className="m-4 flex flex-col gap-4">
              <label htmlFor="message" className="text-lg font-medium text-white">Message</label>
              <textarea
                {...register("message")}
                className="bg-white rounded-[10px] w-full p-2.5 focus:outline-0 h-20"
                placeholder="What are you say ?"
              />
              {errors.message && <span className="text-white bg-red-500 p-1.5 max-w-max rounded-md relative bottom-1.5 text-xs">{errors.message.message}</span>}
            </div>
            <button
              type="submit"
              className={`mt-8 py-5 px-12 cursor-pointer bg-primary-color text-white font-bold text-2xl rounded-lg w-full max-w-[260px] m-auto btn-form-hover`}
            >
              Request demo
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
}

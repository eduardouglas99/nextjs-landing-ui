"use client";

import { Container } from "../Container";
import Image from "next/image";
import Link from "next/link";
import ButtonSignUp from "../ButtonSignUp";
import SectionTitle from "../SectionTitle";
import { useLocalization } from "../localization-provider";

export default function HeroBanner() {
  const { t } = useLocalization();
  return (
    <Container className="flex items-center py-12 pb-0 md:px-10 md:pt-20">
      <section className="w-full bg-white">
        <div className="container max-w-full w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div className="m-0">
                <SectionTitle
                  words={t("hero.title").split(/[\s-]+/)}
                  underlineIndex={0}
                  className="text-[40px] md:text-[72px] leading-[110.00000000000001%]"
                />
                <p className="w-[99%] max-w-full text-[16px] md:text-[22px] tracking-normal primary-color font-normal my-6 md:my-8 leading-[140%] md:leading-[160%]">
                  Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin
                  massa tincidunt viverra lectus pulvinar. Nunc ipsum est
                  pellentesque turpis ultricies.
                </p>
              </div>

              <div className="flex flex-row sm:flex-row gap-4 md:gap-10 justify-between">
                <ButtonSignUp
                  title="Sign Up Now"
                  className="w-[40%] max-w-full md:w-[220px] text-[16px] md:text-[18px] text-white py-4 bg-oragen-color border-[#0F172A]"
                  ariaLabel="Sign up now"
                />
                <Link
                  href="/"
                  className="w-[50%] max-w-full inline-flex items-center blue text-base md:text-xl font-medium gap-4 py-2 text-header-base-hover"
                >
                  <Image
                    src="/images/hero-banner/play-demo.svg"
                    alt="Play demo"
                    width={20}
                    height={20}
                    className="object-cover blue"
                  />
                  {t("hero.play_demo")}
                </Link>
              </div>

              <div className="flex md:items-center gap-4 md:gap-12 mt-8 md:mt-20 flex-col md:flex-row justify-baseline mb-12">
                <p className="text-base text-[#475569]">
                  {t("trusted_by.title")}
                  <span className="md:block">{t("trusted_by.subtitle")}</span>
                </p>
                <div className="flex gap-6 items-center">
                  <Image
                    src="/images/hero-banner/black-and-white-collection/ci-cd.svg"
                    alt="CI/CD"
                    title="CI/CD"
                    width={32}
                    height={32}
                  />

                  <Image
                    src="/images/hero-banner/black-and-white-collection/containerization.svg"
                    alt="Containerization"
                    title="Containerization"
                    width={32}
                    height={32}
                  />

                  <Image
                    src="/images/hero-banner/black-and-white-collection/microservices.svg"
                    alt="Microservices Architecturee"
                    title="Microservices Architecturee"
                    width={32}
                    height={32}
                  />

                  <Image
                    src="/images/hero-banner/black-and-white-collection/cloud-infrastructure.svg"
                    alt="Cloud Infrastructure"
                    title="Cloud Infrastructure"
                    width={32}
                    height={32}
                  />

                  <Image
                    src="/images/hero-banner/black-and-white-collection/api-gateway.svg"
                    alt="Service Mesh / API Gateway"
                    title="Service Mesh / API Gateway"
                    width={32}
                    height={32}
                  />
                </div>
              </div>
            </div>

            <div className="relative pb-14 mx-auto">
              <Image
                src="/images/hero-banner/hero-banner.png"
                alt="Teach students worlwide"
                title="Teach students worlwide"
                width={625}
                height={545}
                priority={true}
              />
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

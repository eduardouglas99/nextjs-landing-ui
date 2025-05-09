import { Container } from "../Container";
import Image from "next/image"
import Link from "next/link"

export default function HeroBanner() {
    return (
        <Container className="flex items-center p-20 ">
            <section className="w-full bg-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div className="space-y-6">
                            <div className="m-0">
                                <h1 className="text-4xl md:text-7xl font-extrabold text-slate-900 tracking-tight">
                                    <span className="inline-block relative">
                                        <span className="relative z-10">Teach</span>
                                        <img
                                            src="/images/hero-banner/underline.png"
                                            alt="underline"
                                            className="absolute bottom-0 left-0 w-full h-3 z-0 pointer-events-none"
                                        />
                                    </span>{' '}
                                    students <span className="block">worldwide</span>
                                </h1>
                                <p className="w-[99%] max-w-full text-2xl tracking-normal primary-color font-normal my-8">
                                    Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque turpis ultricies.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-10">
                                <button type="button" className="w-[239px] cursor-pointer text-2xl text-white text-center text-header-base btn-header-base-hover py-4 rounded-lg bg-oragen-color border-[#0F172A]">
                                    Sign Up Now
                                </button>
                                <Link href="#demo" className="inline-flex items-center blue text-xl font-medium gap-4 py-2">
                                    <Image
                                        src="/images/hero-banner/play-demo.svg"
                                        alt="Play demo"
                                        width={20}
                                        height={20}
                                        className="object-cover blue"
                                    />
                                    View Demo
                                </Link>
                            </div>

                            <div className="flex items-center gap-12 mt-20">
                                <p className="text-base text-[#475569]">Trusted by <span className="block"> leading companies</span></p>
                                <div className="flex gap-6 items-center">
                                    <Image
                                        src="/images/hero-banner/black-and-white-collection/ci-cd.svg"
                                        alt="CI/CD"
                                        title="CI/CD"
                                        width={33.25}
                                        height={32}
                                    />

                                    <Image
                                        src="/images/hero-banner/black-and-white-collection/containerization.svg"
                                        alt="Containerization"
                                        title="Containerization"
                                        width={33.25}
                                        height={32}
                                    />

                                    <Image
                                        src="/images/hero-banner/black-and-white-collection/microservices.svg"
                                        alt="Microservices Architecturee"
                                        title="Microservices Architecturee"
                                        width={33.25}
                                        height={32}
                                    />

                                    <Image
                                        src="/images/hero-banner/black-and-white-collection/cloud-infrastructure.svg"
                                        alt="Cloud Infrastructure"
                                        title="Cloud Infrastructure"
                                        width={33.25}
                                        height={32}
                                    />

                                    <Image
                                        src="/images/hero-banner/black-and-white-collection/api-gateway.svg"
                                        alt="Service Mesh / API Gateway"
                                        title="Service Mesh / API Gateway"
                                        width={33.25}
                                        height={32}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <Image
                                src="/images/hero-banner/hero-banner.png"
                                alt="Teach students worlwide"
                                title="Teach students worlwide"
                                width={624.6}
                                height={544.53}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    )
}
'use client'

import { twMerge } from "tailwind-merge"

interface ButtonSignUpProps {
    title: string
    className?: string
    ariaLabel: string
}

export default function ButtonSignUp({ title, className, ariaLabel }: ButtonSignUpProps) {
    return (
        <button type="button" className={twMerge("cursor-pointer text-center text-header-base btn-header-base-hover rounded-lg", className)} aria-label={ariaLabel}>
            {title}
        </button>
    )
}
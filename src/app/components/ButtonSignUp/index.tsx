'use client'

import { twMerge } from "tailwind-merge"

interface ButtonSignUpProps {
    title: string
    className?: string
}

export default function ButtonSignUp({ title, className }: ButtonSignUpProps) {
    return (
        <button type="button"className={twMerge("cursor-pointer text-center text-header-base btn-header-base-hover rounded-lg", className)}>
            {title}
        </button>
    )
}
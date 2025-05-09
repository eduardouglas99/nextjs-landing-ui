import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ContainerProps {
    children: ReactNode
    className?: string
}

export function Container({ children, className }: ContainerProps) {
    return (
        <div className={twMerge("w-full max-w-[1280px] mx-auto", className)}>
            {children}
        </div>
    )
}
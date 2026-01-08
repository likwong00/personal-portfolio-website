import type { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "size"> {
    children: ReactNode;
    className?: string;
    size?: "small" | "default" | "large";
}

export function Button({children, className = "", size = "default", ...props}: ButtonProps ) {
    const baseClasses: string = "relative overflow-hidden rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25";

    const sizeClasses: Record<string, string> = {
        small: "px-4 py-2 text-sm",
        default: "px-6 py-3 text-base",
        large: "px-8 py-4 text-lg",
    };

    const combinedClasses: string = `${baseClasses} ${sizeClasses[size]} ${className}`
    return (
        <button className={combinedClasses} {...props}>
            <span className="relative flex items-center justify-center gap-2">
                {children}
            </span>
        </button>
    )
} 
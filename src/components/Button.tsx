import { cn } from "@/lib/utilities";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    styles?: string;
}

const Button: React.FC<ButtonProps> = ({
    children,
    styles,
    disabled,
    ...props
}) => (
    <button
        className={cn(
            `px-4 py-2 cursor-pointer bg-purple-500 text-white rounded  hover:bg-purple-600`,
            disabled && "opacity-50 cursor-not-allowed",
            styles,
        )}
        disabled={disabled}
        {...props}
    >
        {children}
    </button>
);

export default Button;

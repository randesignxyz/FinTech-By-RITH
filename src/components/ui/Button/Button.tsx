import React from "react";
import styles from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost";
    size?: "sm" | "md" | "lg";
    fullWidth?: boolean;
    isLoading?: boolean;
    children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            variant = "primary",
            size = "md",
            fullWidth = false,
            isLoading = false,
            className = "",
            children,
            disabled,
            ...props
        },
        ref
    ) => {
        const classes = [
            styles.button,
            styles[variant],
            styles[size],
            fullWidth ? styles.fullWidth : "",
            className,
        ]
            .filter(Boolean)
            .join(" ");

        return (
            <button
                ref={ref}
                className={classes}
                disabled={disabled || isLoading}
                {...props}
            >
                {isLoading ? "Loading..." : children}
            </button>
        );
    }
);

Button.displayName = "Button";

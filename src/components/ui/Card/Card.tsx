import React from "react";
import styles from "./Card.module.css";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "outlined" | "glass";
    padding?: "none" | "sm" | "md" | "lg";
    children: React.ReactNode;
    as?: "div" | "section" | "article";
}

export const Card = ({
    variant = "default",
    padding = "md",
    className = "",
    children,
    as: Component = "div",
    ...props
}: CardProps) => {
    const classes = [
        styles.card,
        styles[variant],
        styles[`padding-${padding}`],
        className,
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <Component className={classes} {...props}>
            {children}
        </Component>
    );
};

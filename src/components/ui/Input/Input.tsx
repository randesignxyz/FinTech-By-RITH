import React from "react";
import styles from "./Input.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    icon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ label, error, icon, className = "", ...props }, ref) => {
        return (
            <div className={`${styles.container} ${className}`}>
                {label && <label className={styles.label}>{label}</label>}
                <div className={styles.inputWrapper}>
                    <input
                        ref={ref}
                        className={`${styles.input} ${error ? styles.error : ""}`}
                        {...props}
                    />
                    {icon && <span className={styles.icon}>{icon}</span>}
                </div>
                {error && <span className={styles.errorMessage}>{error}</span>}
            </div>
        );
    }
);

Input.displayName = "Input";

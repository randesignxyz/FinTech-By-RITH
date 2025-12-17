import React from "react";
import styles from "./MobileContainer.module.css";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute/ProtectedRoute";

interface MobileContainerProps {
    children: React.ReactNode;
}

export const MobileContainer = ({ children }: MobileContainerProps) => {
    return (
        <div className={styles.container}>
            <ProtectedRoute>
                <main className={styles.main}>{children}</main>
            </ProtectedRoute>
        </div>
    );
};

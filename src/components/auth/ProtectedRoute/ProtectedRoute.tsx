"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { isAuthenticated, isLoading } = useAuth();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if (!isLoading && !isAuthenticated && pathname !== "/login") {
            router.push("/login");
        }
    }, [isLoading, isAuthenticated, router, pathname]);

    if (isLoading) {
        return (
            <div style={{
                height: "100vh", display: "flex", alignItems: "center",
                justifyContent: "center", color: "var(--text-secondary)"
            }}>
                Loading App...
            </div>
        );
    }

    // If on login page and authenticated, redirect to home (optional optimization)
    if (isAuthenticated && pathname === "/login") {
        router.push("/");
        return null;
    }

    // If not authenticated and not on login, render nothing (effect will redirect)
    if (!isAuthenticated && pathname !== "/login") {
        return null;
    }

    return <>{children}</>;
};

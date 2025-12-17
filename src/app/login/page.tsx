"use client";

import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/Button/Button";
import { Input } from "@/components/ui/Input/Input";
import { Card } from "@/components/ui/Card/Card";

export default function LoginPage() {
    const { login } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await login(email);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div style={{
            minHeight: "100vh", display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center", padding: "20px"
        }}>
            <div style={{ marginBottom: "2rem", textAlign: "center" }}>
                <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "var(--primary)" }}>FinTech</h1>
                <p style={{ color: "var(--text-secondary)" }}>Manage your finance with ease</p>
            </div>

            <Card padding="lg" style={{ width: "100%", maxWidth: "400px" }}>
                <h2 style={{ fontSize: "1.25rem", marginBottom: "1.5rem" }}>Welcome Back</h2>
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <Input
                        label="Email"
                        placeholder="john@example.com"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <Input
                        label="Password"
                        placeholder="••••••••"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <div style={{ height: "0.5rem" }} />
                    <Button type="submit" fullWidth isLoading={isLoading}>
                        Sign In
                    </Button>
                </form>
            </Card>

            <div style={{ marginTop: "2rem", textAlign: "center", fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                Don't have an account? <span style={{ color: "var(--primary)", fontWeight: 500 }}>Sign Up</span>
            </div>
        </div>
    );
}

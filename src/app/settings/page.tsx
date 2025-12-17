"use client";

import React from "react";
import { User, Moon, Sun, ChevronRight, Shield, Bell, HelpCircle, LogOut } from "lucide-react";
import { Card } from "@/components/ui/Card/Card";
import { useTheme } from "@/context/ThemeContext";

export default function SettingsPage() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div style={{ padding: "20px" }}>
            <h1 style={{ marginBottom: "1.5rem", fontSize: "1.5rem" }}>Settings</h1>

            <section style={{ marginBottom: "2rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                <div style={{
                    width: "120px", height: "120px", borderRadius: "50%",
                    border: "4px solid var(--surface-highlight)", overflow: "hidden"
                }}>
                    <img
                        src="/profile.jpg"
                        alt="Profile"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </div>
                <div style={{ textAlign: "center" }}>
                    <h2 style={{ fontSize: "1.25rem", marginBottom: "4px" }}>Ran Narith</h2>
                    <span style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>rannarith@example.com</span>
                </div>
            </section>

            <Card style={{ padding: "0.5rem 0", marginBottom: "2rem" }}>
                <SettingsItem
                    icon={<User size={20} />}
                    label="Personal Information"
                />
                <SettingsItem
                    icon={theme === "dark" ? <Moon size={20} /> : <Sun size={20} />}
                    label="Dark Mode"
                    action={
                        <div
                            onClick={(e) => {
                                e.preventDefault();
                                toggleTheme();
                            }}
                            style={{
                                width: "44px", height: "24px",
                                backgroundColor: theme === "dark" ? "var(--primary)" : "var(--surface-highlight)",
                                borderRadius: "99px", position: "relative", cursor: "pointer",
                                transition: "background-color 0.2s"
                            }}
                        >
                            <div style={{
                                width: "20px", height: "20px", backgroundColor: "white", borderRadius: "50%",
                                position: "absolute", top: "2px",
                                left: theme === "dark" ? "22px" : "2px",
                                transition: "left 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                                boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
                            }} />
                        </div>
                    }
                />
                <SettingsItem icon={<Bell size={20} />} label="Notifications" />
                <SettingsItem icon={<Shield size={20} />} label="Security" />
            </Card>

            <Card style={{ padding: "0.5rem 0" }}>
                <SettingsItem icon={<HelpCircle size={20} />} label="Help & Support" />
                <SettingsItem
                    icon={<LogOut size={20} />}
                    label="Log Out"
                    danger
                    hideArrow
                />
            </Card>

            <div style={{ marginTop: "2rem", textAlign: "center", fontSize: "0.75rem", color: "var(--text-tertiary)" }}>
                App Version 1.0.0
            </div>
        </div>
    );
}

function SettingsItem({ icon, label, action, danger, hideArrow }: any) {
    return (
        <button style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            width: "100%", padding: "1rem 1.5rem", background: "none", border: "none",
            cursor: "pointer", borderBottom: "1px solid var(--surface-highlight)"
        }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ color: danger ? "var(--error)" : "var(--text-secondary)" }}>{icon}</div>
                <span style={{ fontSize: "1rem", fontWeight: 500, color: danger ? "var(--error)" : "var(--text-primary)" }}>
                    {label}
                </span>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
                {action}
                {!action && !hideArrow && <ChevronRight size={18} color="var(--text-tertiary)" />}
            </div>
        </button>
    );
}

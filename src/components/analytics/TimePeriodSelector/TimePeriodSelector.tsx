"use client";

import React from "react";

interface TimePeriodSelectorProps {
    period: "Week" | "Month" | "Year";
    onChange: (period: "Week" | "Month" | "Year") => void;
}

const periods = ["Week", "Month", "Year"] as const;

export const TimePeriodSelector = ({ period, onChange }: TimePeriodSelectorProps) => {
    return (
        <div style={{
            display: "flex", backgroundColor: "var(--surface-highlight)",
            padding: "4px", borderRadius: "8px", width: "fit-content", marginBottom: "1rem"
        }}>
            {periods.map((p) => (
                <button
                    key={p}
                    onClick={() => onChange(p)}
                    style={{
                        padding: "6px 16px",
                        borderRadius: "6px",
                        border: "none",
                        fontSize: "0.875rem",
                        fontWeight: 500,
                        cursor: "pointer",
                        backgroundColor: period === p ? "var(--surface)" : "transparent",
                        color: period === p ? "var(--text-primary)" : "var(--text-secondary)",
                        boxShadow: period === p ? "0 1px 2px rgba(0,0,0,0.1)" : "none",
                        transition: "all 0.2s ease"
                    }}
                >
                    {p}
                </button>
            ))}
        </div>
    );
};

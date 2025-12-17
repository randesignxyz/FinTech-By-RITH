"use client";

import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
    { name: "Mon", amount: 45 },
    { name: "Tue", amount: 72 },
    { name: "Wed", amount: 35 },
    { name: "Thu", amount: 110 },
    { name: "Fri", amount: 85 },
    { name: "Sat", amount: 150 },
    { name: "Sun", amount: 65 },
];

export const SpendingChart = () => {
    return (
        <div style={{ width: "100%", height: 300, fontSize: "0.75rem" }}>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                    <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "var(--text-secondary)" }}
                        dy={10}
                    />
                    <YAxis hide />
                    <Tooltip
                        cursor={{ fill: "var(--surface-highlight)" }}
                        contentStyle={{ borderRadius: "8px", border: "none", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                    />
                    <Bar dataKey="amount" fill="var(--primary)" radius={[4, 4, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

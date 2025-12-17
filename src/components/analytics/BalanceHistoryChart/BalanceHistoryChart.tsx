"use client";

import React from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
    { name: "Mon", amount: 4000 },
    { name: "Tue", amount: 3000 },
    { name: "Wed", amount: 5000 },
    { name: "Thu", amount: 2780 },
    { name: "Fri", amount: 1890 },
    { name: "Sat", amount: 2390 },
    { name: "Sun", amount: 3490 },
];

export const BalanceHistoryChart = () => {
    return (
        <div style={{ width: "100%", height: 300, fontSize: "0.75rem" }}>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.2} />
                            <stop offset="95%" stopColor="var(--primary)" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                    <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "var(--text-secondary)" }}
                        dy={10}
                    />
                    <YAxis hide />
                    <Tooltip
                        contentStyle={{
                            borderRadius: "8px", border: "1px solid var(--border)",
                            background: "var(--surface)", boxShadow: "var(--shadow-md)"
                        }}
                    />
                    <Area
                        type="monotone"
                        dataKey="amount"
                        stroke="var(--primary)"
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="url(#colorAmount)"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

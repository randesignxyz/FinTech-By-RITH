"use client";

import React, { useState } from "react";
import { SpendingChart } from "@/components/analytics/SpendingChart/SpendingChart";
import { BalanceHistoryChart } from "@/components/analytics/BalanceHistoryChart/BalanceHistoryChart";
import { CategoryBreakdown } from "@/components/analytics/CategoryBreakdown/CategoryBreakdown";
import { TimePeriodSelector } from "@/components/analytics/TimePeriodSelector/TimePeriodSelector";
import { Card } from "@/components/ui/Card/Card";

export default function AnalyticsPage() {
    const [period, setPeriod] = useState<"Week" | "Month" | "Year">("Week");

    return (
        <div style={{ padding: "20px 20px 6rem 20px" }}>
            <h1 style={{ marginBottom: "1.5rem", fontSize: "1.5rem" }}>Analytics</h1>

            <section style={{ marginBottom: "2rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                    <h2 style={{ fontSize: "1.125rem" }}>Financial Trend</h2>
                </div>
                <TimePeriodSelector period={period} onChange={setPeriod} />
                <Card>
                    <div style={{ padding: "1.5rem 0.5rem 1rem 0" }}>
                        <BalanceHistoryChart />
                    </div>
                </Card>
            </section>

            <section style={{ marginBottom: "2rem" }}>
                <h2 style={{ fontSize: "1.125rem", marginBottom: "1rem" }}>Spending Intensity</h2>
                <Card>
                    <div style={{ padding: "1.5rem 0.5rem 1rem 0" }}>
                        <SpendingChart />
                    </div>
                </Card>
            </section>

            <section>
                <h2 style={{ fontSize: "1.125rem", marginBottom: "1rem" }}>Spending by Category</h2>
                <Card padding="lg">
                    <CategoryBreakdown />
                </Card>
            </section>
        </div>
    );
}

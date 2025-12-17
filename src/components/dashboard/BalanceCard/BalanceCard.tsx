import React from "react";
import { TrendingUp, TrendingDown, Eye } from "lucide-react";
import styles from "./BalanceCard.module.css";
import { BalanceData } from "@/services/api";

interface BalanceCardProps {
    data?: BalanceData;
    isLoading?: boolean;
}

export const BalanceCard = ({ data, isLoading }: BalanceCardProps) => {
    if (isLoading || !data) {
        return (
            <div className={`${styles.card} ${styles.loading}`}>
                <div style={{ height: "100px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    Loading...
                </div>
            </div>
        );
    }

    const isUp = data.trendDirection === "up";

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <span className={styles.label}>Total Balance</span>
                <Eye size={18} style={{ opacity: 0.7 }} />
            </div>
            <div className={styles.balance}>
                {data.currency === "USD" ? "$" : ""}{data.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </div>
            <div className={styles.footer}>
                <div className={styles.trend}>
                    {isUp ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                    <span>{isUp ? "+" : ""}{data.trend}%</span>
                </div>
                <span style={{ opacity: 0.8 }}>vs last month</span>
            </div>
        </div>
    );
};

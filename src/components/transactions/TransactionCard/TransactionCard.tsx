import React from "react";
import { ShoppingBag, Coffee, Music, DollarSign, Tv } from "lucide-react";
import styles from "./TransactionCard.module.css";
import { Transaction } from "@/services/api";

interface TransactionCardProps {
    transaction: Transaction;
}

const getTransactionConfig = (tx: Transaction) => {
    const name = tx.name.toLowerCase();

    if (tx.type === "Income") {
        return {
            icon: <DollarSign size={20} />,
            bg: "rgba(16, 185, 129, 0.1)", // Green tint
            color: "var(--success)"
        };
    }

    if (name.includes("netflix") || name.includes("spotify")) {
        return {
            icon: name.includes("netflix") ? <Tv size={20} /> : <Music size={20} />,
            bg: "rgba(79, 70, 229, 0.1)", // Primary tint
            color: "var(--primary)"
        };
    }

    if (name.includes("coffee") || name.includes("starbucks")) {
        return {
            icon: <Coffee size={20} />,
            bg: "rgba(245, 158, 11, 0.1)", // Warning tint
            color: "var(--warning)"
        };
    }

    // Default Expense
    return {
        icon: <ShoppingBag size={20} />,
        bg: "rgba(239, 68, 68, 0.1)", // Error tint
        color: "var(--error)"
    };
};

export const TransactionCard = ({ transaction }: TransactionCardProps) => {
    const config = getTransactionConfig(transaction);
    const isPositive = transaction.amount > 0;

    return (
        <div className={styles.item}>
            <div className={styles.left}>
                <div
                    className={styles.iconWrapper}
                    style={{ backgroundColor: config.bg, color: config.color }}
                >
                    {config.icon}
                </div>
                <div className={styles.info}>
                    <span className={styles.name}>{transaction.name}</span>
                    <span className={styles.date}>{transaction.date}</span>
                </div>
            </div>
            <div className={styles.right}>
                <span className={`${styles.amount} ${isPositive ? styles.positive : styles.negative}`}>
                    {isPositive ? "+" : "-"}${Math.abs(transaction.amount).toFixed(2)}
                </span>
            </div>
        </div>
    );
};

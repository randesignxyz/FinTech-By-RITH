"use client";

import React, { useState } from "react";
import { FilterTabs } from "@/components/transactions/FilterTabs/FilterTabs";
import { TransactionCard } from "@/components/transactions/TransactionCard/TransactionCard";
import { Transaction } from "@/services/api";

// Mock data (compatible with Transaction interface roughly, ignoring icon string vs logic)
const allTransactions: Transaction[] = [
    { id: 1, name: "Netflix Subscription", date: "Today", amount: -12.99, icon: "🎬", type: "Expense" },
    { id: 2, name: "Upwork Earnings", date: "Yesterday", amount: 450.00, icon: "💼", type: "Income" },
    { id: 3, name: "Starbucks Coffee", date: "Yesterday", amount: -4.50, icon: "☕", type: "Expense" },
    { id: 4, name: "Grocery Store", date: "Oct 24", amount: -85.20, icon: "🛒", type: "Expense" },
    { id: 5, name: "Spotify", date: "Oct 23", amount: -9.99, icon: "🎵", type: "Expense" },
    { id: 6, name: "Salary", date: "Oct 01", amount: 2500.00, icon: "💰", type: "Income" },
];

export default function TransactionsPage() {
    const [filter, setFilter] = useState("All");

    const filteredTransactions = allTransactions.filter((tx) => {
        if (filter === "All") return true;
        return tx.type === filter;
    });

    return (
        <div style={{ padding: "20px 20px 6rem 20px" }}>
            <h1 style={{ marginBottom: "1.5rem", fontSize: "1.5rem" }}>Transactions</h1>
            <FilterTabs activeTab={filter} onTabChange={setFilter} />

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {filteredTransactions.map((tx) => (
                    <TransactionCard key={tx.id} transaction={tx} />
                ))}
            </div>
        </div>
    );
}

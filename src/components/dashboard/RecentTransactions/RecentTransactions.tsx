import React from "react";
import Link from "next/link";
import styles from "./RecentTransactions.module.css";
import { Transaction } from "@/services/api";
import { TransactionCard } from "@/components/transactions/TransactionCard/TransactionCard";

interface RecentTransactionsProps {
  transactions?: Transaction[];
  isLoading?: boolean;
}

export const RecentTransactions = ({ transactions = [], isLoading }: RecentTransactionsProps) => {
  if (isLoading) {
    return <div className={styles.container}>Loading activities...</div>;
  }

  // Show only first 4 items for the preview
  const previewList = transactions.slice(0, 4);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Recent Activity</h2>
        <Link href="/transactions" className={styles.link}>
          See All
        </Link>
      </div>
      <div className={styles.list}>
        {previewList.map((tx) => (
          <TransactionCard key={tx.id} transaction={tx} />
        ))}
        {previewList.length === 0 && (
          <div style={{ padding: "1rem", textAlign: "center", color: "var(--text-secondary)" }}>
            No recent transactions
          </div>
        )}
      </div>
    </div>
  );
};

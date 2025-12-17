"use client";

import React, { useEffect, useState } from "react";
import { Header } from "@/components/layout/Header/Header";
import { BalanceCard } from "@/components/dashboard/BalanceCard/BalanceCard";
import { QuickActions } from "@/components/dashboard/QuickActions/QuickActions";
import { RecentTransactions } from "@/components/dashboard/RecentTransactions/RecentTransactions";
import { api, BalanceData, Transaction } from "@/services/api";

export default function Home() {
  const [balance, setBalance] = useState<BalanceData | undefined>(undefined);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [balData, txData] = await Promise.all([
          api.user.getBalance(),
          api.user.getTransactions()
        ]);
        setBalance(balData);
        setTransactions(txData);
      } catch (error) {
        console.error("Failed to fetch dashboard data", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div style={{ padding: "0 20px 2rem 20px" }}>
      <Header />
      <BalanceCard data={balance} isLoading={isLoading} />
      <QuickActions />
      <RecentTransactions transactions={transactions} isLoading={isLoading} />
    </div>
  );
}

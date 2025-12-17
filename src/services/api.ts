export interface Transaction {
    id: number;
    name: string;
    date: string;
    amount: number;
    icon: string;
    type: "Income" | "Expense";
}

export interface BalanceData {
    amount: number;
    currency: string;
    trend: number;
    trendDirection: "up" | "down";
}

const BASE_URL = "/api";

export const api = {
    user: {
        getBalance: async (): Promise<BalanceData> => {
            const res = await fetch(`${BASE_URL}/user/balance`);
            if (!res.ok) throw new Error("Failed to fetch balance");
            return res.json();
        },
        getTransactions: async (): Promise<Transaction[]> => {
            const res = await fetch(`${BASE_URL}/user/transactions`);
            if (!res.ok) throw new Error("Failed to fetch transactions");
            return res.json();
        }
    }
};

import { NextResponse } from "next/server";

const transactions = [
    { id: 1, name: "Netflix Subscription", date: "Today, 10:00 AM", amount: -12.99, icon: "🎬", type: "Expense" },
    { id: 2, name: "Upwork Earnings", date: "Yesterday, 4:30 PM", amount: 450.00, icon: "💼", type: "Income" },
    { id: 3, name: "Starbucks Coffee", date: "Yesterday, 8:15 AM", amount: -4.50, icon: "☕", type: "Expense" },
    { id: 4, name: "Grocery Store", date: "Oct 24, 6:00 PM", amount: -85.20, icon: "🛒", type: "Expense" },
    { id: 5, name: "Spotify", date: "Oct 23, 9:00 AM", amount: -9.99, icon: "🎵", type: "Expense" },
    { id: 6, name: "Salary", date: "Oct 01, 8:00 AM", amount: 2500.00, icon: "💰", type: "Income" },
];

export async function GET() {
    await new Promise((resolve) => setTimeout(resolve, 800));
    return NextResponse.json(transactions);
}

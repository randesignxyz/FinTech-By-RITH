import { NextResponse } from "next/server";

export async function GET() {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json({
        amount: 12450.00,
        currency: "USD",
        trend: 2.5,
        trendDirection: "up"
    });
}

import React from "react";

const categories = [
    { name: "Shopping", amount: 450, color: "#F472B6", percent: 45 },
    { name: "Food & Drink", amount: 280, color: "#34D399", percent: 28 },
    { name: "Transport", amount: 120, color: "#60A5FA", percent: 12 },
    { name: "Bills", amount: 150, color: "#FBBF24", percent: 15 },
];

export const CategoryBreakdown = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {categories.map((cat) => (
                <div key={cat.name}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px", fontSize: "0.875rem" }}>
                        <span style={{ fontWeight: 500 }}>{cat.name}</span>
                        <span style={{ fontWeight: 600 }}>${cat.amount}</span>
                    </div>
                    <div style={{ width: "100%", height: "8px", backgroundColor: "var(--surface-highlight)", borderRadius: "4px", overflow: "hidden" }}>
                        <div style={{ width: `${cat.percent}%`, height: "100%", backgroundColor: cat.color }} />
                    </div>
                </div>
            ))}
        </div>
    );
};

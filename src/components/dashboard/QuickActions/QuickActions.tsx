import React from "react";
import { ArrowRightLeft, Plus, CreditCard, MoreHorizontal } from "lucide-react";
import styles from "./QuickActions.module.css";

const actions = [
    { icon: ArrowRightLeft, label: "Transfer" },
    { icon: Plus, label: "Top Up" },
    { icon: CreditCard, label: "Pay" },
    { icon: MoreHorizontal, label: "More" },
];

export const QuickActions = () => {
    return (
        <div className={styles.grid}>
            {actions.map((action, index) => (
                <button key={index} className={styles.action}>
                    <div className={styles.iconWrapper}>
                        <action.icon size={24} />
                    </div>
                    <span className={styles.label}>{action.label}</span>
                </button>
            ))}
        </div>
    );
};

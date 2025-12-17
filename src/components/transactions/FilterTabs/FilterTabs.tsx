import React from "react";
import styles from "./FilterTabs.module.css";

interface FilterTabsProps {
    activeTab: string;
    onTabChange: (tab: string) => void;
}

const tabs = ["All", "Income", "Expense"];

export const FilterTabs = ({ activeTab, onTabChange }: FilterTabsProps) => {
    return (
        <div className={styles.container}>
            {tabs.map((tab) => (
                <button
                    key={tab}
                    className={`${styles.tab} ${activeTab === tab ? styles.active : ""}`}
                    onClick={() => onTabChange(tab)}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
};

"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, PieChart, ArrowRightLeft, User, Plus } from "lucide-react";
import styles from "./BottomNav.module.css";

const navItems = [
    { label: "Home", href: "/", icon: Home },
    { label: "Transactions", href: "/transactions", icon: ArrowRightLeft },
    { label: "Analytics", href: "/analytics", icon: PieChart },
    { label: "Profile", href: "/settings", icon: User },
];

export const BottomNav = () => {
    const pathname = usePathname();

    return (
        <nav className={styles.nav}>
            {navItems.slice(0, 2).map((item) => {
                const isActive = pathname === item.href;
                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`${styles.item} ${isActive ? styles.active : ""}`}
                    >
                        <item.icon className={styles.icon} strokeWidth={isActive ? 2.5 : 2} />
                        <span>{item.label}</span>
                    </Link>
                );
            })}

            <button className={styles.fab} aria-label="Add New">
                <Plus size={24} color="white" />
            </button>

            {navItems.slice(2).map((item) => {
                const isActive = pathname === item.href;
                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`${styles.item} ${isActive ? styles.active : ""}`}
                    >
                        <item.icon className={styles.icon} strokeWidth={isActive ? 2.5 : 2} />
                        <span>{item.label}</span>
                    </Link>
                );
            })}
        </nav>
    );
};

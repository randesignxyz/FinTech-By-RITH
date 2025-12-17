import React from "react";
import { Bell } from "lucide-react";
import styles from "./Header.module.css";

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.greeting}>
                <span className={styles.hello}>Good Morning,</span>
                <span className={styles.name}>Ran Narith</span>
            </div>
            <div className={styles.actions}>
                <button className={styles.iconBtn}>
                    <Bell size={24} />
                    <span className={styles.badge} />
                </button>
                <div className={styles.avatar}>
                    <img
                        src="/profile.jpg"
                        alt="Profile"
                        className={styles.avatarImg}
                    />
                </div>
            </div>
        </header>
    );
};

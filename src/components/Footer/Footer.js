import React from "react";
import cls from "./Footer.module.css";

export const Footer = () => {
    return (
        <>
            <footer>
                <div className={cls.footerContainer}>
                    <h2 className={cls.footerTitle}>Game-lib</h2>
                    <p className={cls.footerText}>by Dmitriy Sakovskiy</p>
                </div>
            </footer>
        </>
    )
};
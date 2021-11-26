import React from "react";
import cls from "./HeaderContentCard.module.css";

export const HeaderContentCard = ({headerContentCardData: {title, url}}) => {
    return (
        <>
            <div className={cls.card}>
                <div className={cls.imgCard}>
                    <img src={url} alt="Header Card"/>
                </div>
                <span className={cls.spanCard}>{title}</span>
            </div>
        </>
    )
}
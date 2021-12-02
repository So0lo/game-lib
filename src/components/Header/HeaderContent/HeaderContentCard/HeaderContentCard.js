import React from "react";
import cls from "./HeaderContentCard.module.css";

export const HeaderContentCard = ({headerContentCardData: {background_image, genres, metacritic, name, }}) => {
    return (
        <>
            <div className={cls.card}>
                <div className={cls.imgCard}>
                    <img src={background_image} alt="Header Card"/>
                </div>
                <span className={cls.spanCard}>{name}</span>
            </div>
        </>
    )
}
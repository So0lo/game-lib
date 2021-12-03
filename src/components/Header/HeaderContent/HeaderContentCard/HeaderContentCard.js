import React from "react";
import cls from "./HeaderContentCard.module.css";

export const HeaderContentCard = ({headerContentCardData: {background_image, genres, metacritic, name, }}) => {
    return (
        <>
            <div className={cls.card}
                style={{
                    background:`top / cover no-repeat url(${background_image})`
                }}
            >
                <h2 className={cls.hCard}>{name}</h2>
            </div>
        </>
    )
}
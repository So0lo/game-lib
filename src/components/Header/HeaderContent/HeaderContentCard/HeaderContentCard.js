import React from "react";
import cls from "./HeaderContentCard.module.css";

export const HeaderContentCard = ({headerContentCardData: {background_image, genres, metacritic, name}}) => {
    return (
            <div className={cls.card}
                style={{
                    background:`url(${background_image}) top / cover no-repeat`
                }}
            >
                <h2 className={cls.titleCard}>{name}</h2>
                <span className={cls.genresCard}>{genres.map((genre) => genre.name).join(', ')}</span>
                <div className={cls.metacriticCardWrapper}
                    style={{
                        backgroundColor: metacritic < 50 ? 'rgb(255, 7, 7)' : metacritic < 80 ? 'rgb(252, 171, 22)' : 'rgb(0, 187, 0)'
                    }}
                >
                    <span className={cls.metacriticCard}>{metacritic}</span>
                </div>
            </div>
    )
}

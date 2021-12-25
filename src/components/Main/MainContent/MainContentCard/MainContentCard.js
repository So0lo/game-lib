import cls from "./MainContentCard.module.css";
import { Link } from "react-router-dom";
import {memo} from 'react';

export const MainContentCard = memo(({mainContentCardData: {background_image, genres, metacritic, name, added, released, id}}) => {
    return (
        <Link to={`/game/${id}`} className={cls.card}
            style={{
                background: `gray url(${background_image}) no-repeat center / auto 100%`
            }}
        >
            <div className={cls.aboutCard}>
                <h3 className={cls.titleCard}>{name}</h3>
                <div className={cls.infoCard}>
                    <span className={cls.addedCard}>Added: {added}</span>
                    <span className={cls.metacriticCard}
                        style={{
                            color: metacritic < 50 ? 'rgb(255, 7, 7)' : metacritic < 80 ? 'rgb(252, 171, 22)' : 'rgb(0, 187, 0)',
                            border: metacritic < 50 ? '1px solid rgb(255, 7, 7)' : metacritic < 80 ? '1px solid rgb(252, 171, 22)' : '1px solid rgb(0, 187, 0)'
                        }}
                    >{metacritic}</span>
                </div>
                <div className={cls.additionalInfoCard}>
                    <h4>Genres:</h4>
                    <span>{genres.map((genre) => genre.name).join(', ')}</span>
                    <h4>Release date:</h4>
                    <span>{released}</span>
                </div>
            </div>
        </Link>
    )
});
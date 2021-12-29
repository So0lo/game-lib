import { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import cls from "./GameInfo.module.css";

export const GameInfo = (
        {game: 
            {
                background_image, 
                name, 
                developers, 
                stores, 
                description_raw, 
                genres, 
                tags, 
                website, 
                parent_platforms, 
                released, 
                metacritic,
                ratings
            }, 
        movies}
    ) => {

        const [offset, setOffset] = useState(0);
        const [trailersCount, setTrailersCount] = useState(0);

        useEffect(() =>{
            setTrailersCount(Object.keys(movies).length - 1)
        }, [movies])

        const handleLeftArrow = () => {
            setOffset((currentSet) => {
                const newOffset = currentSet + 100;
                return Math.min(newOffset, 0);
            })
        }
    
        const handleRightArrow = () => {
            setOffset((currentSet) => {
                const newOffset = currentSet - 100;
                return Math.max(newOffset, -(100 * trailersCount));
            })
        }
        return (
            <>
                <div className={cls.gameInfo}>
                    <div>
                        <div className={cls.gameImgWrapper}>
                            <img src={background_image} alt="imgGame" className={cls.gameImg}/>
                        </div>
                        <div className={cls.metacriticCardWrapper}>
                            <div className={cls.metacriticCardInner}
                                style={{
                                    backgroundColor: metacritic < 50 ? 'rgb(255, 7, 7)' : metacritic < 80 ? 'rgb(252, 171, 22)' : 'rgb(0, 150, 0)'
                                }}
                            >
                                <span className={cls.metacriticCard}>{metacritic}</span>
                            </div>
                        </div>
                        <div className={cls.gameInfoItemWrapper}>
                            <p className={cls.titleGameInfoItem}>Developer</p>
                            <p className={cls.gameInfoItem}>{developers?.map(developer => developer.name).join(', ')}</p>
                        </div>
                        <div className={cls.gameInfoItemWrapper}>
                            <p className={cls.titleGameInfoItem}>Stores</p>
                            <p className={cls.gameInfoItem}>{stores?.map(store => store.store.name).join(', ')}</p>
                        </div>
                        <div className={cls.gameInfoItemWrapper}>
                            <p className={cls.titleGameInfoItem}>Website</p>
                            <a href={website} className={cls.gameInfoItem}>{website}</a>
                        </div>
                    </div>
                    <div className={cls.gameMainInfo}>
                        <h2 className={cls.gameName}>{name}</h2>
                        <div className={cls.gameInfoItemWrapper}>
                            <p className={cls.titleGameInfoItem}>About</p>
                            <p className={cls.gameInfoItem}>{description_raw}</p>
                        </div>
                        <div className={cls.gameMainInfoItem}>
                            <div className={cls.gameInfoItemWrapper}>
                                <p className={cls.titleGameInfoItem}>Genres</p>
                                <p className={cls.gameInfoItem}>{genres?.map(genre => genre.name).join(', ')}</p>
                            </div>
                            <div className={cls.gameInfoItemWrapper}>
                                <p className={cls.titleGameInfoItem}>Tags</p>
                                <p className={cls.gameInfoItem}>{tags?.map(tag => tag.name).join(', ')}</p>
                            </div>
                        </div>
                        <div className={cls.gameMainInfoItem}>
                            <div className={cls.gameInfoItemWrapper}>
                                <p className={cls.titleGameInfoItem}>Platforms</p>
                                <p className={cls.gameInfoItem}>{parent_platforms?.map(platform => platform.platform.name).join(', ')}</p>
                            </div>
                            <div className={cls.gameInfoItemWrapper}>
                                <p className={cls.titleGameInfoItem}>Released</p>
                                <p className={cls.gameInfoItem}>{released}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cls.additionalInfo}>
                    <h3 className={cls.additionalInfoText}>Ratings</h3>
                    <div className={cls.ratingsInfo}>
                        {ratings?.map(rating => <div className={cls.ratingsInfoItem} key={rating.id}>
                            <p className={cls.ratingsInfoItemTitle}>{rating.title}:</p>
                            <p className={cls.ratingsInfoItemText}>{rating.count}</p>
                        </div>)}
                    </div>
                </div>
                { Object.keys(movies).length ?
                    <div className={cls.additionalInfo}>
                        <h3 className={cls.additionalInfoText}>Trailers</h3>
                        <div className={cls.trailers}>
                            <FaChevronLeft className={cls.arrow} onClick={handleLeftArrow}/>
                                <div className={cls.window}>
                                    <div className={cls.contentCard}
                                        style={{
                                            transform: `translateX(${offset}%)`,
                                        }}
                                    >
                                        {movies.map((movie) => <video poster={movie.preview} preload="metadata" controls src={movie.data.max} key={movie.id}/>)}
                                    </div>
                                </div>
                            <FaChevronRight className={cls.arrow} onClick={handleRightArrow}/>
                        </div>
                    </div> : true
                }
            </>
        )
};

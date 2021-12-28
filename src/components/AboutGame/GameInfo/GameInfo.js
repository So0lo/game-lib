import cls from "./GameInfo.module.css";

export const GameInfo = ({game: 
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
        metacritic
    }}) => {
        return (
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
                        <p className={cls.gameInfoItem}>{developers ? developers.map(developer => developer.name).join(', ') : ''}</p>
                    </div>
                    <div className={cls.gameInfoItemWrapper}>
                        <p className={cls.titleGameInfoItem}>Stores</p>
                        <p className={cls.gameInfoItem}>{stores ? stores.map(store => store.store.name).join(', ') : ''}</p>
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
                            <p className={cls.gameInfoItem}>{genres ? genres.map(genre => genre.name).join(', ') : ''}</p>
                        </div>
                        <div className={cls.gameInfoItemWrapper}>
                            <p className={cls.titleGameInfoItem}>Tags</p>
                            <p className={cls.gameInfoItem}>{tags ? tags.map(tag => tag.name).join(', ') : ''}</p>
                        </div>
                    </div>
                    <div className={cls.gameMainInfoItem}>
                        <div className={cls.gameInfoItemWrapper}>
                            <p className={cls.titleGameInfoItem}>Platforms</p>
                            <p className={cls.gameInfoItem}>{parent_platforms ? parent_platforms.map(platform => platform.platform.name).join(', ') : ''}</p>
                        </div>
                        <div className={cls.gameInfoItemWrapper}>
                            <p className={cls.titleGameInfoItem}>Released</p>
                            <p className={cls.gameInfoItem}>{released}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
}
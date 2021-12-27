import cls from "./GameInfo.module.css";

export const GameInfo = ({game: {background_image, name, developers}}) => {
    return (
        <div className={cls.gameInfo}>
            <div>
                <div className={cls.gameImgWrapper}>
                    <img src={background_image} alt="imgGame" className={cls.gameImg}/>
                </div>
                <div>
                    <p style={{color:'#fff'}}>Developers</p>
                    <p style={{color:'#fff'}}>{developers ? developers.map(developer => developer.name).join(', ') : ''}</p>
                </div>
            </div>
            <div className={cls.gameNameWrapper}>
                <h2 className={cls.gameName}>{name}</h2>
            </div>
        </div>
    )
}
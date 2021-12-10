import cls from "./MainContentCard.module.css";

export const MainContentCard = ({mainContentCardData: {background_image, genres, metacritic, name, tags}}) => {
    return (
        <div className={cls.card}>
            <div className={cls.imgWrapper}>
                <img src={background_image} alt="imgCard" className={cls.imgCard}/>
            </div>
            <h3 className={cls.titleCard}>{name}</h3>
        </div>
    )
}
import cls from "./MainContent.module.css";
import { MainContentCard } from "./MainContentCard/MainContentCard";
import loader from "../../../img/gif/loader.gif"

export const MainContent = ({gotData, isLoading}) => {
    return (
        <>
            <div className={cls.MainContent}>
                { !isLoading ? gotData.map((card) => <MainContentCard
                        mainContentCardData={card}
                        key={card.id}
                    />) : <img src={loader} alt="loader" className={cls.loader}/>
                }
                { !isLoading && gotData.length === 0 ? <div className={cls.notFoundText}>Not Found</div> : true }
            </div>
        </>
    )
};
import cls from "./MainContent.module.css";
import { MainContentCard } from "./MainContentCard/MainContentCard";
import loader from "../../../img/gif/loader.gif";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChekPage, getCurrentPage, getFetching, getGames } from "../../../Redux/mainContent/mainContentSelectors";
import { showGames, clearGames, setFetching } from "../../../Redux/mainContent/mainContentActions";

export const MainContent = ({searchText, genresFilter, tagsFilter, platformsFilter}) => {
    const games = useSelector(getGames);
    const currentPage = useSelector(getCurrentPage);
    const chekPage = useSelector(getChekPage);
    const fetching = useSelector(getFetching);
    const chekRender = useRef(false);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        if (fetching) {
            if(!games.length){
                setIsLoading(true);
            }
            dispatch(showGames(currentPage, searchText, genresFilter, tagsFilter, platformsFilter, changeLoadingStatus));
        }
    }, [fetching]);

    useEffect(() => {
        if (chekRender) {
            dispatch(clearGames());
        } else {
            chekRender.current = true;
        }
    }, [searchText, genresFilter, tagsFilter, platformsFilter]);

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);
        return function () {
            document.removeEventListener('scroll', scrollHandler);
        }
    }, [fetching]);

    const changeLoadingStatus = (bool) => {
        setIsLoading(bool);
    } 

    const scrollHandler = ({target}) => {
        if (target.documentElement.scrollHeight - (target.documentElement.scrollTop + window.innerHeight) < 150 && chekPage) {
            dispatch(setFetching(true));
        }
    }

    return (
        <>
            <div className={cls.mainContent}>
                {!isLoading ? games.map((card) => <MainContentCard
                        mainContentCardData={card}
                        key={card.id}
                    />) : <img src={loader} alt="loader" className={cls.loader}/>}
                { !isLoading && games.length === 0 ? <div className={cls.notFoundText}>Not Found</div> : true }
            </div>
        </>
    )
};
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Game } from "../components/Game/Game";
import { useDispatch, useSelector } from "react-redux";
import { getGame, getMovies, getComments, getFetching, getChekPage, getCurrentPage } from "../Redux/gamePage/gamePageSelectors";
import { showGame, showMovies, showComments, setComments, setFetching } from "../Redux/gamePage/gamePageActions";
import loader from "../img/gif/loader.gif";
import cls from "./GamePage.module.css";
import { clearGames } from "../Redux/mainContent/mainContentActions";

export const GamePage = () => {
    const {gameId} = useParams();
    const game = useSelector(getGame);
    const dispatch = useDispatch();
    const movies = useSelector(getMovies);
    const comments = useSelector(getComments);
    const [isLoading, setIsLoading] = useState(false);
    const fetching = useSelector(getFetching);
    const chekPage = useSelector(getChekPage);
    const currentPage = useSelector(getCurrentPage);
    const [goToUp, setGoToUp] = useState(false);

    const changeLoadingStatus = (bool) => {
        setIsLoading(bool);
    } 

    useEffect(() => {
        setIsLoading(true);
        dispatch(showGame(gameId, changeLoadingStatus));
        dispatch(showMovies(gameId));
        dispatch(clearGames());
    }, []);

    useEffect(() => {
        if(fetching) {
            dispatch(showComments(gameId, currentPage));
        }
    }, [fetching]);

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);
        return function () {
            document.removeEventListener('scroll', scrollHandler);
        }
    }, [fetching, goToUp]);

    const scrollHandler = ({target}) => {
        if (target.documentElement.scrollHeight - (target.documentElement.scrollTop + window.innerHeight) < 100 && chekPage) {
            dispatch(setFetching(true));
        }
        if (target.documentElement.scrollTop > 2000 && !goToUp) {
            setGoToUp(true);
        } else if (target.documentElement.scrollTop < 2000 && goToUp) {
            setGoToUp(false)
        }
    };

    const updateComments = (id, text, username, photo) => {
        if (text) {
            dispatch(setComments({
                id,
                name: text,
                username,
                photo
            }));
        }
    }

    const executeGoToUP = () => {
        window.scrollTo(0,0);
    }

    return (
        <>
            <div className={cls.game} style={{
                    background: `#000 url(${game.background_image}) center / cover no-repeat fixed`
            }}>
                {!isLoading ? 
                    <div className={cls.container}>
                        <Game game={game} movies={movies} comments={comments} updateComments={updateComments}/>
                    </div> : <img src={loader} alt="loader" className={cls.loader}/>
                }
                <div onClick={executeGoToUP} className={cls.GoToUp} style={{
                    display: `${goToUp ? 'block'  : 'none'}`
                }}>Go to up</div>
            </div>
        </>
    )
};
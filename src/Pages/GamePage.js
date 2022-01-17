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
    }, [fetching]);

    const scrollHandler = ({target}) => {
        if (target.documentElement.scrollHeight - (target.documentElement.scrollTop + window.innerHeight) < 100 && chekPage) {
            dispatch(setFetching(true));
        }
    }

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
            </div>
        </>
    )
};
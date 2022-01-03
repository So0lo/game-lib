import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Comments } from "../components/AboutGame/Comments/Comments";
import { GameInfo } from "../components/AboutGame/GameInfo/GameInfo";
import loader from "../img/gif/loader.gif";
import cls from "./GamePage.module.css";

export const GamePage = () => {
    const {gameId} = useParams();
    const [game, setGame] = useState({});
    const [movies, setMovies] = useState([]);
    const [reddit, setReddit] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [fetching, setFetching] = useState(true);
    const [chekPage, setChekPage] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://api.rawg.io/api/games/${gameId}?key=fc5d17fd5f594b359a91a8ec9bcd0d53`)
        .then((res) => {
            if (res.status >= 400 && res.status < 600) {
                throw new Error('failed fething data');
            }
            return res.json();
        })
        .then((res) => {
            console.log(res);
            setGame(res);
        })
        .catch((mes) => console.log(mes))
        .finally(() => setIsLoading(false));
    }, []);

    useEffect(() => {
        fetch(`https://api.rawg.io/api/games/${gameId}/movies?key=fc5d17fd5f594b359a91a8ec9bcd0d53`)
        .then((res) => {
            if (res.status >= 400 && res.status < 600) {
                throw new Error('failed fething data');
            }
            return res.json();
        })
        .then((res) => {
            setMovies(res.results);
        })
        .catch((mes) => console.log(mes))
    }, []);

    useEffect(() => {
        if(fetching) {
            fetch(`https://api.rawg.io/api/games/${gameId}/reddit?key=fc5d17fd5f594b359a91a8ec9bcd0d53&page=${currentPage}`)
            .then((res) => {
                if (res.status >= 400 && res.status < 600) {
                    throw new Error('failed fething data');
                }
                return res.json();
            })
            .then((res) => {
                console.log(res);
                setReddit([...reddit, ...res.results]);
                setCurrentPage(prevState => prevState + 1);
                if (!res.next) {
                    setChekPage(false);
                }
            })
            .catch((mes) => console.log(mes))
            .finally(() => setFetching(false));
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
            setFetching(true);
        }
    }

    const updateComments = (id, text, username) => {
        const obj = {
            id,
            name: text,
            username
        }
        setReddit([obj, ...reddit]);
    }

    return (
        <>
            <div className={cls.game} style={{
                        background: `#000 url(${game.background_image}) center / cover no-repeat fixed`
            }}>
                {!isLoading ? 
                    <div className={cls.container}>
                        <GameInfo game={game} movies={movies}/>
                        <Comments reddit={reddit} updateComments={updateComments}/>
                    </div> : <img src={loader} alt="loader" className={cls.loader}/>
                }
            </div>
        </>
    )
};
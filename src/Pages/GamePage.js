import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Game } from "../components/Game/Game";
import { withError } from "../hoc/withError";
import loader from "../img/gif/loader.gif";
import cls from "./GamePage.module.css";

const HandledGame = withError(Game);

export const GamePage = () => {
    const {gameId} = useParams();
    const [game, setGame] = useState({});
    const [movies, setMovies] = useState([]);
    const [reddit, setReddit] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [fetching, setFetching] = useState(true);
    const [chekPage, setChekPage] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [errorMessage, setErrorMessage] = useState('');

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
            setGame(res);
        })
        .catch((mes) => {console.log(1); return setErrorMessage(mes)})
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
        .catch(() => false)
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
                setReddit([...reddit, ...res.results]);
                setCurrentPage(prevState => prevState + 1);
                if (!res.next) {
                    setChekPage(false);
                }
            })
            .catch(() => false)
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

    const updateComments = (id, text, username, photo) => {
        const obj = {
            id,
            name: text,
            username,
            photo
        }
        setReddit([obj, ...reddit]);
    }

    return (
        <>
            <div className={cls.game} style={{
                        background: `#000 url(${game.background_image}) center / cover no-repeat fixed`,
                        position: `${errorMessage ? 'absolute' : 'relative'}`,
                        top: `${errorMessage ? '0' : 'auto'}`,
                        right: `${errorMessage ? '0' : 'auto'}`,
                        bottom: `${errorMessage ? '0' : 'auto'}`,
                        left: `${errorMessage ? '0' : 'auto'}`
            }}>
                {!isLoading ? 
                    <div className={cls.container} style={{zIndex: `${errorMessage ? '1001' : '100'}`}}>
                        <HandledGame game={game} movies={movies} reddit={reddit} updateComments={updateComments} errorMsg={errorMessage}/>
                    </div> : <img src={loader} alt="loader" className={cls.loader}/>
                }
            </div>
        </>
    )
};
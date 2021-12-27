import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GameInfo } from "../components/AboutGame/GameInfo/GameInfo";
import cls from "./GamePage.module.css";

export const GamePage = () => {
    const {gameId} = useParams();
    const [game, setGame] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://api.rawg.io/api/games/${gameId}?key=fc5d17fd5f594b359a91a8ec9bcd0d53&page_size=40`)
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

    return (
        <>
            {!isLoading ? 
                <div className={cls.game} style={{
                    background: `rgb(128, 128, 128) url(${game.background_image}) center / cover no-repeat`
                }}>
                    <div className={cls.container}>
                        <GameInfo game={game}/>
                    </div>
                </div> : true
            }
        </>
    )
};
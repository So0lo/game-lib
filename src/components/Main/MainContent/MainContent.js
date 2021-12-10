import React, { useState, useEffect } from "react";
import cls from "./MainContent.module.css";
import { MainContentCard } from "./MainContentCard/MainContentCard";
import loader from "../../../img/gif/loader.gif"

export const MainContent = () => {

    const [gotData, setGotData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://api.rawg.io/api/games?key=fc5d17fd5f594b359a91a8ec9bcd0d53&page=1`)
        .then((res) => {
            if (res.status >= 400 && res.status < 600) {
                throw new Error('failed fething data');
            }
            return res.json();
        })
        .then((res) => {
            setGotData(res.results);
        })
        .catch((mes) => console.log(mes))
        .finally(() => setIsLoading(false));
    }, []);

    console.log(gotData);

    return (
        <>
            <div className={cls.MainContent}>
                { !isLoading ? gotData.map((card) => <MainContentCard
                        mainContentCardData={card}
                        key={card.id}
                    />) : <img src={loader} alt="loader" className={cls.loader}/>
                }
            </div>
        </>
    )
};
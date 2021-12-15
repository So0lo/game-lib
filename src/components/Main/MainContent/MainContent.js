import React, { useState, useEffect } from "react";
import cls from "./MainContent.module.css";
import { MainContentCard } from "./MainContentCard/MainContentCard";
import loader from "../../../img/gif/loader.gif"

export const MainContent = () => {

    const [gotData, setGotData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [fetching, setFetching] = useState(true);
    const [chekPage, setChekPage] = useState(true);

    useEffect(() => {
        if (fetching) {
            setIsLoading(true);
            fetch(`https://api.rawg.io/api/games?key=fc5d17fd5f594b359a91a8ec9bcd0d53&page=${currentPage}`)
            .then((res) => {
                if (res.status >= 400 && res.status < 600) {
                    throw new Error('failed fething data');
                }
                return res.json();
            })
            .then((res) => {
                setGotData([...gotData, ...res.results]);
                setCurrentPage(prevState => prevState + 1);
                if (!res.next) {
                    setChekPage(false);
                }
            })
            .catch((mes) => console.log(mes))
            .finally(() => {
                setFetching(false);
                setIsLoading(false);
            });
        }
    }, [fetching]);

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);
        return function () {
            document.removeEventListener('scroll', scrollHandler);
        }
    }, []);

    const scrollHandler = ({target}) => {
        if (target.documentElement.scrollHeight - (target.documentElement.scrollTop + window.innerHeight) < 150 && chekPage) {
            setFetching(true);
        }
    }

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
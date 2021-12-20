import cls from "./MainContent.module.css";
import { MainContentCard } from "./MainContentCard/MainContentCard";
import loader from "../../../img/gif/loader.gif";
import { useState, useEffect } from "react";

export const MainContent = ({searchText}) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [fetching, setFetching] = useState(true);
    const [chekPage, setChekPage] = useState(true);
    
    useEffect(() => {
        if (fetching) {
            setIsLoading(true);
            fetch(`https://api.rawg.io/api/games?key=fc5d17fd5f594b359a91a8ec9bcd0d53&page_size=40&page=${currentPage}${searchText ? `&search=${searchText}` : ''}`)
            .then((res) => {
                if (res.status >= 400 && res.status < 600) {
                    throw new Error('failed fething data');
                }
                return res.json();
            })
            .then((res) => {
                setData([...data, ...res.results]);
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
        setData([]);
        setCurrentPage(1);
        setChekPage(true);
        setFetching(true);
    }, [searchText]);

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);
        return function () {
            document.removeEventListener('scroll', scrollHandler);
        }
    }, [fetching]);

    const scrollHandler = ({target}) => {
        if (target.documentElement.scrollHeight - (target.documentElement.scrollTop + window.innerHeight) < 150 && chekPage) {
            setFetching(true);
        }
    }

    return (
        <>
            <div className={cls.MainContent}>
                { !isLoading ? data.map((card) => <MainContentCard
                        mainContentCardData={card}
                        key={card.id}
                    />) : <img src={loader} alt="loader" className={cls.loader}/>
                }
                { !isLoading && data.length === 0 ? <div className={cls.notFoundText}>Not Found</div> : true }
            </div>
        </>
    )
};
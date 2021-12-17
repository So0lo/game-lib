import React, { useState, useEffect} from "react";
import { MainContent } from "./MainContent/MainContent";
import { MainNav } from "./MainNav/MainNav";
import "./Main.module.css";

export const Main = () => {
    const [gotData, setGotData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [fetching, setFetching] = useState(true);
    const [chekPage, setChekPage] = useState(true);
    const [searchText, setSearchText] = useState('');

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
        setGotData([]);
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

    const changeSearchText = (text) => {
        setSearchText(text);
    }

    return (
        <>
            <main>
                <MainNav changeSearchText={changeSearchText}/>
                <MainContent gotData={gotData} isLoading={isLoading}/>
            </main>
        </>
    )
};

import React, { useState, useEffect } from "react";
import cls from "./MainNav.module.css";
import search from "../../../img/search.png"
import loader from "../../../img/gif/loader.gif"

export const MainNav = ({changeSearchText}) => {
    const [genres, setGenres] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [inputText, setInputText] = useState('');

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://api.rawg.io/api/genres?key=fc5d17fd5f594b359a91a8ec9bcd0d53`)
        .then((res) => {
            if (res.status >= 400 && res.status < 600) {
                throw new Error('failed fething data');
            }
            return res.json();
        })
        .then((res) => {
            setGenres(res.results);
        })
        .catch((mes) => console.log(mes))
        .finally(() => {
            setIsLoading(false);
        });
    }, []);


    const changeHadler = ({target: {value}}) => {
        setInputText(() => value);
    }

    const setGenresFilter = (name) => {
        console.log(name);
    }
    
    return (
        <>
           <div className={cls.mainNav}>
               <div className={cls.searchBar}>
                    <input
                        className={cls.searchBarInput}
                        type="text"
                        placeholder="Search"
                        value={inputText}
                        onChange={changeHadler}
                    />
                    <div className={cls.searchWrapper} onClick={() => changeSearchText(inputText)}><img src={search} alt="search" className={cls.search}/></div>
               </div>
               <div className={cls.filterBar}>
                   <h3 className={cls.textFilter}>Filter:</h3>
                   <p className={cls.typeFilter}>Genres</p>
                   {!isLoading ? genres.map((genre) =>
                        <label key={genre.id}>
                            <input type="checkbox" className={cls.inputCheckbox}/>
                            <div className={cls.genre} onClick={() => setGenresFilter(genre.name)}>{genre.name}</div>
                        </label>
                   ) : <img src={loader} alt="loader"/> }
               </div>
           </div>
        </>
    )
};
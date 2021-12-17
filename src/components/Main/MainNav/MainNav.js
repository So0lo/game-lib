import React, { useState } from "react";
import cls from "./MainNav.module.css";
import search from "../../../img/search.png"

export const MainNav = ({changeSearchText}) => {
    const [inputText, setInputText] = useState('');

    const changeHadler = ({target: {value}}) => {
        setInputText(() => value);
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
                    <div className={cls.searchWrapper} onClick={() => changeSearchText(inputText)}><img src={search} atl="search" className={cls.search}/></div>
               </div>
           </div>
        </>
    )
};
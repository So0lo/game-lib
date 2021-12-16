import React, { useState } from "react";
import cls from "./MainNav.module.css";

export const MainNav = ({changeSearchText}) => {
    const [inputText, setInputText] = useState('');

    const changeHadler = ({target: {value}}) => {
        setInputText(() => value);
    }
    return (
        <>
           <div className={cls.mainNav}>
               <input
                    type="text"
                    value={inputText}
                    onChange={changeHadler}
               />
               <div className={cls.que} onClick={() => changeSearchText(inputText)}></div>
           </div>
        </>
    )
};
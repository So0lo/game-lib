import React, { useState, useEffect} from "react";
import { MainContent } from "./MainContent/MainContent";
import { MainNav } from "./MainNav/MainNav";
import "./Main.module.css";

export const Main = () => {
    const [searchText, setSearchText] = useState('');
    
    const changeSearchText = (text) => {
        setSearchText(text);
    }

    return (
        <>
            <main>
                <MainNav changeSearchText={changeSearchText}/>
                <MainContent searchText={searchText}/>
            </main>
        </>
    )
};

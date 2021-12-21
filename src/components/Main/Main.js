import React, { useState } from "react";
import { MainContent } from "./MainContent/MainContent";
import { MainNav } from "./MainNav/MainNav";
import "./Main.module.css";

export const Main = () => {
    const [searchText, setSearchText] = useState('');
    const [genresFilter, setGenresFilter] = useState('');
    
    const changeSearchText = (text) => {
        setSearchText(text);
    }

    const changeGenresFilter = (text) => {
        if (genresFilter === text) {
            setGenresFilter('');
        } else {
            setGenresFilter(text);
        }
    }

    return (
        <>
            <main>
                <MainNav changeSearchText={changeSearchText} changeGenresFilter={changeGenresFilter} genresFilter={genresFilter}/>
                <MainContent searchText={searchText} genresFilter={genresFilter}/>
            </main>
        </>
    )
};

import React, { useState } from "react";
import { MainContent } from "./MainContent/MainContent";
import { MainNav } from "./MainNav/MainNav";
import "./Main.module.css";

export const Main = () => {
    const [searchText, setSearchText] = useState('');
    const [genresFilter, setGenresFilter] = useState('');
    const [tagsFilter, setTagsFilter] = useState('');
    const [platformsFilter, setPlatformsFilter] = useState('');
    
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

    const changeTagsFilter = (text) => {
        if (tagsFilter === text) {
            setTagsFilter('');
        } else {
            setTagsFilter(text);
        }
    }

    const changePlatformsFilter = (text) => {
        if (platformsFilter === text) {
            setPlatformsFilter('');
        } else {
            setPlatformsFilter(text);
        }
    }

    return (
        <>
            <main>
                <MainNav 
                    changeSearchText={changeSearchText} 
                    changeGenresFilter={changeGenresFilter} 
                    genresFilter={genresFilter} 
                    changeTagsFilter={changeTagsFilter} 
                    tagsFilter={tagsFilter}
                    changePlatformsFilter={changePlatformsFilter} 
                    platformsFilter={platformsFilter}
                />
                <MainContent searchText={searchText} genresFilter={genresFilter} tagsFilter={tagsFilter} platformsFilter={platformsFilter}/>
            </main>
        </>
    )
};

import React, { useState, useEffect } from "react";
import { Genres } from "./FilterTypes/Genres";
import { Tags } from "./FilterTypes/Tags";
import { Platforms } from "./FilterTypes/Platforms";
import cls from "./MainNav.module.css";
import search from "../../../img/search.png";

export const MainNav = ({changeSearchText, changeGenresFilter, genresFilter, changeTagsFilter, tagsFilter, changePlatformsFilter, platformsFilter}) => {
    const [genres, setGenres] = useState([]);
    const [tags, setTags] = useState([]);
    const [platforms, setPlatforms] = useState([]);
    const [inputText, setInputText] = useState('');

    useEffect(() => {
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
    }, []);

    useEffect(() => {
        fetch(`https://api.rawg.io/api/tags?key=fc5d17fd5f594b359a91a8ec9bcd0d53`)
        .then((res) => {
            if (res.status >= 400 && res.status < 600) {
                throw new Error('failed fething data');
            }
            return res.json();
        })
        .then((res) => {
            setTags(res.results);
        })
        .catch((mes) => console.log(mes))
    }, []);

    useEffect(() => {
        fetch(`https://api.rawg.io/api/platforms/lists/parents?key=fc5d17fd5f594b359a91a8ec9bcd0d53`)
        .then((res) => {
            if (res.status >= 400 && res.status < 600) {
                throw new Error('failed fething data');
            }
            return res.json();
        })
        .then((res) => {
            setPlatforms(res.results);
        })
        .catch((mes) => console.log(mes))
    }, []);


    const changeHadler = ({target: {value}}) => {
        setInputText(() => value);
    }

    return (
           <div className={cls.mainNav}>
               <div className={cls.mainNavInner}>
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
               <div>
                   <label htmlFor="filterInput">
                        <h3 className={cls.textFilter}>Filter</h3>
                   </label>
                   <input type="checkbox" id="filterInput" className={cls.filterInput}/>
                   <div className={cls.filterTypesWrapper}>
                        <div className={cls.filterTypes}>
                                <div className={cls.typeFilterBlock}>
                                        <p className={cls.typeFilter}>Genres</p>
                                        {genres.map((genre) => 
                                        <Genres 
                                            genre={genre} 
                                            key={genre.id} 
                                            changeGenresFilter={changeGenresFilter} 
                                            genresFilter={genresFilter}
                                        />)}
                                </div>
                                <div className={cls.typeFilterBlock}>
                                        <p className={cls.typeFilter}>Tags</p>
                                        {tags.map((tag) => <Tags 
                                            tag={tag} 
                                            key={tag.id} 
                                            changeTagsFilter={changeTagsFilter} 
                                            tagsFilter={tagsFilter}
                                        />)}
                                </div>
                                <div className={cls.typeFilterBlock}>
                                        <p className={cls.typeFilter}>Platforms</p>
                                        {platforms.map((platform) => 
                                        <Platforms 
                                            platform={platform} 
                                            key={platform.id} 
                                            changePlatformsFilter={changePlatformsFilter} 
                                            platformsFilter={platformsFilter}
                                        />)}
                                </div>
                        </div>
                   </div>
               </div>
               </div>
           </div>
    )
};
import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { HeaderContentCard } from "./HeaderContentCard/HeaderContentCard";
import { useDispatch, useSelector } from "react-redux";
import { getBookmarks } from "../../../Redux/bookmarks/bookmarksSelectors";
import headerBgr from '../../../img/headerBgr.jpg';
import cls from "./HeaderContent.module.css";
import loader from "../../../img/gif/loader.gif";
import { Bookmark } from "./Bookmarks/Bookmark";

export const HeaderContent = () => {
    const bookmarks = useSelector(getBookmarks);
    const dispatch = useDispatch();
    const [data, setData] = useState([]);
    const [offset, setOffset] = useState(0);
    const [changeStatus, setChangeStatus] = useState(false);

    useEffect(() => {
        fetch(`https://api.rawg.io/api/games?key=fc5d17fd5f594b359a91a8ec9bcd0d53&page_size=40`)
        .then((res) => {
            if (res.status >= 400 && res.status < 600) {
                throw new Error('failed fething data');
            }
            return res.json();
        })
        .then((res) => {
            const mas = [];
            for (let i=0; i < 5; i++) {
                let elem = res.results[Math.round(Math.random() * (res.results.length-1))];
                if (mas.includes(elem)) {
                    i--;
                } else {
                    mas.push(elem);
                }
            }
            setData(mas);
        })
        .catch((mes) => console.log(mes));
    }, []);

    const handleLeftArrow = () => {
        setOffset((currentSet) => {
            const newOffset = currentSet + 100;
            return Math.min(newOffset, 0);
        })
    }

    const handleRightArrow = () => {
        setOffset((currentSet) => {
            const newOffset = currentSet - 100;
            return Math.max(newOffset, -(100 * 4));
        })
    }

    const changeButtonStatus = () => {
        setChangeStatus(!changeStatus);
    }

    return (
        <>
                <div className={cls.container}
                    style={{
                        background: `#000 url(${headerBgr})`
                    }}
                >
                    <button className={cls.showBookmarks} onClick={changeButtonStatus}></button>
                    <div className={cls.bookmarksWrapper}>
                        <div style={{
                            marginRight: `${changeStatus ? '0' : '-500px'}`

                        }} className={cls.bookmarks}>{bookmarks.map((bookmark) => <Bookmark bookmark={bookmark} key={bookmark.id}/>)}
                        </div>
                    </div>
                    {data.length ? 
                        <>
                            <FaChevronLeft className={cls.arrow} onClick={handleLeftArrow}/>
                            <div className={cls.window}>
                                <div className={cls.contentCard}
                                    style={{
                                        transform: `translateX(${offset}%)`,
                                    }}
                                >
                                    {data.map((card) => 
                                    <HeaderContentCard
                                        headerContentCardData={card}
                                        key={card.id}
                                    />)}
                                </div>
                            </div>
                            <FaChevronRight className={cls.arrow} onClick={handleRightArrow}/>
                        </> : <img src={loader} alt="loader"/>}
            </div>
        </>
    )
}
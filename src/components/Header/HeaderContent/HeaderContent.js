import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { HeaderContentCard } from "./HeaderContentCard/HeaderContentCard";
import headerBgr from '../../../img/headerBgr.jpg';
import cls from "./HeaderContent.module.css";
import loader from "../../../img/gif/loader.gif";

export const HeaderContent = () => {

    const [gotData, setGotData] = useState([]);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        fetch(`https://api.rawg.io/api/games?key=fc5d17fd5f594b359a91a8ec9bcd0d53`)
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
            setGotData(mas);
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

    return (
        <>
                <div className={cls.container}
                    style={{
                        background: `url(${headerBgr})`
                    }}
                >
                    {gotData.length ? 
                        <>
                            <FaChevronLeft className={cls.arrow} onClick={handleLeftArrow}/>
                            <div className={cls.window}>
                                <div className={cls.contentCard}
                                    style={{
                                        transform: `translateX(${offset}%)`,
                                    }}
                                >
                                    {gotData.map((card) => 
                                    <HeaderContentCard
                                        headerContentCardData={card}
                                        key={card.id}
                                        gotData={gotData}
                                    />)}
                                </div>
                            </div>
                            <FaChevronRight className={cls.arrow} onClick={handleRightArrow}/>
                        </> : <img src={loader} alt="loader"/>}
            </div>
        </>
    )
}
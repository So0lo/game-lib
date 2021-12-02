import React, { useEffect, useState } from "react";
import { HeaderContentCard } from "./HeaderContentCard/HeaderContentCard";
import cls from "./HeaderContent.module.css";

export const HeaderContent = () => {

    const [gotData, setGotData] = useState([]);

    useEffect(() => {
         
        fetch(`https://api.rawg.io/api/games?key=fc5d17fd5f594b359a91a8ec9bcd0d53`)
        .then((res) => {
            if (res.status >= 400 && res.status < 600) {
                throw new Error('failed fething data');
            }
            return res.json();
        })
        .then((res) => {
            console.log(res.results[1]);
            let mas = [];
            for (let i=0; i < 5; i++) {
                mas.push(res.results[Math.round(Math.random() * res.results.length)]);
            }
            setGotData(mas);
            // getFiveThings(res.results);
        })
        .catch((mes) => console.log(mes));
    }, []);

    // const getFiveThings = (res) => {
    //     setInterval(() => {
    //     let mas = [];
    //     for (let i=0; i < 5; i++) {
    //         mas.push(res[Math.round(Math.random() * res.length)]);
    //     }
    //     setGotData(mas);}, 5000);
    // };

    console.log(gotData);

    return (
        <>
            <div className={cls.contentCard}>
                {gotData.map((card) => 
                <HeaderContentCard
                    headerContentCardData={card}
                    key={card.id}
                />)}
            </div>
        </>
    )
}
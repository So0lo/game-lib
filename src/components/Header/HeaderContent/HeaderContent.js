import React, { useEffect, useState } from "react";
import { HeaderContentCard } from "./HeaderContentCard/HeaderContentCard";
import cls from "./HeaderContent.module.css";

export const HeaderContent = () => {

    const [gotData, setGotData] = useState([]);

    useEffect(() => {
         
        fetch(`https://jsonplaceholder.typicode.com/photos`)
        .then((res) => {
            if (res.status >= 400 && res.status < 600) {
                throw new Error('failed fething data');
            }
            return res.json();
        })
        .then((res) => {
            let mas = [];
            for (let i=0; i < 5; i++) {
                mas.push(res[Math.round(Math.random() * res.length)]);
            }
            setGotData(mas);
            getFiveThings(res);
        })
        .catch((mes) => console.log(mes));
    }, []);

    const getFiveThings = (res) => {
        setInterval(() => {
        let mas = [];
        for (let i=0; i < 5; i++) {
            mas.push(res[Math.round(Math.random() * res.length)]);
        }
        setGotData(mas);}, 15000);
    };

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
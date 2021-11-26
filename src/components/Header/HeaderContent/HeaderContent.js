import React, { useEffect, useState } from "react";
import { HeaderContentCard } from "./HeaderContentCard/HeaderContentCard";
import cls from "./HeaderContent.module.css";

export const HeaderContent = () => {

    const [gotData, setGotData] = useState([]);

    useEffect(() => {
        setInterval(() => 
        fetch(`https://jsonplaceholder.typicode.com/photos`)
        .then((res) => {
            if (res.status >= 400 && res.status < 600) {
                throw new Error('failed fething data');
            }
            return res.json();
        })
        .then((res) => {
            getFiveThings(res);
        })
        .catch((mes) => console.log(mes)), 10000);
    }, []);

    const getFiveThings = (res) => {
        const mas = [];
        for (let i=0; i < 5; i++) {
            mas.push(res[Math.round(Math.random() * res.length)]);
        }
        setGotData(mas);
    }

    console.log(gotData);

    return (
        <>
            <div className={cls.contentCard}>
                {gotData.map((card) => <HeaderContentCard
                    headerContentCardData={card}
                    key={card.id}
                />)}
            </div>
        </>
    )
}
import React, { useEffect, useState } from "react";

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
            getFiveThings(res);
        })
        .catch((mes) => console.log(mes));
    }, []);

    const getFiveThings = (res) => {
        const mas = [];
        for (let i=0; i < 5; i++) {
            mas.push(res[i]);
        }
        setGotData(mas);
    }

    console.log(gotData);

    return (
        <>
            <div>
            </div>
        </>
    )
}
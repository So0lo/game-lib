import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Header } from "../components/Header/Header";
import { Main } from "../components/Main/Main";
import { clearGame } from "../Redux/gamePage/gamePageActions";

export const MainPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(clearGame());
    }, [])
    return (
        <>
            <Header/>
            <Main/>
        </>
    )
};

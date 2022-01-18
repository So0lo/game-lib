import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../components/Header/Header";
import { Main } from "../components/Main/Main";
import { clearGame } from "../Redux/gamePage/gamePageActions";
import { getUserId } from "../Redux/user/userSelectors";
import { initUser } from "../Redux/user/userActions";
import { getBookmarks } from "../Redux/bookmarks/bookmarksSelectors";
import { getUserBookmarks } from "../Redux/bookmarks/bookmarksActions";

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

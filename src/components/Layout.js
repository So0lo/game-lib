import { Logo } from "./Logo/Logo";
import { Footer } from "./Footer/Footer";
import { Outlet } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserId } from "../Redux/user/userSelectors";
import { getUserBookmarks } from "../Redux/bookmarks/bookmarksActions";


export const Layout = () => {
    const userId = useSelector(getUserId);
    const dispatch = useDispatch();

    useEffect(() => {
        if (userId) {
            dispatch(getUserBookmarks(userId));
        }
    }, [userId]);

    return (
        <>
            <Logo/>
            <Outlet/>
            <Footer/>
        </>
    )
};

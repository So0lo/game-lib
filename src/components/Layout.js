import { useState } from "react";
import { HeaderLogo } from "./HeaderLogo/HeaderLogo";
import { Footer } from "./Footer/Footer";
import { Outlet } from "react-router-dom";
import { myContext } from "../hooks/UseContext";

export const Layout = () => {
    const [userName, setUserName] = useState('');

    const createUserName = (name) => {
        setUserName('User: '+ name);
    }

    return (
        <>
            <myContext.Provider value={{
                createUserName,
                userName
            }}>
                <HeaderLogo/>
                <Outlet/>
            </myContext.Provider>
            <Footer/>
        </>
    )
};

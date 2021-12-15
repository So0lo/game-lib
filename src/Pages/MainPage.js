import React, {useState} from "react";
import { myContext } from "../hooks/UseContext";
import { Header } from "../components/Header/Header";
import { Main } from "../components/Main/Main";
import { Footer } from "../components/Footer/Footer";

export const MainPage = () => {
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
                <Header/>
                <Main/>
            </myContext.Provider>
            <Footer/>
        </>
    )
};

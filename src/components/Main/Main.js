import React from "react";
import { MainContent } from "./MainContent/MainContent";
import { MainNav } from "./MainNav/MainNav";
import "./Main.module.css";

export const Main = () => {
    return (
        <>
            <main>
                <MainNav/>
                <MainContent/>
            </main>
        </>
    )
};

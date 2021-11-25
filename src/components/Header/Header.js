import React from "react";
import { HeaderContent } from "./HeaderContent/HeaderContent";
import { HeaderLogo } from "./HeaderLogo/HeaderLogo";

export const Header = () => {
    return (
        <>
            <header>
                <HeaderLogo/>
                <HeaderContent/>
            </header>
        </>
    )
};

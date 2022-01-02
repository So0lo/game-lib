import { Logo } from "./Logo/Logo";
import { Footer } from "./Footer/Footer";
import { Outlet } from "react-router-dom";

export const Layout = () => {
    return (
        <>
            <Logo/>
            <Outlet/>
            <Footer/>
        </>
    )
};

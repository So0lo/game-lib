import React, { useState } from "react";
import user from "../../../img/user.png";
import cls from './HeaderLogo.module.css';

export const HeaderLogo = () => {

    const [reg, setReg] = useState(false);
    
    console.log(reg);

    return (
        <>

            <nav>
                <ul className={cls.headerUl}>
                    <li className={cls.headerLogo}>Game-lib</li>
                    <li><img src={user} alt="user" className={cls.headerUser} onClick={() => setReg(true)}></img></li>
                </ul>
            </nav>
        </>
    )
};
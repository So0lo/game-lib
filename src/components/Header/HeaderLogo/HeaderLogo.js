import React, { useContext, useState } from "react";
import { CreateUser } from "../../../CreateUser/CreateUser";
import { myContext } from "../../../hooks/UseContext";
import user from "../../../img/user.png";
import cls from './HeaderLogo.module.css';

export const HeaderLogo = () => {
    const [reg, setReg] = useState(false);
    const ctx = useContext(myContext);
    
    const changeReg = () => {
        setReg(!reg);
    }

    return (
        <>
            {reg && <CreateUser createUserName={ctx.createUserName} changeReg={changeReg}/>}
            <nav>
                <ul className={cls.headerUl}>
                    <li className={cls.headerLogo}>Game-lib</li>
                    <li className={cls.userName}>{ctx.userName}</li>
                    <li><img src={user} alt="user" className={cls.headerUser} onClick={changeReg}></img></li>
                </ul>
            </nav>
        </>
    )
};
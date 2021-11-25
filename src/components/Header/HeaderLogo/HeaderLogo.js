import React, { useState } from "react";
import { CreateUser } from "../../../CreateUser/CreateUser";
import user from "../../../img/user.png";
import cls from './HeaderLogo.module.css';

export const HeaderLogo = () => {

    const [userName, setUserName] = useState('');
    const [reg, setReg] = useState(false);
    
    const createUserName = (name) => {
        setUserName('User: '+ name);
        changeReg();
    }
 
    const changeReg = () => {
        setReg(!reg);
    }

    return (
        <>
            {reg && <CreateUser createUserName={createUserName} changeReg={changeReg}/>}
            <nav>
                <ul className={cls.headerUl}>
                    <li className={cls.headerLogo}>Game-lib</li>
                    <li className={cls.userName}>{userName}</li>
                    <li><img src={user} alt="user" className={cls.headerUser} onClick={changeReg}></img></li>
                </ul>
            </nav>
        </>
    )
};
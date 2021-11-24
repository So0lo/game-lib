import React from "react";
import cross from "../img/cross.png";
import cls from "./CreateUser.module.css";

export const CreateUser = ({userName, createUserName, changeReg}) => {
    return (
        <>
            <div className={cls.modal}>
                <span className={cls.modalSpan}>Введите Имя</span>
                <img src={cross} alt="CreateUserCross" className={cls.modalCross} onClick={changeReg}/>
                <input type="text" placeholder="Username" className={cls.modalInput}></input>
            </div>
        </>
    )
};
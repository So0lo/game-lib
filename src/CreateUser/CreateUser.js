import React, { useState } from "react";
import cross from "../img/cross.png";
import cls from "./CreateUser.module.css";

export const CreateUser = ({createUserName, changeReg}) => {

    const [inputName, setInputName] = useState('');
    return (
        <>
            <div className={cls.modal}>
                <span className={cls.modalSpan}>Введите Имя</span>
                <img src={cross} alt="CreateUserCross" className={cls.modalCross} onClick={changeReg}/>
                <input
                    type="text"
                    placeholder="Username" 
                    className={cls.modalInput}
                    value={inputName} 
                    onChange={({target: {value}}) => setInputName(value)}
                />
                <button className={cls.modalButton} onClick={() => createUserName(inputName)}>Выбрать</button>
            </div>
        </>
    )
};
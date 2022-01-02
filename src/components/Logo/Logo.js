import userLogoImg from "../../img/user.png";
import cls from './Logo.module.css';
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../Redux/user/userSelectors";
import { userLogin, userLogout } from "../../Redux/user/userActions";

export const Logo = () => {
    const user = useSelector(getUser);
    const dispatch = useDispatch();
    
    const login = () => {
        dispatch(userLogin());
    }

    const logout = () => {
        dispatch(userLogout());
    }

    return (
        <>
            <nav>
                <ul className={cls.logoUl}>
                    <li className={cls.logo}>Game-lib</li>
                    <li>
                        <div className={cls.userInfo}>
                            <p className={cls.userName}>{user ? user.displayName : ''}</p>
                            <img src={user ? user.photoURL : userLogoImg} alt="user" className={cls.headerUser} onClick={user ? logout : login}></img>
                        </div>
                    </li>
                </ul>
            </nav>
        </>
    )
};
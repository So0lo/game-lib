import { Link } from 'react-router-dom';
import cls from './Bookmark.module.css';

export const Bookmark = ({bookmark: {background_image, name, id}}) => {
    return (
            <div className={cls.bookmark}>
                <div className={cls.imgWrapper}>
                    <img src={background_image} alt="imgGame" className={cls.imgGame}/>
                </div>
                <Link to={`/game/${id}`} className={cls.link}>{name}</Link>
            </div>
    )
};
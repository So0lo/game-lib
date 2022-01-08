import { memo } from "react";
import userPhotoDefault from "../../../../../img/user.png";
import cls from './Comment.module.css';

export const Comment = memo(({reddit}) => {
    return (
        <div className={cls.comment}>
            <div className={cls.commentImgWrapper}><img src={reddit.photo ? reddit.photo : userPhotoDefault} alt="user" className={cls.commentImg}/></div>
            <div className={cls.commentTextWrapper}>
                <p className={cls.commentUsername}>{reddit.username.replace(/[/u/]/g, '')}</p>
                <p className={cls.commentText}>{reddit.name}</p>
            </div>
        </div>

    )
});

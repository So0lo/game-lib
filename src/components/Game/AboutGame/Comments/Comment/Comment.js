import { memo } from "react";
import userPhotoDefault from "../../../../../img/user.png";
import cls from './Comment.module.css';

export const Comment = memo(({comment}) => {
    return (
        <div className={cls.comment}>
            <div className={cls.commentImgWrapper}><img src={comment.photo ? comment.photo : userPhotoDefault} alt="user" className={cls.commentImg}/></div>
            <div className={cls.commentTextWrapper}>
                <p className={cls.commentUsername}>{comment.username.replace(/[/u/]/g, '')}</p>
                <p className={cls.commentText}>{comment.name}</p>
            </div>
        </div>

    )
});

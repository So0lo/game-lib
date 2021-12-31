import user from "../../../../img/user.png";
import cls from './Comment.module.css';

export const Comment = ({reddit}) => {
    return (
        <div className={cls.comment}>
            <div className={cls.commentImgWrapper}><img src={user} alt="user" className={cls.commentImg}/></div>
            <div className={cls.commentTextWrapper}>
                <p className={cls.commentUsername}>{reddit.username}</p>
                <p className={cls.commentText}>{reddit.name}</p>
            </div>
        </div>
    )
}
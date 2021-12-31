import { Comment } from './Comment/Comment';
import cls from './Comments.module.css';

export const Comments = ({reddit}) => {
    return (
        <div className={cls.commentsWrapper}>
            <h3 className={cls.commentsTitle}>Comments</h3>
            {Object.keys(reddit).length ? reddit.map(reddit => <Comment reddit={reddit} key={reddit.id}/>) : true}
        </div>
    )
}
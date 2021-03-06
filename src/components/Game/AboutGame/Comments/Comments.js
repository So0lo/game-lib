import { useState } from 'react';
import { Comment } from './Comment/Comment';
import { getUser } from '../../../../Redux/user/userSelectors';
import cls from './Comments.module.css';
import { useSelector } from 'react-redux';

export const Comments = ({comments, updateComments}) => {
    const [inputText, setInputText] = useState('');
    const user = useSelector(getUser);
    return (
        <div className={cls.commentsWrapper}>
            <h3 className={cls.commentsTitle}>Comments</h3>
            { user ? 
            <div className={cls.enterComment}>
                <textarea
                    className={cls.enterText}
                    type="text"
                    placeholder="Enter your comment"
                    value={inputText}
                    onChange={({target: {value}}) => setInputText(value)}
                />
            <button 
                onClick={() => {updateComments(`${user.uid}${Date.now()}`, inputText, user.displayName, user.photoURL); setInputText('')}} 
                className={cls.button}
            >
                Submit
            </button> 
            </div> : true}
            {comments.length ? comments.map(comment => <Comment comment={comment} key={comment.id}/>) : true}
        </div>
    )
};

import { useState } from 'react';
import { Comment } from './Comment/Comment';
import { getUser } from '../../../Redux/user/userSelectors';
import cls from './Comments.module.css';
import { useSelector } from 'react-redux';

export const Comments = ({reddit, updateComments}) => {
    const [inputText, setInputText] = useState('');
    const user = useSelector(getUser);
    let date = new Date();
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
                onClick={() => {updateComments(`${user.uid}${date}`, inputText, user.displayName); setInputText('')}} 
                className={cls.button}
            >
                Submit
            </button> 
            </div> : true}
            {Object.keys(reddit).length ? reddit.map(reddit => <Comment reddit={reddit} key={reddit.id}/>) : true}
        </div>
    )
};

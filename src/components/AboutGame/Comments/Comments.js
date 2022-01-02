import { useState } from 'react';
import { Comment } from './Comment/Comment';
import cls from './Comments.module.css';

export const Comments = ({reddit, updateComments}) => {
    const [inputText, setInputText] = useState('');
    return (
        <div className={cls.commentsWrapper}>
            <h3 className={cls.commentsTitle}>Comments</h3>
            <div className={cls.enterComment}>
                <textarea
                    className={cls.enterText}
                    type="text"
                    placeholder="Enter your comment"
                    value={inputText}
                    onChange={({target: {value}}) => setInputText(value)}
                />
                <button onClick={() => {updateComments(inputText); setInputText('')}} className={cls.button}>Submit</button>
            </div>
            {Object.keys(reddit).length ? reddit.map(reddit => <Comment reddit={reddit} key={reddit.id}/>) : true}
        </div>
    )
};

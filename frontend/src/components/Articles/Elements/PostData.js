import React from 'react';
import '../Articles.css';

const PostData = (props) => {
    return (
        <div className='ArticlePostData'>
            <div>
                Date: 
                <span>{props.data.date}</span>
            </div>
            <div>
                Author: 
                <span>
                    {props.data.author}
                </span>
            </div>
        </div>
    );
}

export default PostData;
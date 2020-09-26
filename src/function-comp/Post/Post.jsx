import React from 'react';

const Post = (props) => {
    return(
        <div className="post-wrapper">
            <div className="img-thumb">
                <img src="https://placeimg.com/640/480/animals" alt="thumb"></img>
                <p className="time">{props.time}</p>
            </div>
            <div className="content">
                <p className="title">{props.title}</p>
                <p className="desc">{props.desc}</p>
            </div>
        </div>
    )
}

export default Post;
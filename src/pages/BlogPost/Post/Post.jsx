import React from 'react';

const Post = (props) => {
    return(
        <div className="post-wrapper">
            <div className="img-thumb">
                <img src="https://placeimg.com/640/480/animals" alt="thumb"></img>
            </div>
            <div className="content">
                <p className="title" onClick={() => props.goDetail(props.data.id)}>{props.data.title}</p>
                <p className="desc">{props.data.body}</p>
                 <button className="update"
                onClick={ () => props.OnUpdate(props.data)}
                >Update</button>
                <button className="remove"
                onClick={ () => props.OnRemove(props.data.id)}
                >Delete</button>
               
            </div>
        </div>
    )
}

export default Post;
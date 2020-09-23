import React from 'react';

const Post = (props) => {
    return(
        <div className="post-wrapper">
            <div className="img-thumb">
                <img src="https://placeimg.com/640/480/animals" alt="thumb"></img>
            </div>
            <div className="content">
                <p className="title">{props.data.title}</p>
                <p className="desc">{props.data.body}</p>
                <button className="update" onClick={ () => props.onUpdate(props.data)}>Update</button>
                <button className="remove" onClick={ () => props.onRemove(props.data.id)}>Hapus</button>
            </div>
            
        </div>
    )
}

export default Post;
import React from 'react';
import './YoutubeComp.css';



const YoutubeComp = (props) => {
    return (
        <div className="youtube-wrapper">
        <hr />
                <p>Youtube Component Component</p>
            <hr />
            <div className="img-thumb">
                <img src="https://placeimg.com/640/480/animals" alt="thumb"></img>
                <p className="time">{props.time}</p>
            </div>
            
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
   
}
YoutubeComp.defaultProps = {
        time:'00.00',
        title:'this is a title',
        desc:'this is a description'
}
export default YoutubeComp;

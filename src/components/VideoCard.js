import './VideoCard.css';
import React from 'react';

const VideoCard = (props) => {
    // return (<iframe width="420" height="315"
    //     src={`https://www.youtube.com/embed/${props.src.id.videoId}`}>
    // </iframe>);
    
    return (
        <div onClick={() => props.onVideoSelect(props.src)} className="video-item item">
            {/* <div className="ui segment">
             */}
             
             <div style={{display: 'flex',alignItems: 'center'}} className="ui segment">
                 
            <img alt={props.src.snippet.title} className="image" src={props.src.snippet.thumbnails.default.url}/>
            
            <div style={{marginLeft:'1rem'}}>

                <a href="#">{(props.src.snippet.title.length > 70) ? `${props.src.snippet.title.substring(0,65)}...`: `${props.src.snippet.title}`}</a>
                <div className="meta">
                {/* <img src ={props.src.snippet.thumbnails.default.url} classNameName="ui image avatar"/> */}
                <span className="date"></span>
                </div>
                
                
            </div>
            
            </div>
            {/* <div className="content">
                {props.src.snippet.title}
            </div> */}
        </div>
    )
}

export default VideoCard;
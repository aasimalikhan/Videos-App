import React from 'react';

const VideoDetail =(props) => {
    if(!props.videoLink)
    {
        return <div>Search Anything...</div>;
    }
    return (
        <div className="ui segment">
        <div className="ui embed">
        <iframe title="video" width="420" height="315"
            src={`https://www.youtube.com/embed/${props.videoLink.id.videoId}`}>
        </iframe>
        </div>
        <h4>{props.videoLink.snippet.title}</h4>
        <p>{props.videoLink.snippet.description}</p>
        </div>
    )
}

export default VideoDetail;
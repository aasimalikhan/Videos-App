import React from 'react';
import VideoCard from './VideoCard';

const VideoList =(props) => {
    const vids = props.vids.map(data => {
        return <VideoCard key = {data.id.videoId} onVideoSelect={props.onVideoSelect} src={data}/>
    });
    return (<div style={{padding: '1rem', display: 'flex',flexDirection:'column', gridGap: '1rem'}} >
        {vids}
    </div>);
}

export default VideoList;
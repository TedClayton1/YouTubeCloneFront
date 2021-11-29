import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import RelatedVideos from '../RelatedVideos/RelatedVideos';

function VideoPlayer(props) {
    const[relatedVids,SetRelatedVids]=useState([])

    //useEffect will determine the first thing to be ran when the page renders
    useEffect(()=>{
        getRelatedVids()
    },[props.videoId])

    const getRelatedVids = async()=>{
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${props.videoId}&key=${props.apiKey}&part=snippet&type=video`)
        console.log('related:', response.data.items)
        SetRelatedVids(response.data.items)
    }
    

    return (
        <div>
            <iframe
            title="videoplayer"
            id="player"
            type="text/html"
            width="640" height="360"
            src={`https://www.youtube.com/embed/${props.videoId}`}
            alt="No Alt Text"
            frameBorder="0px" 
            ></iframe>
            <RelatedVideos videos = {relatedVids}/>
        </div>
    )
}

export default VideoPlayer;





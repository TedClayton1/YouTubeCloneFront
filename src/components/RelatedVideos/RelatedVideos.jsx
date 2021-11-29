import React from 'react';
import './RelatedVideos.css';





function RelatedVideos (props){
   
    return(
    <div>
        {props.videos.map((element)=><><img src={element.snippet.thumbnails.default.url}/><p>{element.id.videoId}</p></>)}
   
    


</div>
    )
}

export default RelatedVideos;
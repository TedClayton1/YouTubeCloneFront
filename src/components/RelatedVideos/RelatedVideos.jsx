import React from 'react';
import './RelatedVideos.css';





function RelatedVideos (props){
   
    return(
    <div>
        {props.videos.map((element)=> !element?null:<><img src={element.snippet.thumbnails.default.url}/><p>{element.snippet.title}</p><p>{element.snippet.description}</p></>)}
        
        
</div>
    )
}

export default RelatedVideos;   
    



import React from 'react';
import './SearchedVideos.css';





function SearchedVideos (props){
   
    return(
    <div>
        {props.videos.map((element)=><><img src={element.snippet.thumbnails.default.url}/><p>{}</p><p>{}</p></>)}
        
    

</div>
    )
}

export default SearchedVideos;
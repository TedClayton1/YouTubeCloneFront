import React from 'react';


function VideoPlayer(props) {
    let url = "https://www.youtube.com/watch?v=SCXX91QnZSg"
    return (
        <div>
            <iframe
            title="videoplayer"
            id="player"
            type="text/html"
            width="1100" height="750"
            src="https://www.youtube.com/embed/SCXX91QnZSg"
            alt="No Alt Text"
            frameBorder="10px" 
            ></iframe>
        </div>
    )
}

export default VideoPlayer;





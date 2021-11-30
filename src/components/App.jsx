import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header/Header';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import axios from 'axios';


// make a handleChange function in App.jsx
// make a handleSubmit function in App.jsx could take the string that the user search for and pass it into the "this.getSearchResults" function
// getSearchResults(search) search is the value we set the input to in "Header"
// pass them into the "header" example <Header handleChange={this.handleChange} handleSubmit={this.handleSubmit} />

const App = () => {
    const [vidTitle, setVidTitle] = useState("testing adele")
    
    const [description, setDescription] = useState("testing adele descr")
    const [video, setVideo] = useState("U3ASj1L6_sY")
    const [searchResults, setSearchResults] = useState([])
    const [apiKey, setapiKey] = useState("AIzaSyBI_ssNgcWQBWl5BFPBVN9CEcDu0XgZRoA")






    const getSearchResults = async (searchTerm) => {
        let response = await axios.get(`https:www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&type=video&maxResults=10&key=${apiKey}`)
        console.log(response.data)
        
        setVidTitle(response.data.items[0].snippet.title)
        setVideo(response.data.items[0].id.videoId)
        setSearchResults(response.data.items)
        setDescription(response.data.items[0].snippet.description)
    }

    // getRelatedVideos = async (searchTerm) => {
    //     let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId={VIDEO ID
    //     HERE}&type=video&key={API KEY HERE}`)
    //     console.log(response.data)
    //     let tempVideoArray = response.data.items[0].id.videoId 
    //     this.setState({
    //         video: tempVideoArray
    //     })
    // }


    return (
        <div className="container-fluid">
            <Header searchFunction={getSearchResults} />
            <VideoPlayer vidTitle={vidTitle} videoId={video} apiKey={apiKey} description={description} />



        </div>
    )

}

export default App;


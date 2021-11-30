import React,  { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import axios from 'axios';


// make a handleChange function in App.jsx
// make a handleSubmit function in App.jsx could take the string that the user search for and pass it into the "this.getSearchResults" function
// getSearchResults(search) search is the value we set the input to in "Header"
// pass them into the "header" example <Header handleChange={this.handleChange} handleSubmit={this.handleSubmit} />

class App extends Component{
    constructor(props){
        super(props);
        this.state= {
            title: 'U3ASj1L6_sY',
            description: 'U3ASj1L6_sY',
            video: 'U3ASj1L6_sY',
            searchResults: '',
            apiKey: 'AIzaSyBFNajNedKfp2H-J9kdEbm2ia_3-kcKQRk',
        };
    }
 


    getSearchResults = async (searchTerm) => {
        let response = await axios.get(`https:www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&type=video&maxResults=5&key=${this.state.apiKey}`)
        console.log(response.data)
        let tempVideoArray = response.data.items[0].id.videoId 
        this.setState({
            video: tempVideoArray
        })
    }

    getRelatedVideos = async (searchTerm) => {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId={VIDEO ID
        HERE}&type=video&key={API KEY HERE}`)
        console.log(response.data)
        let tempVideoArray = response.data.items[0].id.videoId 
        this.setState({
            video: tempVideoArray
        })
    }

    render(){
        return(
            <div className="container-fluid">
                <Header searchFunction ={this.getSearchResults} />
                <VideoPlayer videoId={this.state.video} apiKey={this.state.apiKey} title={this.state.title} description={this.state.description}/>
                
            
               
            </div>
        )
    }    
}

export default App;
                

import React,  { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import axios from 'axios';

// register on google site to get api key
// copy the link from the
// make a handleChange funciton in App.jsx
// make a handleSubmit funciton in App.jsx could take the string that the user search for and pass it into the "this.getSearchResults" function
// getSearchResults(search) search is the value we set the input to in "Header"
// pass them into the "header" example <Header handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
class App extends Component{
    constructor(props){
        super(props);
        this.state= {
            searchResults: [],
            searchTerm: "",
            apiKey: ``,
        };
    }

    getSearchResults = async (searchTerm) => {
        let response = await axios.get(`https:www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&type=video&maxResults=5&key=${this.state.key}`)
        let tempVideoArray = response.data.items 
        this.setState({
            searchResults: tempVideoArray
        })
    }
    render(){
        return(
            <div className="container-fluid">
                <Header />
                <VideoPlayer />
            </div>
        )
    }    
}

export default App;
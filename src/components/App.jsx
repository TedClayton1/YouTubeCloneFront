import React,  { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import axios from 'axios';
import SearchBar from './SearchBar/SearchBar';

// setup post man with apikey
// make a handleChange function in App.jsx
// make a handleSubmit function in App.jsx could take the string that the user search for and pass it into the "this.getSearchResults" function
// getSearchResults(search) search is the value we set the input to in "Header"
// pass them into the "header" example <Header handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
class App extends Component{
    constructor(props){
        super(props);
        this.state= {
            searchResults: [],
            apiKey: 'AIzaSyBishejgCVBIeKnKKDganTv5dYVjB3HwCY',
        };
    }

    getSearchResults = async (searchTerm) => {
        let response = await axios.get(`https:www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&type=video&maxResults=5&key=${this.state.apiKey}`)
        console.log(response.data)
        let tempVideoArray = response.data.items 
        this.setState({
            searchResults: tempVideoArray
        })
    }
    render(){
        return(
            <div className="container-fluid">
                <Header searchFunction ={this.getSearchResults} />
                <VideoPlayer />
                <SearchBar />
            </div>
        )
    }    
}

export default App;
                

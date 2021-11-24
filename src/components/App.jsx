import React,  { Component } from 'react';
import './App.css';
import Header from './Header/Header';

class App extends Component{
    constructor(props){
        super(props);
        this.state= {};
    }
    render(){
        return(
            <div className="container-fluid">
                <Header />
            </div>
        )
    }    
}

export default App;
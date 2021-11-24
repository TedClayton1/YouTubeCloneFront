import React from 'react';
import './Header.css';


function Header(props) {

    
    return(
        <div className="row row-space">
            <div className="col-md-12" style={{padding:0}}>
                <div className="header-nav">
                    <h1> YouTube Music Library </h1>
                    <div className="searchBar">
                    <input className="searchInput" type='text' name='search' value ="search" onChange={props.handleChange}/>
                    <button className="searchButton" type= 'submit'  onClick={props.handleSubmit}>Search</button>
                 </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
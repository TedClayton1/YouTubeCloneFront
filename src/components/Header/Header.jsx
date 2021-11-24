import React from 'react';
import './Header.css';
import SearchBar from '../SearchBar/SearchBar';

function Header(props) {
    return(
        <div className="row row-space">
            <div className="col-md-12" style={{padding:0}}>
                <div className="header-nav">
                    <h1> YouTube Music Library </h1>
                    <SearchBar />
                </div>
            </div>
        </div>
    )
}

export default Header;
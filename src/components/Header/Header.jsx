import React from 'react';
import './Header.css';

function Header(props) {
    return(
        <div className="row row-space">
            <div className="col-md-12" style={{padding:0}}>
                <div className="header-nav">
                    <h1> YouTube Music Library </h1>
                </div>
            </div>
        </div>
    )
}

export default Header;
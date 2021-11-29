import React, { useState } from 'react';
import './Header.css';

function Header(props) {

    const [searchTerm, setSearchTerm] = useState("");



    return(
        
        <div className="row row-space">
            <div className="col-md-12" style={{padding:0}}>
                <div className="header-nav">
                    <h1> YouTube Clone</h1>
                    <div className="searchBar">
                        <form onSubmit={(e)=>{e.preventDefault(); props.searchFunction(searchTerm)}}>
                            <input className="searchInput" type='text' name='search' onChange={(e) => setSearchTerm(e.target.value)}/>
                            <button className="searchButton" type= 'submit'>Search...</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
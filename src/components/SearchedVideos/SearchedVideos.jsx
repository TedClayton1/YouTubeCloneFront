import React from 'react';
import './SearchedVideos.css';





function SearchedVideos (props){
   
    return(
    <div >
    <body className="searchbody">
   
  
   
  
    <table className="searchtable" >
        <tr className="searchheader" valign="top">
            <th>Search Results</th>
            
        </tr>
  
        <tr className="searchvid1" valign="bottom">
            <td></td>
            
        </tr>
        <tr className="searchvid2" valign="bottom">
            <td>Video 2</td>
            
        </tr>
        
  
        <tr className="searchvid3" valign="middle">
            <td>Video 3</td>
            
        </tr>
        <tr className="searchvid4" valign="middle">
            <td>Video 4</td>
            
        </tr>
        <tr className="searchvid5" valign="middle">
            <td>Video 5</td>
            
        </tr>
    </table>
</body>

</div>
    )
}

export default SearchedVideos;
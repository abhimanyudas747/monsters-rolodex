import React from 'react'

import './search-box.component.css'

const SearchBox = props => 
(
    <div>
        <input class='search' type="search" placeholder={props.placeholder} onChange ={e => {
            props.changestate(e.target.value);
        
        }
        } 
        />

     </div>


)

export default SearchBox;
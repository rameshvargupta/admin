import React from 'react'
import './SearchBox.css';
import SearchIcon from '@mui/icons-material/Search';
export default function SearchBox() {
    return (
        <div className='searchBox position-relative d-flex align-items-center'>
          <span className='searchIcon'><SearchIcon  /></span>  
            <input type='text' placeholder='Search Here..' />
        </div>
    )
}

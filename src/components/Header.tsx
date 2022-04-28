import React from 'react'
import {Link} from 'react-router-dom'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Header = () => {
  return (
    <div>
        <header className="App-header">
         <h1 className = "title">Wine O'Clock </h1>

            <nav>
                <Link to="/"><HomeOutlinedIcon/>Home</Link>
                <Link to="/about"><PersonOutlinedIcon/>About</Link>
                <Link to="/newlist"><ListAltOutlinedIcon/>New List</Link>
                <SearchOutlinedIcon/>
                
            </nav>
        </header>
    </div>
  )
}

export default Header
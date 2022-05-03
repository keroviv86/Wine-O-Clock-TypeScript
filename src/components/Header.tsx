import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import WineBarIcon from '@mui/icons-material/WineBar';

const Header = () => {
  const[search, setSearch] = useState<boolean>(false)

  function onSearch(){
    setSearch((prevSearch)=>!prevSearch)
    console.log(search)
  }
  return (
    <div>
        <header className="App-header">
         <h1 className = "title">Wine O'Clock </h1>

            <nav>
                <Link to="/"><HomeOutlinedIcon/>Home</Link>
                <Link to="/about"><PersonOutlinedIcon/>About</Link>
                <Link to="/winelist"><WineBarIcon/>Wine List</Link>
                <Link to="/newlist"><ListAltOutlinedIcon/>New List</Link>
                <SearchOutlinedIcon onClick={onSearch}/>
                {search ?
                <input type="text" placeholder="search"></input> :
                <></>
                }
                
                
            </nav>
        </header>
    </div>
  )
}

export default Header
import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import WineBarIcon from '@mui/icons-material/WineBar';


interface Props {
  handleSearch: (input:string) => void
}
const Header: React.FC<Props> = ({handleSearch}) => {
  const[search, setSearch] = useState<boolean>(false)

  function onSearch(){
    setSearch((prevSearch)=>!prevSearch)
  }

  // function onHandleSearch(e){
  //   console.log(e.target.value)

  // }
  return (
    <div>
        <header className="App-header">
         <h1 className = "title">Wine O'Clock </h1>

            <nav>
                <Link to="/about"><PersonOutlinedIcon/>About</Link>
                <Link to="/"><HomeOutlinedIcon/>Home</Link>
                <Link to="/winelist"><WineBarIcon/>Wine List</Link>
                <Link to="/studylist"><ListAltOutlinedIcon/>Study List</Link>
                <SearchOutlinedIcon onClick={onSearch}/>
                {search ?
                <input type="text" placeholder="search" onChange={(e)=>handleSearch(e.target.value)}></input> :
                <></>
                }
                
                
            </nav>
        </header>
    </div>
  )
}

export default Header
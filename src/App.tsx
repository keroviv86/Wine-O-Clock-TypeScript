import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About'
import Home from './components/Home'
import StudyList from './components/StudyList'
import WineList from './components/WineList'
import { Routes, Route } from "react-router-dom";
import { WineData } from './model';


const App: React.FC = () => {

  const [data, setData] = useState<WineData[]>([])
  const [search, setSearch] = useState<string>("")
  // SwipeButton Functionality
  const [position, setPosition]= useState<number>(0)

  useEffect(()=> {
    fetch(" http://localhost:3000/wines")
    .then(res=>res.json())
    .then(data => setData(data))
  }, [])

  function handleSubmit(newWineCardObj:any){
    setData((prevData)=>[...prevData, newWineCardObj])
  }

  function handleSearch(input:string){
    setSearch(input)
  }

  function handleFiltering(){
   const filteredItems = data.filter((wine)=> (
     wine.name.toLowerCase().includes(search.toLowerCase())
   )) 
   return filteredItems
  }

  const displayArr = [data[position]]

  function handleCheckCard() {
    setPosition((prevPosition)=>(prevPosition+1) % data.length)
  }

  return (
    <div className="App">
      <Header handleSearch={handleSearch}/>
        <Routes>
          <Route path="/" element={<Home 
            filteredItems={handleFiltering()}
           displayArr={displayArr}
           handleCheckCard={handleCheckCard}

           />}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/winelist" element={<WineList filteredItems={handleFiltering()} handleSubmit={handleSubmit}/>}/>
          <Route path="/studylist" element={<StudyList/>}/>
        </Routes>
    </div>
  );
}

export default App;

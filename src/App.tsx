import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About'
import Home from './components/Home'
import NewList from './components/NewList'
import WineList from './components/WineList'
import { Routes, Route } from "react-router-dom";
import { WineData } from './model';


const App: React.FC = () => {

  const [data, setData] = useState<WineData[]>([])
  const [search, setSearch] = useState<string>("")
  console.log(data)
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

  return (
    <div className="App">
      <Header handleSearch={handleSearch}/>
        <Routes>
          <Route path="/" element={<Home filteredItems={handleFiltering()}/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/winelist" element={<WineList filteredItems={handleFiltering()} handleSubmit={handleSubmit}/>}/>
          <Route path="/newlist" element={<NewList/>}/>
        </Routes>
    </div>
  );
}

export default App;

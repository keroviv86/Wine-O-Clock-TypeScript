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

  useEffect(()=> {
    fetch(" http://localhost:3000/wines")
    .then(res=>res.json())
    .then(data => setData(data))
  }, [])

  function handleSubmit(newWineCardObj:any){
    setData((prevData)=>[...prevData, newWineCardObj])
  }

  

  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/winelist" element={<WineList data={data} handleSubmit={handleSubmit}/>}/>
          <Route path="/newlist" element={<NewList/>}/>
        </Routes>
    </div>
  );
}

export default App;

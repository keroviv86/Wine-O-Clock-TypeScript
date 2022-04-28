import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About'
import Home from './components/Home'
import NewList from './components/NewList'
import { Routes, Route } from "react-router-dom";


const App: React.FC = () => {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/newlist" element={<NewList/>}/>
        </Routes>
    </div>
  );
}

export default App;

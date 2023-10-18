import React from 'react';
import './NewDesign.css';
import LeftSide from './LeftSide';
//import RightSide from './RightSide';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePageLeftSide from "./HomePageLeftSide"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePageLeftSide/>}></Route>
      <Route path='/left' element ={<LeftSide/>}></Route>
    </Routes>
    </BrowserRouter>
    /*<div className='app'>
      <LeftSide/>
      <RightSide/>
    </div>*/
     
  )
}
export default App;

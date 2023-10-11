import React from 'react';
import './NewDesign.css';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
//import { BrowserRouter, Routes, Route } from "react-router-dom";
//import HomePageRightSide from './HomePageLeftSidePage';

function App() {
  return (
    /*<BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePageRightSide/>}></Route>
      <Route path='/left' element ={<LeftSide/>}></Route>

    </Routes>
    </BrowserRouter>*/
    <div className='app'>
      <LeftSide/>
      <RightSide/>
    </div>
     
  )
}
export default App;

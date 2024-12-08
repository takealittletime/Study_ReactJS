import { useState } from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import './App.css'

import Home from './pages/Home';
import Join from './pages/Join';
import Login from './pages/Login';

import Button from './components/Button'

function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path='/' element= {<Home/>}/>
          <Route path='/join' element= {<Join/>}/>
          <Route path='/login' element= {<Login/>}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

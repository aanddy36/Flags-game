import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from './pages/Home'
import { Flags } from './pages/Flags';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/:continent' element={<Flags />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

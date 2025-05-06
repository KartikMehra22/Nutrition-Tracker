import './App.css'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import Notfound from './components/Notfound'
import Track from './components/Track'
import React from "react"

import Header from './components/header'

function App() {
  

  return (
    <>
    
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/track' element={<Track/>}/>
      <Route path='*' element={<Notfound/>}/>
    </Routes>
    
    </BrowserRouter>

    </>
  )
}

export default App

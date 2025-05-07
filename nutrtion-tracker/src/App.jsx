import './App.css'
import {createBrowserRouter,RouterProvider} from 'react-router'
import Register from './components/Register'
import Login from './components/Login'
import Notfound from './components/Notfound'
import Track from './components/Track'
import React from "react"

import Home from './routes/Home'
import Add from "./routes/Add"
import Blogs from "./routes/Blogs"
import User from './routes/User'
import Sign from './routes/Sign'

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/add",
      element: <Add/>
    },
    {
      path: "/blogs",
      element: <Blogs/>
    },
    {
      path: "/user",
      element: <User/>
    },
    {
      path: "/login",
      element: <Sign/>
    }
  ])

  return (
    <>
    
    <RouterProvider router={route}/>

    </>
  )
}

export default App

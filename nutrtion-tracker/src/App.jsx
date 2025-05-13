// App.jsx
import './App.css';
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import Home from './routes/Home';
import Add from './routes/Add';
import Blogs from './routes/Blogs';
import User from './routes/User';
import Sign from './routes/Sign';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/add',
    element: <Add />
  },
  {
    path: '/blogs',
    element: <Blogs />
  },
  {
    path: '/user',
    element: <User />
  },
  {
    path: '/login',
    element: <Sign />
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;


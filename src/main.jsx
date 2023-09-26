import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Donations from './components/Donations/Donations';
import Stats from './components/Stats/Stats';
import Details from './components/Details/Details';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:()=>fetch('categories.json')
      },
      {
        path:"/donations",
        element:<Donations></Donations>
      },
      {
        path:"/stats",
        element:<Stats></Stats>
      },
      {
        path:"/details/:id",
        element:<Details></Details>,
        loader:()=>fetch('/public/categories.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

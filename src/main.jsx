import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from "./components/home.jsx"
import Feature from "./components/feature"
import Track from "./components/track"
import Contact from "./components/contact"
import Alerts from "./components/alerts"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
const router=createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {
        path:"",
        element:<Home />
      },
      {
        path:"feature",
        element:<Feature />
      },
      {
        path:"track",
        element:<Track />
      },
      {
        path:"contact",
        element:<Contact />
      },
      {
        path:"alerts",
        element:<Alerts />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

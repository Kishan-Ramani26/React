import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './assets/Layout/Layout.jsx'
import About from './assets/About/About.jsx'
import Contect from './assets/Contect/Contect.jsx'
import Home from './assets/Home/Home.jsx'
import Gtihub from './assets/Github/Gtihub.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    children:[
      {
        path:"",
        element:<Home />
      },
      {
        path:"about",
        element:<About />
      },
      {
        path:"contect",
        element:<Contect />
      },
      {
        path:"Github",
        element:<Gtihub />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
    
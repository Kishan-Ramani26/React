import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../Components/Home.jsx'
import About from '../Components/About.jsx'
import Content from '../Components/Content.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    Component: <Home />,
    children: [
      {
        path: "About",
        Component:<About />
      },
      {
        path:"Content",
        Component:<Content />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

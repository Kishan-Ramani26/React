import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './componets/Home/Home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './Layout.jsx'
import About from './componets/About/About.jsx'
import Contact from './componets/Contect/Contect.jsx'
import { User } from './componets/User/User.jsx'
import { Github } from './componets/GitHub/Github.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path:"about",
        element:<About />
      },
      {
        path:"contect",
        element:<Contact />
      },
      {
        path:"user/:userid",
        element:<User />
      },
      {
        path:"github",
        element:<Github />
      }
    ]
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

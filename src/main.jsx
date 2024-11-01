import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact.jsx'
import Error from './components/Error.jsx'






const appRouter = createBrowserRouter([
    {
      path:'/',
      element:<App/>,
      errorElement:<Error/>
    },
    {
      path:'/about',
      element:<About/>,
    },
    {
        path:'/contact',
    element:<Contact/>,
    },
  ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)

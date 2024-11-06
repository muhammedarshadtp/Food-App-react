import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider ,Outlet} from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact.jsx'
import Error from './components/Error.jsx'
import Body from './components/Body.jsx'
import RestaurantMenu from './components/RestaurantMenu.jsx'
import Cart from './components/Cart.jsx'






const appRouter = createBrowserRouter([
    {
      path:'/',
      element:<App/>,
      children:[
        {
            path:'/',
            element:<Body/>,
          },
            {
                path:'/about',
                element:<About/>,
              },
              {
                  path:'/contact',
              element:<Contact/>,
              },
              {
                path:'/restaurant/:id',
            element:<RestaurantMenu/>,
            },
            {
              path:'/cart',
          element:<Cart/>,
          },

        
      ],
      errorElement:<Error/>
    },
    
  ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)

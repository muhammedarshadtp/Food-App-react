import { StrictMode, Suspense, lazy } from 'react'
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
// import Grocery from './components/Grocery.jsx'



const Grocery = lazy(()=>(import('./components/Grocery.jsx')))


const appRouter = createBrowserRouter([
    {
      path:'/Food-App-react/',
      element:<App/>,
      children:[
        {
            path:'/Food-App-react/',
            element:<Body/>,
          },
            {
                path:'/Food-App-react/about',
                element:<About/>,
              },
              {
                  path:'/Food-App-react/contact',
              element:<Contact/>,
              },
              {
                path:'/Food-App-react/restaurant/:id',
            element:<RestaurantMenu/>,
            },
            {
              path:'/Food-App-react/cart',
          element:<Cart/>,
          },
          {
            path:'/Food-App-react/grocery',
        element:<Suspense fallback={<div>Loading...</div>}>
          <Grocery/>
        </Suspense>  ,
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

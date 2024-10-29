import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import MainContent from './components/MainContent/MainContent';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
     { path: "/",
      loader: ()=> fetch("https://www.themealdb.com/api/json/v1/1/categories.php"),
      element: <MainContent></MainContent>
    },
    
    ]
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

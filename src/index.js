import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Aboutus from './pages/Aboutus';
import {createBrowserRouter ,RouterProvider} from 'react-router-dom'



const root = ReactDOM.createRoot(document.getElementById('root'));
  let allrouter=createBrowserRouter(
    [
      {
        path:'/',
        element:<Home/>
      },{
        path:'/education',
        element:<Education/>
      },
      {
        path:'/skills',
        element:<Skills/>
      },
      {
        path:'/about-us',
        element:<Aboutus/>
      }
    ]
  )
   
root.render(

  <React.StrictMode>
    <RouterProvider router={allrouter}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

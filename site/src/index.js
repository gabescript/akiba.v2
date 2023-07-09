import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import './assets/css/main.css';

import "bootstrap-icons/font/bootstrap-icons.min.css";

//Import dos contextos
import { ApiAddressProvider } from './contexts/ApiAddress'

//Import das páginas privadas
import Login from './interfaces/private/login/Login';
import Sys from './interfaces/private/sys/Sys';
import Dashboard from './interfaces/private/dashboard/Dashboard';

const PrivateRoutes=(props)=>{
    const auth = sessionStorage.getItem('Akiba login status');
    if(auth === "true"){
        return props.element
    }else{
        return <Navigate to="/painel" replace/>
    }
}

const routes = [
    {
        path: 'painel',
        element: <Login/>
    },
    {
        path: 'painel',
        element: <PrivateRoutes element={<Sys/>}/>,
        children: [
            {
                path: 'dashboard',
                element: <Dashboard/>
            }
        ]
    },
]

const router = createBrowserRouter(routes)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ApiAddressProvider>
      <RouterProvider router={router}/>
    </ApiAddressProvider>
);


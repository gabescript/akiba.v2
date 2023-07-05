import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './assets/css/main.css';

//Import dos contextos
import { ApiAddressProvider } from './contexts/ApiAddress'

//Import das páginas privadas
import Login from './interfaces/private/login/Login';

const routes = [
    {
        path: '/painel',
        element: <Login/>,
    }
]

const router = createBrowserRouter(routes)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ApiAddressProvider>
      <RouterProvider router={router}/>
    </ApiAddressProvider>
);


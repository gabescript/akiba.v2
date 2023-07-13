import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//Importação das páginas privadas
import Login from '../views/private/login/Login'

export default function Routes(){
    const routes = [
        {
            path: 'painel',
            element: <Login/>
        }
    ]

    const router = createBrowserRouter(routes)

    return <RouterProvider router={router}/>
}
import { createBrowserRouter } from 'react-router-dom'
import Layout from '@/pages/Layout'
import Login from '@/pages/Login'

const GlobalRouter = createBrowserRouter([
    {
        path: '/layout',
        element: <Layout />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '*',
        element: <div>404</div>,
    },
]);


export default GlobalRouter


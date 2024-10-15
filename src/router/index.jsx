import { createBrowserRouter } from 'react-router-dom'
import Layout from '@/pages/Layout'
import Login from '@/pages/Login'
import { AuthInterceptor } from '@/components/AuthInterceptor'

const GlobalRouter = createBrowserRouter([
    {
        path: '/layout',
        element: <AuthInterceptor> <Layout /> </AuthInterceptor>,
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


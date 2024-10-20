import { createBrowserRouter } from 'react-router-dom'
import GlobalLayout from '@/pages/Layout'
import Login from '@/pages/Login'
import Home from '@/pages/Home'
import Article from '@/pages/Article'
import Publish from '@/pages/Publish'
import { AuthInterceptor } from '@/components/AuthInterceptor'

const GlobalRouter = createBrowserRouter([
    {
        path: '/',
        element: <AuthInterceptor> <GlobalLayout /> </AuthInterceptor>,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'article',
                element: <Article />,
            },
            {
                path: 'publish',
                element: <Publish />,
            }
        ],
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '*',
        element: <div>404</div>,
    }
]);


export default GlobalRouter


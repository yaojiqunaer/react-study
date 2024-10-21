import { createBrowserRouter } from 'react-router-dom'
import GlobalLayout from '@/pages/Layout'
import Login from '@/pages/Login'
import { AuthInterceptor } from '@/components/AuthInterceptor'
import { lazy, Suspense } from 'react'

const Home = lazy(() => import('@/pages/Home'))
const Article = lazy(() => import('@/pages/Article'))
const Publish = lazy(() => import('@/pages/Publish'))
const loading = <div>Loading...</div>

const GlobalRouter = createBrowserRouter([
    {
        path: '/',
        element: <AuthInterceptor> <GlobalLayout /> </AuthInterceptor>,
        children: [
            {
                index: true,
                element: <Suspense fallback={loading}><Home /></Suspense>,
            },
            {
                path: 'article',
                element: <Suspense fallback={loading}><Article /></Suspense>,
            },
            {
                path: 'publish',
                element: <Suspense fallback={loading}><Publish /></Suspense>,
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


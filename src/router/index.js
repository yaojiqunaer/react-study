import { Route, Routes } from 'react-router-dom'
import Layout from '@/pages/Layout'
import Login from '@/pages/Login'
import App from '@/App'

const GlobalRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<App />}></Route>
            <Route path='/layout' element={<Layout />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='*' element={<div>404</div>}></Route>
        </Routes>
    )
}

export default GlobalRouter


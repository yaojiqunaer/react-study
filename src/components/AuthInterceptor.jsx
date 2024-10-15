import { getToken } from '@/utils'
import { Navigate } from 'react-router-dom'

export function AuthInterceptor({ children }) {
    if (getToken()) {
        return <>{children}</>
    }
    return <Navigate to={'/login'} replace />
}
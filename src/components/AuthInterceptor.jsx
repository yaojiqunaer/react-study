import { getToken } from '@/utils'
import { Navigate } from 'react-router-dom'

export function AuthInterceptor({ page }) {
    if (getToken()) {
        return <>{page}</>
    }
    return <Navigate to={'/login'} replace />
}
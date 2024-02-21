import { Navigate } from 'react-router-dom'

export const AdminRoute = ({ element }) => {
    const isAdmin = true
    return isAdmin ? element : <Navigate to='/unauthorized'></Navigate>
}

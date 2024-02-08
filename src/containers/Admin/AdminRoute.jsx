import { Navigate } from 'react-router-dom'

export const AdminRoute = ({ element }) => {
    const isAdmin = true
    console.log(element)
    return isAdmin ? element : <Navigate to='/unauthorized'></Navigate>
}

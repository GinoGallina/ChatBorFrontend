import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetMensajeyError } from '../redux/Slices/tipoSlice.js'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { login } from '../redux/Slices/userSlice.js'

export const useUser = () => {
    const loading = useSelector((state) => state.user.loading)
    const user = useSelector((state) => state.user.user)
    const error = useSelector((state) => state.user.error)
    const mensaje = useSelector((state) => state.user.mensaje)
    const dispatch = useDispatch()

    const navigate = useNavigate()
    useEffect(() => {
        if (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                html: error,
            }).then((res) => {
                if (res && error == 'Ya está logueado') {
                    navigate('/tipos')
                }
            })
        }
        if (mensaje) {
            Swal.fire({
                icon: 'success',
                title: 'Exito',
                html: mensaje,
            }).then((res) => {
                if (res) {
                    navigate('/tipos')
                }
            })
        }

        return () => {
            dispatch(resetMensajeyError())
        }
    }, [error, mensaje, navigate, dispatch])

    const handleSubmit = (e, user) => {
        e.preventDefault()
        dispatch(login(user))
    }

    return {
        loading,
        user,
        error,
        mensaje,
        handleSubmit,
    }
}

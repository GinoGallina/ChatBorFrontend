import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    createTipo,
    fetchTipos,
    getOneTipoSlice,
    resetMensajeyError,
} from '../redux/Slices/tipoSlice.js'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

export const useTipo = () => {
    const loading = useSelector((state) => state.tipo.loading)
    const tipos = useSelector((state) => state.tipo.tipos)
    const error = useSelector((state) => state.tipo.error)
    const mensaje = useSelector((state) => state.tipo.mensaje)
    const tipoSeleccionado = useSelector((state) => state.tipo.tipoSeleccionado)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!tipos.length > 0) {
            dispatch(fetchTipos())
        }
    }, [dispatch, tipos.length])

    const navigate = useNavigate()
    useEffect(() => {
        if (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                html: error,
            }).then((res) => {
                if (res && error == 'No está logueado') {
                    navigate('/')
                }
            })
        }
        if (mensaje) {
            Swal.fire({
                icon: 'success',
                title: 'Exito',
                html: mensaje,
            }).then((res) => {
                if (res && mensaje == 'Tipo creado con exito') {
                    navigate('/tipos')
                }
            })
        }

        return () => {
            dispatch(resetMensajeyError())
        }
    }, [error, mensaje, navigate, dispatch])

    const handleSubmit = (e, tipo) => {
        const tipoCreate = { descripcion: tipo.descripcion }
        e.preventDefault()
        dispatch(createTipo(tipoCreate))
    }

    const getOneTipo = (id) => {
        dispatch(getOneTipoSlice(id))
    }

    return {
        loading,
        tipos,
        error,
        mensaje,
        tipoSeleccionado,
        handleSubmit,
        getOneTipo,
    }
}

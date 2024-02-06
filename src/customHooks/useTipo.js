import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTipos } from '../redux/Slices/tipoSlice.js'

export const useTipo = () => {
    const loading = useSelector((state) => state.tipo.loading)
    const tipos = useSelector((state) => state.tipo.tipos)
    const error = useSelector((state) => state.tipo.error)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTipos())
    }, [dispatch])

    return {
        loading,
        tipos,
        error,
    }
}

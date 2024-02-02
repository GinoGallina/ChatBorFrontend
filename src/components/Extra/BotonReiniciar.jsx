import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { reinciarMensajes } from '../../redux/chatSlice.js'

export const BotonReiniciar = () => {
    const dispatch = useDispatch
    const handleResetClick = useCallback(() => {
        localStorage.removeItem('mensajes')
        window.location.reload()
    }, [])
    return (
        <button onClick={handleResetClick} className='btn p-3 btn-reiniciar'>
            <p className='mb-0 fs-2'>
                <i className='fas fa-sync-alt'></i>{' '}
            </p>
        </button>
    )
}

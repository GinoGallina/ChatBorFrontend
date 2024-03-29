import { useDispatch } from 'react-redux'
import { agregarMensaje } from '../redux/Slices/chatSlice.js'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { io } from 'socket.io-client'
import Swal from 'sweetalert2'

export const useSocket = () => {
    console.log('render useSocket')
    const [newMensaje, setNewMensaje] = useState('')
    const [error, setError] = useState(false)
    const dispatch = useDispatch()

    //El MEMO lo agregue yo pero nose
    const socket = useMemo(() => {
        return io('http://localhost:3000/', {
            transports: ['websocket'],
            cors: {
                origin: 'http://localhost:5173',
                methods: ['GET', 'POST'],
            },
        })
    }, [])

    const sendMensaje = useCallback(
        (e) => {
            e.preventDefault()
            if (newMensaje == '') return
            dispatch(
                agregarMensaje({
                    id: uuidv4(),
                    texto: newMensaje,
                    from: 'user',
                }),
            )
            if (socket) {
                socket.emit('mensaje', newMensaje)
            }
            setNewMensaje('')
        },
        [newMensaje],
    )

    useEffect(() => {
        socket.on('mensaje', (mensaje) => {
            dispatch(
                agregarMensaje({
                    id: uuidv4(),
                    texto: mensaje,
                    from: 'sistem',
                }),
            )
        })
        socket.on('connect_error', (error) => {
            console.error('Error de conexión:', error)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salió mal! ' + error,
            })
            socket.disconnect()
            setError(true)
        })

        return () => {
            socket.disconnect()
        }
    }, [dispatch, socket])

    return {
        sendMensaje,
        newMensaje,
        setNewMensaje,
        error,
    }
}

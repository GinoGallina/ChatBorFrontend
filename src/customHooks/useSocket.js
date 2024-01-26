import { useDispatch } from 'react-redux'
import { agregarMensaje } from '../redux/chatSlice.js'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { io } from 'socket.io-client'
import Swal from 'sweetalert2'

export const useSocket = () => {
    console.log('render el socket')

    const [newMensaje, setNewMensaje] = useState('')
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
        console.log('a')
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
        })

        return () => {
            socket.disconnect()
        }
    }, [dispatch, socket])

    return {
        sendMensaje,
        newMensaje,
        setNewMensaje,
    }
}

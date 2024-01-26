import { useSelector } from 'react-redux'
import { selectMensajes } from '../../redux/chatSlice.js'
import { useSocket } from '../../customHooks/useSocket.js'
import { ChatMessage } from './ChatMessage.jsx'
import { useEffect, useRef, useState } from 'react'

export const ChatBox = () => {
    const mensajes = useSelector(selectMensajes)
    const { newMensaje, sendMensaje, setNewMensaje } = useSocket()

    const contenedorRef = useRef(null)
    const [autoScroll, setAutoScroll] = useState(true)

    useEffect(() => {
        console.log('aa')
        if (autoScroll) {
            contenedorRef.current.scrollTop = contenedorRef.current.scrollHeight
        }
    }, [autoScroll])

    return (
        <div
            className='bg-white rounded border shadow flex-grow-1 box p-3'
            ref={contenedorRef}
        >
            <ul className='p-3' style={{ listStyle: 'none' }}>
                {mensajes.map((mensaje) => {
                    return (
                        <ChatMessage
                            key={mensaje.id}
                            mensaje={mensaje}
                        ></ChatMessage>
                    )
                })}
            </ul>
            <form action='' onSubmit={sendMensaje}>
                <label htmlFor=''>Ingrese mensaje</label>
                <input
                    type='text'
                    name=''
                    id=''
                    onChange={(e) => setNewMensaje(e.target.value)}
                    value={newMensaje}
                />
                <button type='submit'>Enviar</button>
            </form>
        </div>
    )
}

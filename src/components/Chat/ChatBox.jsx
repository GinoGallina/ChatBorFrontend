import { useSelector } from 'react-redux'
import { selectMensajes } from '../../redux/chatSlice.js'
import { useSocket } from '../../customHooks/useSocket.js'
import { ChatMessage } from './ChatMessage.jsx'
import { useRef } from 'react'
import { MensajeError } from '../Extra/MensajeError.jsx'
import { ChatFooterComponent } from '../Extra/ChatFooterComponent.jsx'

export const ChatBox = () => {
    const mensajes = useSelector(selectMensajes)
    const contenedorRef = useRef(null)
    const { error, sendMensaje, setNewMensaje, newMensaje } = useSocket()

    return (
        <div
            className='bg-white rounded border shadow flex-grow-1 box p-3 d-flex flex-column'
            ref={contenedorRef}
        >
            {error ? (
                <>
                    <MensajeError></MensajeError>
                </>
            ) : (
                <>
                    <ul
                        className='p-3 flex-grow-1'
                        style={{ listStyle: 'none' }}
                    >
                        {mensajes.map((mensaje) => {
                            return (
                                <ChatMessage
                                    key={mensaje.id}
                                    mensaje={mensaje}
                                ></ChatMessage>
                            )
                        })}
                    </ul>
                    <ChatFooterComponent
                        contenedorRef={contenedorRef}
                        sendMensaje={sendMensaje}
                        setNewMensaje={setNewMensaje}
                        newMensaje={newMensaje}
                    ></ChatFooterComponent>
                </>
            )}
        </div>
    )
}

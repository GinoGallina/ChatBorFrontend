import { useCallback } from 'react'
import propTypes from 'prop-types'

export const ChatFooterComponent = ({
    contenedorRef,
    sendMensaje,
    setNewMensaje,
    newMensaje,
}) => {
    const autoScrollBottom = useCallback(() => {
        setTimeout(() => {
            contenedorRef.current.scrollTop =
                contenedorRef.current.scrollHeight + 1000000
        }, 1)
    }, [contenedorRef])
    return (
        <>
            <form
                className='d-flex justify-content-around'
                action=''
                onSubmit={(e) => {
                    sendMensaje(e)
                    autoScrollBottom()
                }}
            >
                <input
                    type='text'
                    name=''
                    id=''
                    onChange={(e) => setNewMensaje(e.target.value)}
                    className='w-75 border rounded'
                    value={newMensaje}
                    placeholder='Ingrese su mensaje'
                />
                <button className='w-25 ms-5 boton-enviar' type='submit'>
                    <p className='mb-0 fs-5'>Enviar</p>
                </button>
            </form>
        </>
    )
}

ChatFooterComponent.propTypes = {
    contenedorRef: propTypes.any.isRequired,
    sendMensaje: propTypes.func.isRequired,
    setNewMensaje: propTypes.func.isRequired,
    newMensaje: propTypes.string.isRequired,
}

import { BotonReiniciar } from '../Extra/BotonReiniciar.jsx'
import { ChatBox } from './ChatBox.jsx'

export const ChatComponent = () => {
    return (
        <>
            <main className='main-chat'>
                <div className='div-main-chat container pt-2 pb-4  d-flex flex-column '>
                    <h1 className='titulo-chat text-center mb-2'>ChatBot</h1>
                    <ChatBox></ChatBox>
                </div>
                <BotonReiniciar></BotonReiniciar>
            </main>
        </>
    )
}

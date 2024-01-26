export const ChatMessage = ({ mensaje }) => {
    const clase =
        mensaje.from == 'user' ? 'mensaje-user ms-auto' : 'mensaje-sistem'
    return (
        <div className='d-flex'>
            <li
                className={` mensaje ${clase} `}
                style={{ display: 'inline-block' }}
            >
                <p className={`mb-0 fs-5 `}>{mensaje.texto}</p>
            </li>
            <br />
        </div>
    )
}

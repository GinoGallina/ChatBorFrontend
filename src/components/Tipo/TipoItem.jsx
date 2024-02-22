import { useDispatch } from 'react-redux'
import { deleteTipo } from '../../redux/Slices/tipoSlice.js'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ModalMensaje } from '../Extra/ModalMensaje.jsx'

export const TipoItem = ({ tipo }) => {
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteTipo(id))
    }
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    return (
        <>
            <tr>
                <td>{tipo.id}</td>
                <td>{tipo.descripcion}</td>
                <td className='text-center'>
                    <button
                        className='btn btn-sm btn-outline-secondary'
                        onClick={handleShow}
                    >
                        Mensaje
                    </button>
                </td>
                <td>
                    <div className='d-flex justify-content-around'>
                        <Link
                            to={`edit/${tipo.id}`}
                            className='btn btn-sm btn-outline-primary'
                        >
                            Editar
                        </Link>
                        <button
                            onClick={() => handleDelete(tipo.id)}
                            className='btn btn-sm btn-outline-danger'
                        >
                            Eliminar
                        </button>
                    </div>
                </td>
            </tr>
            <ModalMensaje show={show} handleClose={handleClose}></ModalMensaje>
        </>
    )
}

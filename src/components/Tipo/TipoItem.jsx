import { useDispatch } from 'react-redux'
import { deleteTipo } from '../../redux/Slices/tipoSlice.js'
import { Link } from 'react-router-dom'

export const TipoItem = ({ tipo }) => {
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteTipo(id))
    }
    return (
        <tr>
            <td>{tipo.id}</td>
            <td>{tipo.descripcion}</td>
            <td>
                <div className='d-flex justify-content-around'>
                    <Link className='btn btn-sm btn-outline-primary'>
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
    )
}

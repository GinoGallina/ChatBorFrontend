import 'datatables.net-bs5'
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css' // Importa los estilos de DataTables con Bootstrap
import { useTipo } from '../../customHooks/useTipo.js'
import { LoadingComponent } from '../Extra/LoadingComponent.jsx'

import { TipoDataTable } from './TiposDataTable.jsx'
import { useEffect } from 'react'
import Swal from 'sweetalert2'

export const TipoView = () => {
    const { loading, error, tipos, mensaje } = useTipo()
    //const dispatch = useDispatch()

    useEffect(() => {
        if (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                html: error,
            })
        }
        if (mensaje) {
            Swal.fire({
                icon: 'success',
                title: 'Exito',
                html: mensaje,
            })
        }
    }, [error, mensaje])

    return (
        <main
            className='main-tipos pt-4 pb-4 d-flex align-items-center'
            style={{ minHeight: '100vh' }}
        >
            <div className='container'>
                <div
                    className='card shadow p-3'
                    style={{ background: 'rgba(255, 255, 255, 0.7)' }}
                >
                    <div className='card-title row mb-5'>
                        <h1 className='col-8 bold'>Listado de Tipos</h1>
                        <button className='btn  btn-success col-4'>
                            Crear Tipo
                        </button>
                    </div>
                    {loading ? (
                        <LoadingComponent></LoadingComponent>
                    ) : (
                        <div className='card-body'>
                            <TipoDataTable tipos={tipos}></TipoDataTable>
                        </div>
                    )}
                </div>
            </div>
        </main>
    )
}

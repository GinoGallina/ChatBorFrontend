import 'datatables.net-bs5'
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css' // Importa los estilos de DataTables con Bootstrap
import { useTipo } from '../../customHooks/useTipo.js'
import { LoadingComponent } from '../Extra/LoadingComponent.jsx'

import { TipoDataTable } from './TiposDataTable.jsx'
import { Link } from 'react-router-dom'
import { UserLogo } from '../User/UserLogo.jsx'

export const TipoView = () => {
    const { loading, tipos } = useTipo()

    return (
        <div className='main-tipos'>
            <div className='pt-5'></div>
            <main
                className=' pt-5  pb-4 d-flex align-items-center'
                style={{ minHeight: '100vh' }}
            >
                <div className='container'>
                    <div
                        className='card shadow p-3'
                        style={{ background: 'rgba(255, 255, 255, 0.7)' }}
                    >
                        <div className='card-title row mb-3'>
                            <h1 className='col-8 bold'>Listado de Tipos</h1>
                            <div className='col-4 text-end'>
                                <Link
                                    to='/admin/tipos/create'
                                    className='btn  btn-success  '
                                >
                                    <p className='mb-0 fs-4'>Crear Tipo</p>
                                </Link>
                            </div>
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
        </div>
    )
}

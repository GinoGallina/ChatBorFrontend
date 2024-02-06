import { useEffect, useRef } from 'react'
import $ from 'jquery'
import 'datatables.net-bs5'
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css' // Importa los estilos de DataTables con Bootstrap
import { useTipo } from '../../customHooks/useTipo.js'
import { LoadingComponent } from '../Extra/LoadingComponent.jsx'
import { Link } from 'react-router-dom'

export const TipoView = () => {
    const tipoTableRef = useRef(null)

    const { tipos, loading, error } = useTipo()

    useEffect(() => {
        if (!loading) {
            const table = $(tipoTableRef.current).DataTable({
                language: {
                    // Personaliza los textos en español
                    sProcessing: 'Procesando...',
                    sLengthMenu: 'Mostrar _MENU_ tipos',
                    sZeroRecords: 'No se encontraron resultados',
                    sEmptyTable: 'Ningún dato disponible en esta tabla',
                    sInfo: 'Mostrando tipos del _START_ al _END_ de un total de _TOTAL_ tipos',
                    sInfoEmpty:
                        'Mostrando tipos del 0 al 0 de un total de 0 tipos',
                    sInfoFiltered: '(filtrado de un total de _MAX_ tipos)',
                    sInfoPostFix: '',
                    sSearch: 'Buscar:',
                    sUrl: '',
                    sInfoThousands: ',',
                    sLoadingRecords: 'Cargando...',
                    oPaginate: {
                        sFirst: 'Primero',
                        sLast: 'Último',
                        sNext: 'Siguiente',
                        sPrevious: 'Anterior',
                    },
                    oAria: {
                        sSortAscending:
                            ': Activar para ordenar la columna de manera ascendente',
                        sSortDescending:
                            ': Activar para ordenar la columna de manera descendente',
                    },
                    buttons: {
                        copy: 'Copiar',
                        colvis: 'Visibilidad',
                    },
                },
                paging: true, // Habilita la paginación
                searching: true, // Habilita la búsqueda
            })

            return () => {
                table.destroy()
            }
        }
    }, [loading])

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
                    <div className='card-body'>
                        {loading ? (
                            <LoadingComponent></LoadingComponent>
                        ) : (
                            <table
                                ref={tipoTableRef}
                                id='tipoTable'
                                className='table table-dark table-responsive table-striped'
                            >
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Descripción</th>
                                        <th className='text-center'>Acción</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tipos.map((tipo) => {
                                        return (
                                            <tr key={tipo.id}>
                                                <td>{tipo.id}</td>
                                                <td>{tipo.descripcion}</td>
                                                <td>
                                                    <div className='d-flex justify-content-around'>
                                                        <Link className='btn btn-sm btn-outline-primary'>
                                                            Editar
                                                        </Link>
                                                        <button className='btn btn-sm btn-outline-danger'>
                                                            Eliminar
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </div>
        </main>
    )
}

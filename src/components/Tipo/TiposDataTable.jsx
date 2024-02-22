import { useEffect, useRef } from 'react'
import $ from 'jquery'
import { propTypes } from 'react-bootstrap/esm/Image.js'
import { TipoItem } from './TipoItem.jsx'

export const TipoDataTable = ({ tipos }) => {
    const tipoTableRef = useRef(null)

    useEffect(() => {
        const table = $(tipoTableRef.current).DataTable({
            language: {
                // Personaliza los textos en español
                sProcessing: 'Procesando...',
                sLengthMenu: 'Mostrar _MENU_ tipos',
                sZeroRecords: 'No se encontraron resultados',
                sEmptyTable: 'Ningún dato disponible en esta tabla',
                sInfo: 'Mostrando tipos del _START_ al _END_ de un total de _TOTAL_ tipos',
                sInfoEmpty: 'Mostrando tipos del 0 al 0 de un total de 0 tipos',
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
    }, [])

    return (
        <div className='table-responsive'>
            <table
                ref={tipoTableRef}
                id='tipoTable'
                className='table table-dark  table-striped'
            >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Descripción</th>
                        <th>Mensaje</th>
                        <th className='text-center'>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {tipos.map((tipo) => {
                        return <TipoItem key={tipo.id} tipo={tipo}></TipoItem>
                    })}
                </tbody>
            </table>
        </div>
    )
}

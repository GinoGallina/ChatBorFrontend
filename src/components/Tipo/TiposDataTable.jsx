// import DataTables, { Config } from 'datatables.net-dt'
// import { useEffect, useRef } from 'react'
// export const TipoDataTable = ({ ...props }) => {
//     const tipoTableRef = useRef(null)

//     useEffect(() => {
//         const table = new DataTables(tipoTableRef.current, {
//             ...props,
//         })

//         return () => {
//             table.destroy()
//         }
//     }, [])

//     return (
//         <table
//             ref={tipoTableRef}
//             id='tipoTable'
//             className='table table-striped'
//         ></table>
//     )
// }

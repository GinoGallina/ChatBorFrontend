import { NavLink } from 'react-router-dom'
export const ErrorView = ({ mensaje }) => {
    return (
        <>
            <main
                className='main-error d-flex justify-content-center align-items-center flex-column'
                style={{ minHeight: '100vh' }}
            >
                <h1 className=' text-center display-4 text-danger bold mb-5'>
                    {mensaje}
                </h1>
                <NavLink to='/chat'>
                    <button className='btn btn-primary'>Volver al chat</button>
                </NavLink>
            </main>
        </>
    )
}

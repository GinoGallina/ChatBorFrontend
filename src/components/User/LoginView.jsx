import {
    MDBBtn,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBCheckbox,
} from 'mdb-react-ui-kit'
import { useState } from 'react'
import { useUser } from '../../customHooks/useUser'

export const LoginView = () => {
    const { handleSubmit } = useUser()
    const [loginForm, setLoginForm] = useState({ email: '', password: '' })
    const handleChange = (e) => {
        const { value, name } = e.target
        setLoginForm({ ...loginForm, [name]: value })
    }
    const handleSubmitForm = (e) => {
        handleSubmit(e, loginForm)
    }
    return (
        <div className='main-tipos'>
            <main
                className='row justify-content-center align-items-center'
                style={{ minHeight: '100vh' }}
            >
                {/* <div className='col-7 card shadow p-3'>
                    <div className='card-title'>
                        <h3 className='text-center'>Login</h3>
                    </div>
                    <div className='card-body'></div>
                </div> */}
                <form className='px-5 px-lg-0' onSubmit={handleSubmitForm}>
                    <MDBRow className='d-flex justify-content-center align-items-center'>
                        <MDBCol col='12'>
                            <MDBCard
                                className='bg-white my-5 mx-auto'
                                style={{
                                    borderRadius: '1rem',
                                    maxWidth: '500px',
                                }}
                            >
                                <MDBCardBody className='p-5 w-100 d-flex flex-column'>
                                    <h2 className='fw-bold mb-2 text-center'>
                                        Login
                                    </h2>
                                    <p className='text-white-50 mb-3'>
                                        Please enter your login and password!
                                    </p>

                                    <MDBInput
                                        wrapperClass='mb-4 w-100'
                                        placeholder='Ingrese su email'
                                        id='formControlLgEmail'
                                        type='email'
                                        name='email'
                                        size='lg'
                                        onChange={handleChange}
                                    />
                                    <MDBInput
                                        wrapperClass='mb-4 w-100'
                                        placeholder='Ingrese su contraseña'
                                        id='formControlLgPassword'
                                        name='password'
                                        type='password'
                                        size='lg'
                                        onChange={handleChange}
                                    />

                                    <MDBCheckbox
                                        name='flexCheck'
                                        id='flexCheckDefault'
                                        className='mb-4'
                                        label='Recordar contraseña'
                                    />

                                    {/* <MDBBtn size='lg'>Login</MDBBtn> */}
                                    <button
                                        className='btn btn-primary p-1 fs-4'
                                        size='lg'
                                    >
                                        Login
                                    </button>

                                    <hr className='my-4' />

                                    <MDBBtn
                                        className='mb-2 w-100'
                                        size='lg'
                                        style={{ backgroundColor: '#dd4b39' }}
                                    >
                                        <MDBIcon
                                            fab
                                            icon='google'
                                            className='mx-2'
                                        />
                                        Login con google
                                    </MDBBtn>

                                    {/* <MDBBtn
                                        className='mb-4 w-100'
                                        size='lg'
                                        style={{ backgroundColor: '#3b5998' }}
                                    >
                                        <MDBIcon
                                            fab
                                            icon='facebook-f'
                                            className='mx-2'
                                        />
                                        Login con facebook
                                    </MDBBtn> */}
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </form>
            </main>
        </div>
    )
}

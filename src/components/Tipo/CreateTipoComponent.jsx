import { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useTipo } from '../../customHooks/useTipo'
import { useParams } from 'react-router-dom'
import { LoadingComponent } from '../Extra/LoadingComponent'

export const CreateTipoComponent = () => {
    let { id } = useParams()

    const [tipo, setTipo] = useState({ id: '', descripcion: '', mensaje: '' })
    const { handleSubmit, getOneTipo, tipoSeleccionado, loading } = useTipo()

    const handleChange = (e) => {
        const { value, name } = e.target
        setTipo({ ...tipo, [name]: value })
    }

    useEffect(() => {
        if (id && !tipoSeleccionado) {
            getOneTipo(id)
        } else if (id && tipoSeleccionado) {
            setTipo(tipoSeleccionado)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tipoSeleccionado])

    return (
        <main
            className='main-tipos pt-4 pb-4 d-flex justify-content-center align-items-center'
            style={{ minHeight: '100vh' }}
        >
            {loading ? (
                <LoadingComponent></LoadingComponent>
            ) : (
                <div
                    className='card shadow p-5'
                    style={{
                        background: 'rgba(255, 255, 255, 0.7)',
                    }}
                >
                    <div className='card-title text-center'>
                        <h1>
                            {tipo.id ? 'Editar ' : 'Crear '}
                            Tipo
                        </h1>
                        <hr />
                    </div>
                    <div className='card-body'>
                        <Form onSubmit={(e) => handleSubmit(e, tipo)}>
                            <Form.Group controlId='formDescripcion'>
                                <Form.Label className='fs-3'>
                                    Descripción
                                </Form.Label>
                                <Form.Control
                                    type='text'
                                    className='fs-3 mb-3'
                                    name='descripcion'
                                    value={tipo.descripcion}
                                    onChange={handleChange}
                                    placeholder='Ingrese la descripción'
                                />
                                <Form.Label className='fs-3'>
                                    Mensaje
                                </Form.Label>
                                <Form.Control
                                    type='text'
                                    className='fs-3'
                                    name='mensaje'
                                    value={tipo.mensaje}
                                    onChange={handleChange}
                                    placeholder='Ingrese el mensaje'
                                />
                            </Form.Group>
                            <div className='text-center mt-5 '>
                                <Button
                                    className='fs-3'
                                    variant='success'
                                    type='submit'
                                >
                                    {tipo.id ? 'Actualizar' : 'Crear'}
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            )}
        </main>
    )
}

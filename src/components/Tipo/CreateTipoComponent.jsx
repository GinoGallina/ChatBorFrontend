import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

export const CreateTipoComponent = ({ tipoInicial = null }) => {
    const [tipo, setTipo] = useState(tipoInicial || { id: '', descripcion: '' })
    const handleSubmit = () => {}
    const handleChange = (e) => {
        const { value, name } = e.target
        setTipo({ ...tipo, [name]: value })
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId='formId'>
                {/* <Form.Label>ID</Form.Label> */}
                {/* <Form.Control
                    type='text'
                    name='id'
                    value={tipo.id}
                    onChange={handleChange}
                    placeholder='Ingrese el ID'
                    readOnly={!!tipo.id} // El ID es de solo lectura si ya está definido
                /> */}
            </Form.Group>

            <Form.Group controlId='formDescripcion'>
                <Form.Label>Descripción</Form.Label>
                <Form.Control
                    type='text'
                    name='descripcion'
                    value={tipo.descripcion}
                    onChange={handleChange}
                    placeholder='Ingrese la descripción'
                />
            </Form.Group>

            <Button variant='primary' type='submit'>
                {tipo.id ? 'Actualizar' : 'Crear'}
            </Button>
        </Form>
    )
}

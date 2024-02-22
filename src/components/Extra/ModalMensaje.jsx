import { Button, Modal } from 'react-bootstrap'
export const ModalMensaje = ({ show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Mensaje</Modal.Title>
            </Modal.Header>
            <Modal.Body>Contenido del modal...</Modal.Body>
            <Modal.Footer className='justify-content-around'>
                <Button variant='danger' onClick={handleClose}>
                    Cerrar
                </Button>
                <Button variant='primary' onClick={handleClose}>
                    Editar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

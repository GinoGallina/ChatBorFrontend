import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { PersonCircle } from 'react-bootstrap-icons'

export const NavbarComponent = () => {
    const handleLogout = () => {}
    return (
        <Navbar expand='lg' bg='dark' variant='dark'>
            <Container>
                <Navbar.Brand href='/admin/tipos'>ChatBot</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ms-auto'>
                        <Nav.Link href='/admin/tipos' active>
                            Tipo
                        </Nav.Link>
                    </Nav>
                    <Nav className='custom-navbar'>
                        <NavDropdown
                            align='end'
                            title={<PersonCircle size={24} />}
                            id='basic-nav-dropdown'
                        >
                            <NavDropdown.Item
                                className='text-danger fw-bold text-center'
                                onClick={handleLogout}
                            >
                                Cerrar sesión
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

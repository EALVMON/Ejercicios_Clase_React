import { Card, Col, ListGroup } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function MenuNavegacion({categorias, directores}) {


    return(
     <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Mi Aplicación</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            {/*  Categorias */}
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
                {categorias!=undefined &&categorias.map(item => <NavDropdown.Item href="#"> {item}</NavDropdown.Item>)}
            </NavDropdown>
            <NavDropdown title="Directores" id="basic-nav-dropdown">
                {directores!=undefined&&directores.map(item => <NavDropdown.Item href="#"> {item}   </NavDropdown.Item>)}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>



    );
}
export default MenuNavegacion;
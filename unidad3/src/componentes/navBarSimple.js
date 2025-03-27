import { Container, Navbar, Nav } from 'react-bootstrap';

function NavbarSimple() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">CIFP Avilés </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{ backgroundColor: "white", color: "blue" }}>Home</Nav.Link>
            <Nav.Link href="#docencia" style={{ backgroundColor: "green", color: "red" }}>Docencia</Nav.Link>
            <Nav.Link href="#services ">Servicios </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }

  export default NavbarSimple;
import { useState, useEffect } from 'react';
import { Navbar, Nav, Dropdown, Container } from 'react-bootstrap';

function MenuNav({ peliculas  }) {
    const [categorias, setCategorias] = useState([]);
    const [directores, setDirectores] = useState([]);

    useEffect(() => {
        // Extrae categorías únicas
        const categoriasUnicas = [...new Set(peliculas.map(p => p.categoria))];
        setCategorias(categoriasUnicas);

        // Extrae directores únicos
        const directoresUnicos = [...new Set(peliculas.map(p => p.director))];
        setDirectores(directoresUnicos);
    }, [peliculas]);

    return(

<Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#">Películas</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* Menú desplegable de Categorías */}
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary">
                                Categorías
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {categorias.map((categoria, index) => (
                                    <Dropdown.Item key={index}>{categoria}</Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>

                        {/* Menú desplegable de Directores */}
                        <Dropdown className="ms-3">
                            <Dropdown.Toggle variant="secondary">
                                Directores
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {directores.map((director, index) => (
                                    <Dropdown.Item key={index}>{director}</Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );

}
export default MenuNav;
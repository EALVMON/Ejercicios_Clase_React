import { Nav, NavDropdown } from 'react-bootstrap';

function MenuNavegacion({ categorias, directores, setSelectedCategoria, setSelectedDirector }) {
  return (
    <Nav className="me-auto">
      <Nav.Link href="/">Inicio</Nav.Link>

      {/* Categorías */}
      <NavDropdown title="Categorias" id="basic-nav-dropdown">
        {categorias && categorias.map(item => (
          <NavDropdown.Item
            key={item}
            onClick={() => setSelectedCategoria(item)}
          >
            {item}
          </NavDropdown.Item>
        ))}
      </NavDropdown>

      {/* Directores */}
      <NavDropdown title="Directores" id="basic-nav-dropdown">
        {directores && directores.map(item => (
          <NavDropdown.Item
            key={item}
            onClick={() => setSelectedDirector(item)}
          >
            {item}
          </NavDropdown.Item>
        ))}
      </NavDropdown>
    </Nav>
  );
}

export default MenuNavegacion;

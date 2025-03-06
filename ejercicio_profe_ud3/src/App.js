import { useEffect, useState } from 'react';
import { Col, ListGroup, Container, Image, Row } from 'react-bootstrap';
import MenuNavegacion from './MenuNavegacion';
import Pelicula from './Pelicula';

function App() {
  const [peliculas, setPeliculas] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [directores, setDirectores] = useState([]);
  const [selectedCategoria, setSelectedCategoria] = useState(null);
  const [selectedDirector, setSelectedDirector] = useState(null);

  const loadPeliculas = async () => {
    const response = await fetch("http://localhost:3000/peliculas.json");
    const json = await response.json();
    setPeliculas(json);
  };

  useEffect(() => {
    loadPeliculas();
  }, []);

  useEffect(() => {
    let aux_categorias = [];
    let aux_directores = [];
    for (let i = 0; i < peliculas.length; i++) {
      if (peliculas[i].categoria instanceof Array) {
        peliculas[i].categoria.forEach(categoria => {
          if (aux_categorias.indexOf(categoria) < 0) aux_categorias.push(categoria);
        });
      } else {
        if (aux_categorias.indexOf(peliculas[i].categoria) < 0) aux_categorias.push(peliculas[i].categoria);
      }
      if (aux_directores.indexOf(peliculas[i].director) < 0) aux_directores.push(peliculas[i].director);
    }
    setCategorias(aux_categorias);
    setDirectores(aux_directores);
  }, [peliculas]);

  const peliculasFiltradas = () => {
    let peliculasResult = peliculas;
    if (selectedCategoria) {
      peliculasResult = peliculasResult.filter(p => p.categoria.includes(selectedCategoria));
    }
    if (selectedDirector) {
      peliculasResult = peliculasResult.filter(p => p.director === selectedDirector);
    }
    return peliculasResult;
  };

  return (
    <Container>
      <MenuNavegacion
        categorias={categorias}
        directores={directores}
        setSelectedCategoria={setSelectedCategoria}
        setSelectedDirector={setSelectedDirector}
      />

      <Row>
        {peliculasFiltradas().map(pelicula => (
          <Col md={4} key={pelicula.titulo}>
            <Image src={pelicula.foto} className="img-fluid rounded" alt={pelicula.titulo} />
            <h4>{pelicula.titulo}</h4>
            <ListGroup>
              <ListGroup.Item>Director: {pelicula.director}</ListGroup.Item>
              <ListGroup.Item>Actores - {pelicula.actoresPrincipales}</ListGroup.Item>
              <ListGroup.Item>Sinopsis: {pelicula.sinopsis}</ListGroup.Item>
            </ListGroup>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;


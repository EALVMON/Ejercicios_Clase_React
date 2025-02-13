
import './App.css'; 
// Importa los estilos desde el archivo CSS.

import { useState, useEffect } from 'react';
// Importa los hooks useState y useEffect de React.

import { Container, Row, Col, ListGroupItem, ListGroup, Image } from 'react-bootstrap';
// Importa componentes de Bootstrap para el diseño y la interfaz de usuario.

import Pelicula from './Pelicula';
// Importa el componente Pelicula, que se usará para mostrar cada película.

import MenuNav from './MenuNav';


function App() {

  // Estado para almacenar la lista de películas cargadas desde el JSON.
  const [peliculas, setPeliculas] = useState([]);

  // Estado para almacenar la película seleccionada (se inicializa con un objeto vacío para evitar errores).
  const [peliculaSelecionada, setPeliculaSelecionada] = useState({});

  // Función asíncrona para cargar la lista de películas desde un archivo JSON local.
  const cargarPeliculas = async () => {
    const response = await fetch("http://localhost:3000/peliculas.json"); // Hace una petición HTTP al archivo JSON.
    const json = await response.json(); // Convierte la respuesta en un objeto JavaScript.
    setPeliculas(json); // Guarda las películas en el estado.
  }

  // useEffect que se ejecuta una sola vez al montar el componente (arreglo de dependencias vacío []).
  useEffect(() => {
    cargarPeliculas(); // Llama a la función para cargar las películas.
  }, []);

  // useEffect que se ejecuta cada vez que cambia la lista de películas.
  useEffect(() => {
    if (peliculas != null && peliculas.length > 0) {
      setPeliculaSelecionada(peliculas[0]); // Selecciona la primera película como predeterminada.
    }
  }, [peliculas, setPeliculas]);

  return (
    <Container>

        {/* Menú de navegación */}
        <MenuNav peliculas={peliculas} />


      <Row>
        <Col md={8}>
          {/* Si hay una película seleccionada, muestra su imagen */}
          {peliculaSelecionada &&
            <Image src={peliculaSelecionada.foto} fluid={true}></Image>} {/* Con fluid={true} → La imagen se reduce automáticamente a 500px de ancho.
              Sin fluid={true} → La imagen podría exceder los 500px y desbordarse. */}
        </Col>
        <Col md={4}>
          {/* Si la película seleccionada tiene un título, muestra su información */}
          {peliculaSelecionada.titulo &&
            <div>
              <h2>{peliculaSelecionada.titulo}</h2>
              <ListGroup>
                <ListGroupItem>Director - {peliculaSelecionada.director}</ListGroupItem>
                <ListGroupItem>Actores - {peliculaSelecionada.actoresPrincipales}</ListGroupItem>
                <ListGroupItem>Sinopsis - {peliculaSelecionada.sinopsis}</ListGroupItem>
              </ListGroup>
            </div>
          }
        </Col>
      </Row>

      <Row>
        {/* Mapea la lista de películas y renderiza un componente Pelicula para cada una */}
        {/* Renderizar cada película y pasar la función para seleccionarla */}
        {peliculas.map(pelicula => (
          <Pelicula key={pelicula.id} data={pelicula} onSeleccionar={setPeliculaSelecionada} ></Pelicula>))}
      </Row>
     


    </Container>
  );
}

export default App;
// Exporta el componente App para que pueda ser usado en otros archivos.


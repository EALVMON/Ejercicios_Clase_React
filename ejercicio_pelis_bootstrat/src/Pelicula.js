import { Col, ListGroupItem, ListGroup, Card, Button} from 'react-bootstrap';
// Importa los componentes de React-Bootstrap que se usarán para estructurar la tarjeta de la película.

function Pelicula({ data,  onSeleccionar }) {
    // Componente funcional que recibe "data" como prop, representando la información de una película.

    return (
        <Col md={3}>
            {/* Coloca el contenido dentro de una columna que ocupa 3 de las 12 columnas de Bootstrap Grid. */}
            {/* Esto significa que en pantallas medianas o más grandes, se mostrarán 4 tarjetas por fila. */}

            <Card>
                {/* Componente "Card" de Bootstrap que muestra la información de la película en una tarjeta. */}
                
                <Card.Img src={data.foto} variant='top' />
                {/* Muestra la imagen de la película en la parte superior de la tarjeta. */}

                <Card.Body>
                    <Card.Title>{data.titulo}</Card.Title>
                    {/* Muestra el título de la película dentro del cuerpo de la tarjeta. */}


                    <Button variant="primary" onClick={() => onSeleccionar(data)}>
                        Seleccionar
                    </Button>

                    {/* Añado un boton */}
                </Card.Body>

                <ListGroup>
                    {/* Lista de información adicional sobre la película. */}
                    <ListGroupItem>Director - {data.director}</ListGroupItem>
                    <ListGroupItem>Actores - {data.actoresPrincipales}</ListGroupItem>
                    <ListGroupItem>Sinopsis - {data.sinopsis}</ListGroupItem>
                </ListGroup>
            </Card>
        </Col>
    );
}

export default Pelicula;
// Exporta el componente para que pueda ser utilizado en otros archivos.

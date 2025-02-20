import { Card, Col, ListGroup, Button } from 'react-bootstrap';

function Pelicula({data, handler}) {
    return(
        

        <Col md={3}>
            <Card >
                <Card.Img src={data.foto} variant="top"></Card.Img>
                <Card.Body>
                    <Card.Title>
                        {data.titulo}
                    </Card.Title>

                </Card.Body>
                <ListGroup>
                <ListGroup.Item>Director - {data.director}</ListGroup.Item>
                <ListGroup.Item>Actores - {data.actoresPrincipales}</ListGroup.Item>
                <ListGroup.Item>Sinopsis - {data.sinopsis}</ListGroup.Item>                
                <Button variant="primary" onClick={e=>handler(data)}>Seleccionar</Button>
              </ListGroup>  

            </Card>
        </Col>
    );
}

export default Pelicula;
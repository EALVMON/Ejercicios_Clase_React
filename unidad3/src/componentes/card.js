import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
function ProductCard() {
    return (
      <Card
      style={{ width: "600px", height: "auto" }}  // hago que el componente car sea mas pequeño podia meterlo con columas row y O STACK
      > 
        <Card.Img 
            variant="top size" 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRDpNgWfI_6aVNr1UstvyejwWs5Su5HktqNA&s"
            style={{ width: "100px", height: "auto" }} // hago que la imagen se vea mas pequeña
              />
        <Card.Body>
          <Card.Title>Burro feliz</Card.Title>
          <Card.Text>
            Este es un animal  magnífico y en peligro de extinción  poco valorado en las culturas occidentales.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Características:</ListGroup.Item>
          <ListGroup.Item>Siempre contento </ListGroup.Item>
          <ListGroup.Item>Siempre dispuesto</ListGroup.Item>
          <ListGroup.Item>Come hierba</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Ver más</Card.Link>
        </Card.Body>
      </Card>
    );
  }
  export default ProductCard;  
import { Container, Row, Col } from 'react-bootstrap';

function Grid() {
  return (
    <Container>
      <h2 className="mb-4">GRID SYSTEM</h2>
      <Row className="bg-danger text-white p-3 min-vh-25">
        <Col className="bg-primary text-white p-3 h-100">
          <div>Columna 1</div>
        </Col>
        <Col className="bg-success text-white p-3 h-100">
          <div>Columna 2</div>
        </Col>
      </Row>
    </Container>
  );
}

export default Grid;

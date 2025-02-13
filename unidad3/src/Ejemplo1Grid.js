import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function MyGrid() {
  return (
    <Container>
      <Row>
        <Col>
          <div>Columna 1</div>
        </Col>
        <Col>
          <div>Columna 2</div>
        </Col>
      </Row>
<Row>
  <Col md={6}>
    <div>Columna que ocupa 6 unidades en pantallas medianas</div>
  </Col>
  <Col md={6}>
    <div>Otra columna que ocupa 6 unidades en pantallas medianas</div>
  </Col>
</Row>
    </Container>
  );
}
export default MyGrid;
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function MyGrid2() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <div>Columna que ocupa 6 unidades en pantallas extra small y 4 en pantallas medianas</div>
        </Col>
        <Col xs={6} md={4} offset={{ md: 4 }}>
          <div>Columna que ocupa 6 unidades en pantallas extra small y 4 en pantallas medianas, desplazada 4 unidades hacia la derecha en pantallas medianas</div>
        </Col>
      </Row>
    </Container>
  );
}

export default MyGrid2;
//import Button from 'react-bootstrap/Button';
import {Button, Container, Row, Col,Stack } from 'react-bootstrap'; // PONGO TODOS LOS COMPONENETES QUE VOY A UTILIZAR EN UNA SOLA LINEA
// import Stack from 'react-bootstrap/Stack';
function TypesExample() {
  return (
    <Container>
	<Row>
	<Col> 
	<Stack gap={3}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary size =sm disabled">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="info">Info</Button>
      <Button variant="light">Light</Button>
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
      </Stack>
	</Col>
	</Row>
<Row>
	<Col> 
	<Stack gap={3}>
      <Button variant="outline-primary">Primary</Button>
      <Button variant="outline-secondary">Secondary</Button>
      <Button variant="outline-success">Success</Button>
      <Button variant="outline-warning">Warning</Button>
      <Button variant="outline-danger">Danger</Button>
      <Button variant="outline-info">Info</Button>
      <Button variant="outline-light">Light</Button>
      <Button variant="outline-dark">Dark</Button>
     </Stack>
	</Col>
	</Row>

    </Container>
  );
}
export default TypesExample;

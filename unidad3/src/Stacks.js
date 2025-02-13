import Stack from 'react-bootstrap/Stack';

function BasicStack() {
  return (
    
    <Stack gap={3}>
      <h2>Tres elementos situados de manera vertical uno a continuación de otro ocupando todo el ancho y con un espaciado de 3em</h2>  
      <div>Elemento 1</div>
      <div>Elemento 2</div>
      <div>Elemento 3</div>
    </Stack>
  );
}



export default BasicStack ;

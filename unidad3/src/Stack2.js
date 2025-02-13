import Stack from 'react-bootstrap/Stack';

function HorizontalMarginStartExample() {
    return (
      <Stack direction="horizontal" gap={3}>
       <h2>Tres elementos situados de manera horizontal. 
        El segundo elemento se define con la propiedad ms auto que sitúa 
        el espacio sobrante antes del elemento (ver sección espaciado )
         Cada elemento se muestra uno a continuación de otro y con un espaciado de 3em</h2>  
       
        <div className="p-2">First item</div>
        <div className="p-2 ms-auto">Second item</div>
        <div className="p-2">Third item</div>
      </Stack>
    );
  }
  

  export default HorizontalMarginStartExample ;
import React from 'react';
import { Stack } from 'react-bootstrap';


function EjemploStack() {
  return (
    <Stack gap={3} className="mx-auto" style={{ maxWidth: '800px' }}>
    
      <Stack.Group>
        <div className="bg-primary text-white p-3">
            Elemento 1 en el grupo 1
          </div>
      </Stack.Group>
    </Stack>
  );
}

export default EjemploStack;

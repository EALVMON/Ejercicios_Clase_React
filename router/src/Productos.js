import React, { useState } from 'react';

function Productos() {
  const [productos, setProductos] = useState([
    { id: 1, nombre: 'Camiseta', precio: 19.99 },
    { id: 2, nombre: 'Pantalón', precio: 29.99 },
  ]);

  return (
    <div>
      <h1>Nuestros Productos</h1>
      <ul>
        {productos.map(producto => (
          <li key={producto.id}>
            {producto.nombre} - ${producto.precio}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Productos;

import React, { useState, useEffect } from 'react';

function Lecturajson() {
  const [items, setItems] = useState([]);

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);


  // lectrura de los datos del Fichero json
  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch('./articulos_navideños.json');
      const data = await response.json();
      setItems(data);
    };

    fetchItems();
  }, []);

  // Añadimos los articulos al carrito
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  // Renderiza los artículos en el carrito
  const renderCart = () => (
    <div >
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.nombre} - {item.precio.toFixed(2)}€
              </li>
            ))}
          </ul>
        </>
      )}
      <button onClick={() => setShowCart(false)}>Cerrar</button> {/* para controlar si se ve o no el carrito  cuando da a cerra lo pongo en false*/}
    </div>
  );


  return (
    <div>
      <h1>Lista de Articulos Navideños</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <strong>{item.nombre} </strong>:
            <p>{item.descripcion} - {item.precio.toFixed(2)} €</p>
            <button onClick={() => addToCart(item)}>Añadir al carrito</button> {/*Cuando presiona añade el item al array cart */}
          </li>
        ))}
      </ul>
      <button onClick={() => setShowCart(true)}>Ver Carrito ({cart.length})</button> {/* Cuando se da al boton se pone en verdadero que esta mostrnado el carrito */}
      {showCart && renderCart()} {/* ve va a la funcion rendercart para mostrar el carrito*/}
    </div>
  );

}

export default Lecturajson;

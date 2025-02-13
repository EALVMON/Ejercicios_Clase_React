import React, { useState, useEffect } from 'react'
import "./CargarProductos.css"




const CargarProductos = () => {

    const [productos, setProductos] = useState([])
    const [carrito, setCarrito] = useState([])
    const [verCarrito, setVerCarrito] = useState(false)
    // Funcion para cargar los productos en el Array

    const carga = async () => {
        try {
            const response = await fetch('./articulos_navideños.json');
            const data = await response.json();
            setProductos(data);
        } catch (error) {
            console.error('Error al cargar los productos:', error);
        }
       

    };

    useEffect(() => {
        carga();

    }, []);

    // funcion añadir al carrito 

    const aniadir = (item) => {
        setCarrito((prevCarr) => [...prevCarr, item]);


    };

    // ver los articulos que tiene el carrito

    const articulosCarr = () => {
        return(
        <div>
            <h1> ARTICULOS DEL CARRITO</h1>
            {carrito.length === 0 ? (
                <p> El carrito esta vacio</p>
            ) : (
                <ul>
                    {carrito.map((item, index) =>
                        <li key={index}>
                            {item.nombre} - {item.precio.toFixed(2)} Euros

                        </li>

                    )};

                </ul>

            )}

            <button onClick={() => setVerCarrito(false)}> Cerrar</button>


        </div>
        )
    };

    return (
        <>
            <div>
                <h1>PRODUCTOS</h1>


                {productos.map(producto => (

                    <div key={producto.id} className='productos'>

                        <p > Indentificador: {producto.id}</p>
                        <p > Nombre: {producto.nombre}</p>
                        <p> Descripcion: {producto.descripcion}</p>
                        <p> Precio: {producto.precio}</p>
                        <button onClick={()=> aniadir(producto)}> Añadir al carrito</button>
                    </div>

                ))};
                <button onClick={()=> setVerCarrito(true)}> VER CARRITO ({carrito.length}) </button>
             
                {verCarrito && articulosCarr()}
                
            </div>


        </>

    );



};

export default CargarProductos;
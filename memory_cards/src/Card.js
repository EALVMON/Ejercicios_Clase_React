import React, { useState, useEffect } from 'react';

function Card({ data, indice, handler }) {// una funcion que va a recibir data

    return (  // me devuelve un div que contiene una imagen md 3 para que me ocupe 4 en cada columna

        <div className='col-md-3 col-12' onClick={() => handler(indice)}>
            <img
                src={data.state == 0 ? './Dorso.jpg' : data.imagen}
                style={{ width: '90%', height: '90%' }}
                alt="Carta"
            />

        </div>

    )
};
export default Card;
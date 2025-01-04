import React, { useState, useEffect } from 'react';

function Lecturajson() {
  const [listaVuelos, setListaVuelos] = useState([]);

  


  // lectrura de los datos del Fichero json
  useEffect(() => {
    const cargarFichero = async () => {
      const response = await fetch('./vuelos.json');
      const data = await response.json();
      setListaVuelos(data);
    };

    cargarFichero();
  }, []);

  


  return (
    <div>
      <h1>Lista de Vuelos</h1>

      <ul>
        {listaVuelos.map((vuelo, index) =>(
          <li key={index}> <strong>{vuelo.destination} </strong>
             <ul>
                {vuelo.flights.map((vuelos,indexVuelos) => (
                <li key={indexVuelos}>Numero {vuelos.number},
                                      Fecha {vuelos.date}, 
                                      Hora {vuelos.time},                                       
                                      Asientos {vuelos.seats}    

                </li>

                
                ))}
            </ul>

          </li>
        ))}



      </ul>
      
      
    </div>
  );

}

export default Lecturajson;

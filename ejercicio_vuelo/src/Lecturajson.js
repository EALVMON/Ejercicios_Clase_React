import React, { useState, useEffect } from 'react';
import NuevoVuelo from './NuevoVuelo';
import PanelVuelo from './PanelVuelo';
function Lecturajson() {
  const [listaVuelos, setListaVuelos] = useState([]);
  const [selectorVuelo, setSelectorVuelo] = useState([]);


  const obtenerVuelos = async () => {
    const response = await fetch('./vuelos.json');
    const data = await response.json();
    data.map((destination) => destination.flights.map((vuelo) => {vuelo["plazas disponibles"] = vuelo.seats; vuelo ["plazas Ocupadas"] = 0; vuelo["destino"] = destination.destination;}));
    setListaVuelos(data);
  };

  


  // lectrura de los datos del Fichero json
  useEffect(() => {

      if (listaVuelos.length == 0){

        obtenerVuelos();
      }
    
    }, []);

  

    const ocuparPlaza=(id) =>{
      let aux = listaVuelos;
      let i = 0;
      for (i=0;i<aux.length;i++){

            aux[i].flights.map((vuelo)=>{
              if (vuelo["number"]==id){
                if( vuelo["plazas ocupadas"]<vuelo["seats"]) {
                    vuelo["plazas ocupadas"]=vuelo["plazas ocupadas"]+1;
                    vuelo["plazas disponible"]=vuelo["plazas disponibles"]-1;
                    setSelectorVuelo({"destino": vuelo["destino"], "number": vuelo["number"],"date":vuelo["date"],"seats":vuelo["seats"]})
                }
              }
            }
            
            )
      }
      setListaVuelos(aux);
    }
   
    const liberarPlaza=(id) =>{
      let aux = listaVuelos;
      let i = 0;
      for (i=0;i<aux.length;i++){

            aux[i].flights.map((vuelo)=>{
              if (vuelo["number"]==id){
                if( vuelo["plazas ocupadas"]<=vuelo["seats"] && vuelo["plazas ocupadas"]>0) {
                    vuelo["plazas ocupadas"]=vuelo["plazas ocupadas"]-1;
                    vuelo["plazas disponible"]=vuelo["plazas disponibles"]+1;
                    setSelectorVuelo({"destino": vuelo["destino"], "number": vuelo["number"],"date":vuelo["date"],"seats":vuelo["seats"]})
                }
              }
            }
            
            )
      }

      setListaVuelos(aux);
    }
    const checkUniqueId=(id)=>{
      let flag =true;
      
      let i = 0;
      for (i=0;i<listaVuelos.length;i++){
        listaVuelos[i].flights.map((vuelo)=>{
            if (vuelo["number"]== id)
              flag=false;
          })
      }
      return flag;
    }

    const anadirVuelo= (destination,date,time,number,seats)=>{
      if (checkUniqueId(number)){

      let nuevoVuelo = {"destino": destination, "number": number, "date":date, "seats": seats,"plazas ocupadas": 0 , "plazas disponibles": seats,"time":time };
      let aux = listaVuelos;
      let i= 0;
      let flag= false;
      for (i=0;i<aux.length;i++){
          if (aux[i].destination == destination){
            aux[i].flights= [...aux[i].flights,nuevoVuelo];
            flag =true;

          }
      }
      if (!flag){
        aux =[...listaVuelos,{"destination":destination, "flights":[nuevoVuelo]}];
      }
      setListaVuelos([...aux]);
    }

    }

const eliminarVuelo=(number)=>{
  let aux = listaVuelos;
  let i = 0;
  for (i=0;i<aux.length;i++)
  {
    let j = 0;
    for (j=0;j<aux[i].flights.length;j++)
      if (aux[i].flights[j] == number){
        aux[i].flights = aux[i].flights.splice(j);
      }

  }
  setListaVuelos([...aux]);

}


  return (
    <>

  <h1>Lista de Vuelos</h1>
    <div className='container item-left'>     

      <ul>
        {listaVuelos.map((destino) =>
              <ul class="flight-list">
                <span class="flight-destination"> <strong> {destino.destination} </strong></span> {
                  destino.flights.map((vuelo) => 
                                <li key={vuelo.number}>
                                  <span class="flight-date">{vuelo.date}</span>
                                  <span class="flight-number"> {vuelo.number} </span>
                                  <button onClick={()=> setSelectorVuelo(vuelo)}>Selecionar</button>
                                  <button onClick={()=> eliminarVuelo(vuelo)}>Selecionar</button>
                                </li>)}
      </ul>)}
      </ul>
    </div>
   

    <div className='container item-left'>
     {selectorVuelo!=undefined && !Object.keys(selectorVuelo).length==0 && <PanelVuelo item={selectorVuelo} handlerIncrementar={ocuparPlaza} handlerDecrementar={liberarPlaza}></PanelVuelo>}

    </div>
    <NuevoVuelo handler={anadirVuelo}></NuevoVuelo>
    </>
  );

}

export default Lecturajson;

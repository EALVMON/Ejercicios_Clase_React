import React,{useState,useRef,useEffect} from "react";
import "./PanelVuelo.css"

function PanelVuelo ( {item,handlerIncrementar,handlerDecrementar})
{

return(
<div className='flight-details cards'>
    <div>
        <h3>{item.destino}</h3>
    </div>
    <div className="card-body">
        <ul>
            <li> <strong>Date</strong>: {item.date}</li>
            <li>Time : {item.time}</li>
            <li>Plazas : {item.seats}</li>
            <li>Plazas disponibles : {item["plazas disponibles"]}</li>
            <li>Plazas Ocupadas : {item["plazas ocupadas"]}</li>
            <button onClick={()=> handlerIncrementar(item.number)}>Ocupar</button>
            <button onClick={()=> handlerDecrementar (item.number)}>Liberar</button>

        </ul>

    </div>


</div>


);


}
export default PanelVuelo;
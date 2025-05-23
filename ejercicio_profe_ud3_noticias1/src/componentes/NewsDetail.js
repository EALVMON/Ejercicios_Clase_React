import React, { useContext, useEffect, useState } from 'react';
import { NewsContext } from '../NewsProvider';
import { useParams } from "react-router";
import {  Card } from 'react-bootstrap';

function NewsDetail() {
    const { newsItems, addToNewsList, removeFromNewsList } = useContext(NewsContext);
    const params = useParams();

    const [title, setTitle] = useState("");
    const [categoria, setCategoria] = useState("");
    const [contenido, setContenido] = useState("");
    const [autor, setAutor] = useState("");
    const [fecha, setFecha] = useState("");

    useEffect (() => {
      let aux = null;
      if(newsItems&&newsItems.length>0)
      {
        
        let i=0;
        for(i=0;i<newsItems.length;i++)
        {
            if(newsItems[i]&&newsItems[i].id==parseInt(params.id))
            {
              aux = newsItems[i];
            }
            
        }
       
        console.log(aux);
        }
        if (aux!=null)
        { 
        setTitle(aux.titulo);
        setCategoria(aux.categoria);
        setFecha(aux.fecha);
        setContenido(aux.contenido);
        setAutor(aux.autor);
        }
        else{
          setTitle("No se sabe");
          setCategoria("Categoria por defecto");
          setFecha("");
          setContenido("");
          setAutor("");
          
        }
    }, [newsItems, params.id])
   
  return (
    <Card>
         <Card.Header>
                <Card.Title>{title}</Card.Title>
        </Card.Header> 
        <Card.Body>
                <Card.Text> {categoria} -{fecha}  -{autor}                     
                </Card.Text> 
                <Card.Text> {contenido}
                </Card.Text> 
        </Card.Body> 
    </Card>
  );
}

export default NewsDetail;

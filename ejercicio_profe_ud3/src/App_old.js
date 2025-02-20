import logo from './logo.svg';
import './App.css';
import { use, useEffect, useState } from 'react';
import { Col, ListGroup , Container, Image, Row} from 'react-bootstrap';
import Pelicula from './Pelicula';
import MenuNavegacion from './MenuNavegacion'

function App() {
  
  const [peliculas, setPeliculas] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [directores, setDirectores] = useState([]);
  const [selectedPeliculas, setSelectedPeliculas] = useState();




  const loadPeliculas=async() =>{
      const response = await fetch("http://localhost:3000/peliculas.json");
      const json = await response.json();
      setPeliculas(json);     
  }

  useEffect( ()=>{
    loadPeliculas();    
  }, []);

  useEffect( ()=>{
    if (peliculas!=null&&peliculas.length>0)
    { 
      setSelectedPeliculas(peliculas[0]);
    }
    let aux_categorias= [];
    let aux_directores= [];
    let i=0;
    for( i=0;i<peliculas.length;i++)
      {
          if(peliculas[i].categoria instanceof Array)
          {
              peliculas[i].categoria.map(categoria=> {if(aux_categorias.indexOf(categoria)<0) aux_categorias.push(categoria)}) ;
          }
          else{
               if(aux_categorias.indexOf(peliculas[i].categoria)<0) aux_categorias.push(peliculas[i].categoria);
          }
          if(aux_directores.indexOf(peliculas[i].director)<0) aux_directores.push(peliculas[i].director);
      } 
      setCategorias(aux_categorias);
      setDirectores(aux_directores);
    
  }, [peliculas, setPeliculas]);


  return (
    <Container>
      <MenuNavegacion categorias={categorias} directores={directores}></MenuNavegacion>
      <Row>
        <Col md={8}> 
          {selectedPeliculas&&<Image src={selectedPeliculas.foto} className='altumax'></Image>}          
        </Col>
        <Col md={4}> 
          {selectedPeliculas&&<div>
              <h2>{selectedPeliculas.titulo}</h2>
              <ListGroup>
                <ListGroup.Item>Director - {selectedPeliculas.director}</ListGroup.Item>
                <ListGroup.Item>Actores - {selectedPeliculas.actoresPrincipales}</ListGroup.Item>
                <ListGroup.Item>Sinopsis - {selectedPeliculas.sinopsis}</ListGroup.Item>                
              </ListGroup>
          </div>

          }
        </Col>
      </Row>
      <Row >
        {peliculas.map(pelicula =><Pelicula data={pelicula} handler={setSelectedPeliculas}></Pelicula>)}
          
      </Row>

    </Container>
  );
}

export default App;


import './App.css';
//import { Container, Row, Col } from 'react-bootstrap';
import Grid from './gridSystem';
import MyGrid from './Ejemplo1Grid';
import MyGrid2 from './EjemploGrid2';
import BasicStack from './Stacks';
import HorizontalMarginStartExample from './Stack2';
//import EjemploStack from './Stack3';
import TypesExample from './componentes/botones';
import ProductCard from './componentes/card';
import BasicExample from './componentes/accordionEj1';
import AllCollapseExample from './componentes/accordionE2';
import NavbarSimple from './componentes/navBarSimple'
import MyNavbar from './componentes/navbarCollapsed';

function App() {

  return (
    <>
      <head>
        <title>Ejemplo Bootstrap - Espaciado</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"></link>


      </head>

      <body class="p-4">
        <div class="bg-warning container">
          <h2 class="mb-4">Ejemplo de Espaciado en Bootstrap Profesora</h2>
          <div class="bg-danger text-white  m-3">Este elemento tiene un margen de 3rem en todos los lados.</div>
          <div class="bg-primary text-white p-2">Este elemento tiene un relleno de 2rem en todos los lados.</div>
          <div class="bg-secondary text-white mt-4">Este elemento tiene un margen superior de 4rem.</div>
          <div class="bg-success text-white mx-auto">Este elemento está centrado horizontalmente.</div>
          <div class="bg-danger text-white p-3 md:p-5">
            Este elemento tiene un relleno de 3rem en todas las pantallas.
            En pantallas medianas (md) o más grandes, el relleno aumenta a 5rem.
          </div>
        </div>
        <div class="container">
          <h2 class="mb-4">Ejemplo de Espaciado en Bootstrap IA</h2>

          <div class="bg-primary text-white p-3 mt-3">Margen superior (mt-3)</div>
          <div class="bg-secondary text-white p-3 mb-4">Margen inferior (mb-4)</div>
          <div class="bg-success text-white p-3 mx-5">Margen en X (mx-5)</div>
          <div class="bg-danger text-white p-3 ms-4 me-2">Margen en inicio (ms-4) y final (me-2)</div>
          <div class="bg-warning text-dark py-2">Padding en Y (py-2)</div>
          <div class="bg-info text-white p-3">Padding en todos los lados (p-3)</div>
        </div>

        <div class="container">
          <h2 class="mb-4">Ejemplo de Espaciado Responsivo</h2>
          <div class="bg-primary text-white p-3 mt-0 mt-sm-2 mt-md-3 mt-lg-4 mt-xl-5">
            Margen superior (mt) cambia según el tamaño de la pantalla
          </div>
          <div class="bg-secondary text-white p-3 mb-0 mb-sm-2 mb-md-3 mb-lg-4 mb-xl-5">
            Margen inferior (mb) cambia según el tamaño de la pantalla
          </div>
          <div class="bg-success text-white p-3 mx-0 mx-sm-2 mx-md-3 mx-lg-4 mx-xl-5">
            Margen horizontal (mx) responsivo
          </div>
          <div class="bg-danger text-white py-1 py-sm-2 py-md-3 py-lg-4 py-xl-5">
            Padding en Y (py) responsivo
          </div>
          <div class="bg-warning text-dark p-1 p-sm-2 p-md-3 p-lg-4 p-xl-5">
            Padding en todos los lados (p) responsivo
          </div>
        </div>
      <NavbarSimple/>
      <MyNavbar/>
      <Grid></Grid>
      <MyGrid/>
      <MyGrid2/>
      <BasicStack/>
      <HorizontalMarginStartExample/>
      <TypesExample/>
      <ProductCard/>
     <BasicExample/>
     <AllCollapseExample/>
     
     
     
      {/* No funciona debe tener problemas de librerias <EjemploStack/>*/}


      </body>

    </>
  );
}

export default App;

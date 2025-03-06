import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
//import './Layout.css';
import { Outlet } from 'react-router';

const  Layout =()=>{
    return (
        <div className="App">
          <header>
        <ul>
            <li><a href="/" >Home</a></li>
            <li><a href="/productos " >Productos</a></li>
            <li><a href="/About" >About</a></li>
        </ul>
          </header>
    
          <section className="hero">
            <Container>
              <Row>
                <Col>
                  <h1>Because there is no planet B</h1>
                  <p> Act Green, Live Green.</p>
                </Col>
              </Row>
              <Row>
                <Col>
            <Outlet />
           </Col>
              </Row>
    
            </Container>
          </section>
    
          <footer>
            {/* Información de contacto y enlaces */}
          </footer>
        </div>
      );
};
export default Layout

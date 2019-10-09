import React from 'react';
import './App.css';

import Users from './components/Users';
import { Container, Col, Row, Jumbotron, Navbar, Nav } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

 
library.add( faStar);

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Dash <FontAwesomeIcon icon="star" />  App </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#mystars">My Stars</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
        </Nav>
        
      </Navbar>
      <Container className="border-1">
          <Jumbotron>
            <h1 className="text-center">React Dash Stars App</h1>
          </Jumbotron>
          <Row>            
            <Col>
              <Users/>
            </Col>
          </Row>     
        </Container>
    </>
  );
}

export default App;

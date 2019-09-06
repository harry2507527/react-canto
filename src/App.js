import React, { useState } from 'react';
import './App.css';
import Synthesis from './Pages/Synthesis'
import Learn from './Pages/Learn'
import { Button, Container, Jumbotron, Navbar, Row, Col } from 'react-bootstrap';


function App() {

  return (
    <>
      <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">粵語學習機</Navbar.Brand>
      </Navbar>
      <Synthesis></Synthesis>
      <Learn></Learn>

    </>
  );
}

export default App;

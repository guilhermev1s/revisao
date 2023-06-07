import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Cabecalho = () => {

  return (
    <Navbar bg="dark" expand="lg">
      <Container fluid >
        <Navbar.Brand href="#" className='text-white' >Pagina Inicial</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
           
          >

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Pesquisar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Cabecalho
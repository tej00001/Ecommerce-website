import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import classes from "./Register.module.css";

const Register = () => {
  return (
    <>
      <Navbar bg="dark" expand="sm" variant="dark" sticky="top">
        <Container className="justify-content-center">
          <Nav>
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#store">STORE</Nav.Link>
            <Nav.Link href="#about">ABOUT</Nav.Link>
          </Nav>
        </Container>
        <Nav className="justify-content-end me-4 btn btn-dark btn-outline-warning text-white">
          <Nav.Link>Cart</Nav.Link>
        </Nav>
      </Navbar>

      <Navbar variant="dark" bg="secondary" expand="lg">
        <Container className="justify-content-center ">
          <Navbar.Brand>
            <h1>The Generics</h1>
          </Navbar.Brand>
        </Container>
      </Navbar>

      <div className={classes.title}>
        <h1>Music</h1>
      </div>
    </>
  );
};

export default Register;

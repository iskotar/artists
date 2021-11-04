import React from 'react';
import {Badge, Container, Nav, Navbar} from "react-bootstrap";
import {useReactiveVar} from "@apollo/client";
import {favoritesVar} from "../cache";

const Header = () => {
  const cartItems = useReactiveVar(favoritesVar);

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <b className='text-dark bg-white rounded px-2 me-2 fs-3'>A</b>
        <Navbar.Brand href="/">ARTISTS</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">
            Home
          </Nav.Link>
          <Nav.Link href="/favorites">
            Favorites <Badge bg="secondary">{cartItems.length}</Badge>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
};

export default Header;

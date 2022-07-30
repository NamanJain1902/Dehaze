import React from 'react'
import {Navbar, Container,Nav,Offcanvas} from "react-bootstrap"
function Navigation() {
  return (
<Navbar style={{backgroundColor: "#BFFFF0"}} expand={false}>
  <Container fluid>
    <Navbar.Brand href="/"><strong>Dehazing Satelite Images</strong></Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
  )
}

export default Navigation
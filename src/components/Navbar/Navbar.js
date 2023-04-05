import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const MyNavbar = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">Poses</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/auth/login">Login</Nav.Link>
          <Nav.Link href="/auth/register">Register</Nav.Link>
          <Nav.Link href="/auth/logout">Logout</Nav.Link>
          <Nav.Link href="/catalog">Catalog</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;

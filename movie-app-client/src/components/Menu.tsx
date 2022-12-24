import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <Navbar bg="light" variant="light" expand="lg">
        <Container>
          <Navbar.Brand to="/" as={NavLink}>
            MoviesInTheaters
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto">
              <Nav.Link to="/movies" as={NavLink}>
                Coming soon
              </Nav.Link>
              <Nav.Link to="/topRatedMovies" as={NavLink}>
                Top Rated Movies
              </Nav.Link>
              <Nav.Link to="/topRatedIndianMovies" as={NavLink}>
                Top Rated Indian Movies
              </Nav.Link>
              <Nav.Link to="/favourites" as={NavLink}>
                Favourites
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;

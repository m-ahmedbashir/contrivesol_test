import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

function Header() {
  // cart context
  const { cart } = useContext(CartContext);

  return (
    // responsive navbar
    <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
      <Container>
        <Navbar.Brand className="text-black">
          <Link to="/" className="text-decoration-none text-dark">
            HomeBar
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end "
        >
          <Nav>
            <Nav.Link>
              <Link to="/cart">
                <button className="btn btn-outline-info">
                  <AiOutlineShoppingCart />
                  {cart.items.length}
                </button>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

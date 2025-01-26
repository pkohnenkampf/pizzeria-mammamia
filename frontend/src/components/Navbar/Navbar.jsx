import { useContext } from 'react';
import { Navbar as NavbarBootstrap, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext';

const Navbar = () => {
    const { totalPrice } = useContext(CartContext);
    const token = false;
    const formatTotal = (amount) => amount.toLocaleString('es-ES');

    return (
        <NavbarBootstrap expand="lg" className="sticky-top navbar-dark bg-dark px-5">
            <NavbarBootstrap.Brand href="#home">Pide tu pizza 👉</NavbarBootstrap.Brand>
            <NavbarBootstrap.Toggle aria-controls="basic-navbar-nav" />
            <NavbarBootstrap.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Link to="/" >
                    <Button variant="outline-light" className="me-2">🍕 Home</Button>
                </Link>
                {token ? (
                <>
                <Link to='/profile'>
                    <Button variant="outline-light" className="me-2">🔓 Profile</Button>
                </Link>
                    <Button variant="outline-light" className="me-2">🔒 Logout</Button>
                </>
                ) : (
                <>
                <Link to='/login'>
                    <Button variant="outline-light" className="me-2">🔐 Login</Button>
                </Link>
                <Link to='/register'>
                    <Button variant="outline-light" className="me-2">🔐 Register</Button>
                </Link>
                </>
                )}
            </Nav>
            <Nav className="ms-lg-auto">
                <Link to='/cart'>
                    <Button className="w-lg-auto mt-2 mt-lg-0" variant="outline-info" href="#link">
                    🛒 Total: ${formatTotal(totalPrice)}
                    </Button>
                </Link>
            </Nav>
            </NavbarBootstrap.Collapse>
        </NavbarBootstrap>
    );
};

export default Navbar;
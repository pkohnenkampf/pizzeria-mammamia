import { Navbar as NavbarBootstrap, Nav, Button } from 'react-bootstrap';


const Navbar = () => {
    const total = 25000;
    const token = false;
    const formatTotal = (amount) => amount.toLocaleString('es-ES');

    return (
        <NavbarBootstrap expand="lg" className="sticky-top navbar-dark bg-dark px-5">
            <NavbarBootstrap.Brand href="#home">Pide tu pizza 👉</NavbarBootstrap.Brand>
            <NavbarBootstrap.Toggle aria-controls="basic-navbar-nav" />
            <NavbarBootstrap.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Button variant="outline-light" href="#" className="me-2">🍕 Home</Button>
                {token ? (
                <>
                    <Button variant="outline-light" href="#" className="me-2">🔓 Profile</Button>
                    <Button variant="outline-light" href="#" className="me-2">🔒 Logout</Button>
                </>
                ) : (
                <>
                    <Button variant="outline-light" href="#" className="me-2">🔐 Login</Button>
                    <Button variant="outline-light" href="#" className="me-2">🔐 Register</Button>
                </>
                )}
            </Nav>
            <Nav className="ms-lg-auto">
                <Button className="w-lg-auto mt-2 mt-lg-0" variant="outline-info" href="#link">
                🛒 Total: ${formatTotal(total)}
                </Button>
            </Nav>
            </NavbarBootstrap.Collapse>
        </NavbarBootstrap>
    );
};

export default Navbar;
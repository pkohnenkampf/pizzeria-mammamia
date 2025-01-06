import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Button } from "react-bootstrap";

const NotFound = () => {
  return (
    <Container >
        <h1>Error 404</h1>
        <h2>Pagina no existe</h2>
        <Link to='/'>
            <Button variant='outline-danger' >
                Ver las pizzas! 🍕
            </Button>
        </Link>
    </Container>
  )
}

export default NotFound
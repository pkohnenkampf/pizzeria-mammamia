import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Button } from "react-bootstrap";

const Profile = () => {
  return (
    <Container fluid="md" className='d-flex flex-wrap justify-content-md-center'>
        <h1 style={{width: "100%"}}>Tu perfil</h1>
        <h2 style={{width: "100%"}}>Usuario: usuariodemo@dl.com</h2>
        <div style={{width: "100%"}}>
            <Link to='/'>
                <Button variant='outline-primary' >🔒 Logout</Button>
            </Link>
        </div>
    </Container>
  )
}

export default Profile
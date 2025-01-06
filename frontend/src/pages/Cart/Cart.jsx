import React, { useState } from "react";
import { pizzaCart as pizzas } from "../../data/pizzas";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

const Cart = () => {
      const [carrito,setCarrito] = useState (pizzas)
      const [total,setTotal] = useState (carrito.map(item => item.count * item.price).reduce((suma,iteracion) => suma + iteracion,0))
    
      const agregaPizza = (idPizza) => {
        const newCarrito = [...carrito]
        let newTotal = total + 0
    
        const index = newCarrito.findIndex(pizza => pizza.id === idPizza)
        newCarrito[index].count +=1
        newTotal += newCarrito[index].price
        
        setCarrito (newCarrito)
        setTotal(newTotal)
      }

      const quitarPizza = (idPizza) => {
        const newCarrito = [...carrito]
        let newTotal = total + 0
    
        const index = newCarrito.findIndex(pizza => pizza.id === idPizza)
        newTotal -= newCarrito[index].price
    
        if (newCarrito[index].count > 1) {
          newCarrito[index].count -=1
        } else if (newCarrito[index].count === 1) {
          newCarrito.splice(index, 1)
        }
        
        setCarrito (newCarrito)
        setTotal(newTotal)
      } 

    return (
        <Container>
            <Row>
                <Col>
                <h1 className="text-left p-2">Detalles del pedido</h1>
                </Col>
            </Row>
            
            {pizzas.map((pizza) => (
                <Row>
                    <Card key={pizza.id} xs={12} sm={12} md={10} lg={10} className="mb-4 d-flex flex-row p-0" >
                        <Card.Img variant="top" src={pizza.img} style={{width: '150px'}} className="rounded-top rounded-bottom"/>
                        <Card.Body className="d-flex flex-row align-items-cente" >
                            <Card.Title className="title-pizza mb-0 d-flex align-items-center" style={{width: "150px"}}>{pizza.name}</Card.Title>
                            <div className="d-flex flex-row align-items-center">
                                <p className="fs-5 fw-normal mb-0 pr-2">Precio: ${pizza.price}</p>
                                <div className="d-flex justify-content-around align-items-center" style={{marginLeft:"20px"}}>
                                        <Button
                                            className="btn-lg"
                                            variant="outline-danger"
                                            size="sm"
                                            onClick={()=>quitarPizza(pizza.id)}
                                        >
                                            -
                                        </Button>
                                        <span className="mx-2">{pizza.count}</span>
                                        <Button
                                            className="btn-lg"
                                            variant="outline-primary"
                                            size="sm"
                                            onClick={()=>agregaPizza(pizza.id)}

                                        >
                                            +
                                        </Button>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Row>
            ))}

            <Row className="d-flex">
                <Col className=" p-2">
                    <h3 className="mt-2">Total: ${total}</h3>
                    <Button variant="secondary" className="mt-2 mb-3" size="lg">
                        Pagar
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Cart;
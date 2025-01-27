import { useContext, useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";
import { UserContext } from "../../context/UserContext";

const Cart = () => {
    const { cart, addToCart, removeFromCart, totalPrice } = useContext(CartContext);
    const { token } = useContext(UserContext);
    const [loading, setLoading] = useState(false); 

    const handlePayment = async () => {
        if (!token) {
            alert("Debes iniciar sesión para realizar el pago."); 
            return;
        }
        if (cart.length === 0) {
            alert("😔 No has agregado ninguna pizza al carro"); 
            return;
        }

        setLoading(true);

        try {
            const response = await fetch('http://localhost:5000/api/checkouts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`, 
                },
                body: JSON.stringify({ cart }), 
            });

            if (!response.ok) {
                const errorResult = await response.json(); 
                throw new Error(errorResult.message || 'Error al procesar el pago');
            }

            const result = await response.json();
            alert("¡Listo! Ya pediste tus pizzas, te mantendremos al tanto del estado de tu pedido.");
            cart.forEach(pizza => removeFromCart(pizza.id)); 

            console.log("Compra realizada con éxito:", result);
        } catch (error) {
            console.error(error);
            alert("Hubo un error al procesar tu pago. Inténtalo de nuevo.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container>
            <Row>
                <Col>
                <h1 className="text-left p-2">Detalles del pedido</h1>
                </Col>
            </Row>
            
            {cart.map((pizza) => (
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
                                            onClick={()=>removeFromCart(pizza.id)}
                                        >
                                            -
                                        </Button>
                                        <span className="mx-2">{pizza.count}</span>
                                        <Button
                                            className="btn-lg"
                                            variant="outline-primary"
                                            size="sm"
                                            onClick={()=>addToCart(pizza.id)}

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
                    <h3 className="mt-2">Total: ${totalPrice}</h3>
                    <Button variant="secondary" className="mt-2 mb-3" size="lg" disabled={loading} onClick={handlePayment}>
                        {loading ? "Procesando..." : "Pagar"}
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Cart;
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Pizza = () => {
    const { id } = useParams();
    const [pizza, setPizza] = useState(null);
    const urlPizza = `http://localhost:5000/api/pizzas/${id}`;
    const {name, price, img, desc, ingredients } = pizza;

    const getPizza = async () => {
        try {
            const response = await fetch(urlPizza);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setPizza(data);
        } catch (error) {
            console.error("Error fetching pizza data", error);
        }
    }

  useEffect(() => {
    getPizza();
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center">
    <Container className="m-3">
    <Row className="border rounded align-items-center">
      <Col>
        <Image className="object-fit-lg-contain" src={img} alt={name} fluid />
      </Col>
      <Col>
        <h1 className="title-pizza">{name}</h1>
        <p className="fw-light fs-6">{desc}</p>
        <ul className="fw-light"
          style={{
            listStyleType: "none",
          }}
        >
          {ingredients.map((ingredient, index) => {
            const isLast = index === ingredients.length - 1;
  
            return (
              <li key={index}> 🍕 {' '}
                {ingredient.trim().charAt(0).toUpperCase() + ingredient.trim().slice(1)}
                {isLast ? "" : " "}
              </li>
            );
          })}
        </ul>
        <div className="d-flex justify-content-around  align-items-center">
          <p className="fs-4 fw-normal">Precio: ${price}</p>
          <Button variant="dark"
            size="sm"
          >
            Añadir  🛒
          </Button>
        </div>
      </Col>
    </Row>
  </Container>
  </div>
  );
};

export default Pizza;
import { useState, useEffect } from "react";
import { Row, Col } from 'react-bootstrap';
import Header from "../components/Header/Header";
import CardPizza from "../components/CardPizza/CardPizza";


const Home = () => {
  const [pizzas,setPizzas] = useState([]);
  const urlPizzas = 'http://localhost:5000/api/pizzas';

  const getDatos = async () => {
    const response = await fetch(urlPizzas)
    const datos = await response.json()
    setPizzas(datos)
  }

  useEffect(() => {
    getDatos()
  },[])

  return (
    <>
      <Header /> 
      <div className='container'>
        <Row className="justify-content-center py-4 gx-5">
          {pizzas.map((pizza) =>
            <Col xs={12} sm={9} md={6} lg={4} key={pizza.id} className="cardPizza">
              <CardPizza
                id={pizza.id}
                name= {pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
              />
            </Col>
          )}
        </Row>
      </div>
    </>
  );
}

export default Home;
import { Card, Button } from 'react-bootstrap';
import "./card-pizza.css";

const CardPizza = (props) => {
  const { id, price, img, name, ingredients } = props;
  return (
      <Card id={id}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="title-pizza">{name}</Card.Title>
          <div className="separator"></div>
          <Card.Text className="mb-3 ingredients-desc">
            <span className="fs-5 fw-light">Ingredientes: </span>
            <p className="fs-6">🍕{ingredients.join(", ")}</p>

          </Card.Text>
          <div className="separator"></div>
          <div className="mt-auto text-center">
            <p className="fs-5 fw-normal">Precio: ${price}</p>
            <div className="d-flex justify-content-around">
              <Button variant="light" className="border border-3">
                Ver Más 👀
              </Button>
              <Button variant="dark" className="border border-3">
                Añadir 🛒
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
  );
}

export default CardPizza;
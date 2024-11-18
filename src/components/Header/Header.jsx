import "./header.css";

const Header = () => {
    return (
        <div className="container-fluid justify-content-center bg-header">
            <div className="content-header">
                <h1 className="content-header--title">¡Pizzería Mamma Mia!</h1>
                <p className="content-header--description">¡Tenemos las mejores pizzas que podrás encontrar!</p>
            </div>
        </div>
    );
}

export default Header;
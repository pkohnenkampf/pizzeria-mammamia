import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
//import Register from "./components/Register/Register";
//import Login from "./components/Login/Login";
import Cart from './components/Cart/Cart';
import Home from './Home';


const App = () => {
  return (
    <main>
      <Navbar />
      {/* <Home /> */}
      {/* <Register /> */}
      { /*<Login />*/}
      <Cart />
      <Footer />
    </main>
  )
}

export default App;
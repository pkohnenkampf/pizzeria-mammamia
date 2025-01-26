import { useContext } from "react";
import Cart from "./pages/Cart/Cart";
import Pizza from "./pages/Pizza/Pizza";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Profile from "./pages/Profile/Profile"; 
import NotFound from "./components/NotFound/NotFound"; 
import { Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/UserContext.jsx";
import { CartProvider } from './context/CartContext.jsx';
import { Guard } from "./guard/Guard";

export default function App() {
  return (
    <UserProvider>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/p001" element={<Pizza />} />
          <Route
            path="/profile"
            element={
              <Guard>
                <Profile />
              </Guard>
            }
          />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </CartProvider>
    </UserProvider>
  );
}
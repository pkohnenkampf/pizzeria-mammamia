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

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/p001" element={<Pizza />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}
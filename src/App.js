import { NavLink, Route, Routes } from "react-router-dom";
import AddToCart from "./addToCart/AddToCart";
import Modal from "./createModal/modal";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/modal">Modal</NavLink> ||
        <NavLink to="/addtocart"> Add to Cart</NavLink>
      </nav>
      <Routes>
        <Route path="/modal" element={<Modal />} />
        <Route path="/addtocart" element={<AddToCart />} />
      </Routes>
    </div>
  );
}

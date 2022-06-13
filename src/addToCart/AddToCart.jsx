import { useState } from "react";
import { products } from "../database/products";
import "./cart.css";

export default function AddToCart() {
  const [cartItems, setCartItems] = useState([]);

  const cartHandler = (prod) => {
    const itemExists = cartItems.find((item) => item.id === prod.id);
    itemExists
      ? setCartItems(
          cartItems.map((item) =>
            item.id === prod.id ? { ...item, count: item.count + 1 } : item
          )
        )
      : setCartItems((item) => [...item, { ...prod, count: 1 }]);
  };

  const removeFromCart = (item) => {
    setCartItems(cartItems.filter((prod) => prod.id !== item.id));
  };

  return (
    <div className="cartPage">
      <h3>Products</h3>
      <div className="products">
        {products.map((prod) => (
          <div className="prod-card">
            <p>{prod.name}</p>
            <p>{prod.price}</p>
            <button onClick={() => cartHandler(prod)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <h3>Cart</h3>
      <div className="cart">
        {cartItems?.map((item) => (
          <div className="prod-card">
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>{item?.count}</p>
            <button onClick={() => removeFromCart(item)}>
              Remove from Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

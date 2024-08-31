import React, { useContext } from "react";
import { CartContext, useCart } from "../context/Cart";

const Cart = () => {
  // const cart = useContext(CartContext);
  const cart = useCart();
  const total = cart.item.reduce((a, b) => a + (b.price), 0);

   
   
  return (
    <div className="cart">
      <h1>Cart</h1>
      {cart &&
        cart.item.map((ele) => (
          <li key={ele.id}>
            {ele.name} - $ {ele.price}
          </li>
        ))}

      <h5>Total Bill: $ {total}</h5>
    </div>
  );
};

export default Cart;

import React, {  useContext } from 'react';
import { CartContext, useCart } from '../context/Cart';


const List = (props) => {
    // const cart = useContext(CartContext);
    const cart = useCart();
    console.log(cart);
  return (
    <div className='item-card'>
        <h4>{props.id}. {props.name}</h4>
        <p>Price: ${props.price}</p>
        <button onClick={()=>cart.setItem([...cart.item,{name: props.name, price: props.price}])}>Add to Cart</button>
    </div>
  )
}

export default List
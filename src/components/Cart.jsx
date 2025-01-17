import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions/action'; 

function Cart() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h3 className='container mb-5 mt-5'>Shopping Cart</h3>
      <ul className='container mt-5'>
        {Array.isArray(cartItems) &&
          cartItems.map((item) => (
            <li className='mt-3' key={item.id}>
              {item.title} - ${item.price}
              <button   className='btn btn-outline-danger mx-2 ' onClick={() => dispatch(removeFromCart(item.id))}>
                Remove
              </button>
              <button   className='btn btn-outline-danger mx-2 ' onClick={() => dispatch(removeFromCart(item.id))}>
                Add
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Cart;

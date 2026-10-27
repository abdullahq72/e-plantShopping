import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice.jsx';
import Navbar from './Navbar.jsx';

function CartItem({ onNavigate }) {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Total cost of one line (unit price x quantity).
  const calculateTotalCost = (item) => item.cost * item.quantity;

  // Total cost of everything in the cart.
  const calculateTotalAmount = () =>
    cart.reduce((total, item) => total + calculateTotalCost(item), 0);

  const handleIncrement = (item) =>
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));

  const handleDecrement = (item) =>
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));

  const handleRemove = (item) => dispatch(removeItem(item.name));

  const handleCheckout = (e) => {
    e.preventDefault();
    alert('Coming Soon');
  };

  return (
    <div>
      <Navbar onNavigate={onNavigate} current="cart" />

      <div className="cart-container">
        <h2 className="cart-total">Total Cart Amount: ${calculateTotalAmount()}</h2>

        {cart.length === 0 && <p className="cart-empty">Your cart is empty.</p>}

        <div>
          {cart.map((item) => (
            <div className="cart-item" key={item.name}>
              <img className="cart-item-image" src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-cost">Unit price: ${item.cost}</div>
                <div className="cart-item-quantity">
                  <button
                    className="cart-item-button"
                    onClick={() => handleDecrement(item)}
                    aria-label={`Decrease quantity of ${item.name}`}
                  >
                    -
                  </button>
                  <span className="cart-item-quantity-value">{item.quantity}</span>
                  <button
                    className="cart-item-button"
                    onClick={() => handleIncrement(item)}
                    aria-label={`Increase quantity of ${item.name}`}
                  >
                    +
                  </button>
                </div>
                <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
                <button className="cart-item-delete" onClick={() => handleRemove(item)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-actions">
          <button
            className="get-started-button1"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('plants');
            }}
          >
            Continue Shopping
          </button>
          <button className="get-started-button1" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;

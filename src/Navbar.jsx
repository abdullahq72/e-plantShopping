import React from 'react';
import { useSelector } from 'react-redux';

// Shared navbar used on both the Product Listing and Cart pages.
function Navbar({ onNavigate, current }) {
  const totalItems = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  const link = (view, label) => (
    <a
      href="#"
      className={current === view ? 'nav-link active' : 'nav-link'}
      onClick={(e) => {
        e.preventDefault();
        onNavigate(view);
      }}
    >
      {label}
    </a>
  );

  return (
    <nav className="navbar">
      <div className="navbar-brand" onClick={() => onNavigate('home')}>
        <img src="plants/snake.svg" alt="Paradise Nursery logo" className="navbar-logo" />
        <div>
          <h3>Paradise Nursery</h3>
          <i>Where Green Meets Serenity</i>
        </div>
      </div>
      <div className="navbar-links">
        {link('home', 'Home')}
        {link('plants', 'Plants')}
        <a
          href="#"
          className={current === 'cart' ? 'nav-link active' : 'nav-link'}
          onClick={(e) => {
            e.preventDefault();
            onNavigate('cart');
          }}
          aria-label={`Cart with ${totalItems} items`}
        >
          <span className="cart-icon">
            <svg viewBox="0 0 256 256" height="32" width="32" aria-hidden="true">
              <rect width="256" height="256" fill="none"></rect>
              <circle cx="80" cy="216" r="12"></circle>
              <circle cx="184" cy="216" r="12"></circle>
              <path
                d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></path>
            </svg>
            <span className="cart_quantity_count">{totalItems}</span>
          </span>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;

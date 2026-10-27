import React, { useState } from 'react';
import ProductList from './ProductList.jsx';
import CartItem from './CartItem.jsx';
import AboutUs from './AboutUs.jsx';
import './App.css';

function App() {
  // 'home' = landing page, 'plants' = product listing, 'cart' = shopping cart
  const [view, setView] = useState('home');

  if (view === 'plants') return <ProductList onNavigate={setView} />;
  if (view === 'cart') return <CartItem onNavigate={setView} />;

  return (
    <div className="app-container">
      <div className="landing-page">
        <div className="background-image"></div>
        <div className="content">
          <div className="landing_content">
            <h1>Welcome To Paradise Nursery</h1>
            <div className="divider"></div>
            <p>Where Green Meets Serenity</p>
            <button className="get-started-button" onClick={() => setView('plants')}>
              Get Started
            </button>
          </div>
          <div className="aboutus_container">
            <AboutUs />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

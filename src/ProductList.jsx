import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice.jsx';
import Navbar from './Navbar.jsx';

// 3 categories x 6 unique plants each.
const plantsArray = [
  {
    category: 'Air Purifying Plants',
    plants: [
      { name: 'Snake Plant', image: 'plants/snake.svg', description: 'Produces oxygen at night, improving air quality.', cost: 15 },
      { name: 'Spider Plant', image: 'plants/spider.svg', description: 'Filters formaldehyde and xylene from the air.', cost: 12 },
      { name: 'Aloe Vera', image: 'plants/aloe.svg', description: 'Purifies the air and soothes minor burns.', cost: 14 },
      { name: 'Peace Lily', image: 'plants/peace.svg', description: 'Removes mold spores and brightens any room.', cost: 18 },
      { name: 'ZZ Plant', image: 'plants/zz.svg', description: 'Thrives on neglect and tolerates low light.', cost: 25 },
      { name: 'Golden Pothos', image: 'plants/pothos.svg', description: 'Trailing vine that removes common toxins.', cost: 10 },
    ],
  },
  {
    category: 'Aromatic Fragrant Plants',
    plants: [
      { name: 'Lavender', image: 'plants/lavender.svg', description: 'Calming scent, popular for relaxation.', cost: 20 },
      { name: 'Jasmine', image: 'plants/jasmine.svg', description: 'Sweet floral fragrance that fills a room.', cost: 18 },
      { name: 'Rosemary', image: 'plants/rosemary.svg', description: 'Fragrant herb that is great in the kitchen.', cost: 15 },
      { name: 'Mint', image: 'plants/mint.svg', description: 'Fresh, cooling aroma and easy to grow.', cost: 12 },
      { name: 'Sweet Basil', image: 'plants/basil.svg', description: 'Sweet, peppery scent loved in cooking.', cost: 9 },
      { name: 'Lemon Balm', image: 'plants/lemonbalm.svg', description: 'Lemony aroma that attracts pollinators.', cost: 14 },
    ],
  },
  {
    category: 'Succulents and Cacti',
    plants: [
      { name: 'Cactus', image: 'plants/cactus.svg', description: 'Needs very little water and loves sun.', cost: 8 },
      { name: 'Jade Plant', image: 'plants/jade.svg', description: 'Said to bring good luck and prosperity.', cost: 16 },
      { name: 'Echeveria', image: 'plants/echeveria.svg', description: 'Rosette-shaped succulent in soft colors.', cost: 13 },
      { name: 'Haworthia', image: 'plants/haworthia.svg', description: 'Compact, striped and happy indoors.', cost: 11 },
      { name: "Burro's Tail", image: 'plants/burro.svg', description: 'Trailing stems that look great in hanging pots.', cost: 17 },
      { name: 'String of Pearls', image: 'plants/string.svg', description: 'Bead-like leaves that cascade over the pot.', cost: 19 },
    ],
  },
];

function ProductList({ onNavigate }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = (name) => cartItems.some((item) => item.name === name);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div>
      <Navbar onNavigate={onNavigate} current="plants" />

      <div className="product-grid">
        {plantsArray.map((group) => (
          <section key={group.category} className="category">
            <h1 className="category-title">
              <div>{group.category}</div>
              <div className="category-underline"></div>
            </h1>
            <div className="product-list">
              {group.plants.map((plant) => {
                const added = isInCart(plant.name);
                return (
                  <div className="product-card" key={plant.name}>
                    <img className="product-image" src={plant.image} alt={plant.name} />
                    <h3 className="product-title">{plant.name}</h3>
                    <p className="product-description">{plant.description}</p>
                    <div className="product-price">${plant.cost}</div>
                    <button
                      className="product-button"
                      onClick={() => handleAddToCart(plant)}
                      disabled={added}
                    >
                      {added ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default ProductList;

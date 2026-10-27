# Paradise Nursery Shopping Application

**Project name:** Paradise Nursery
**Tagline:** Where Green Meets Serenity

Paradise Nursery is an online plant shop built with React, Redux Toolkit and Vite. Shoppers can browse houseplants by category, add them to a shopping cart, and manage quantities and totals.

## Features

- Landing page with the company name, an About Us section and a "Get Started" button
- Product listing with 18 houseplants across 3 categories (Air Purifying, Aromatic Fragrant, Succulents and Cacti)
- "Add to Cart" buttons that add the plant, disable themselves once added, and update the cart icon count
- Navbar on the Product Listing and Cart pages with links to Home, Plants and Cart
- Cart page with per-plant thumbnail, name, unit price and total, increase/decrease buttons, delete button, total cart amount, a Checkout button ("Coming Soon") and a Continue Shopping button

## Project structure

| File | Purpose |
| --- | --- |
| `src/App.jsx` | Landing page and view switching |
| `src/App.css` | Styles, including the landing page background image |
| `src/AboutUs.jsx` | Company details |
| `src/CartSlice.jsx` | Redux slice for the shopping cart |
| `src/ProductList.jsx` | Product listing page |
| `src/CartItem.jsx` | Shopping cart page |
| `src/Navbar.jsx` | Shared navbar with the cart icon count |
| `src/store.js` | Redux store |

## Getting started

```bash
npm install
npm run dev
```

Build for production with `npm run build`.

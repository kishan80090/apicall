import React from 'react';
import './shop.css';
import { FaSearch, FaUserCircle, FaShoppingCart, FaStore } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const categories = [
  { name: 'Grocery', img: 'https://img.icons8.com/fluency/48/soap.png' },
  { name: 'Mobiles', img: 'https://img.icons8.com/fluency/48/iphone.png' },
  
  {
    name: 'Electronics', img: 'https://img.icons8.com/fluency/48/laptop.png',
    // subcategories: ['Mobiles', 'Laptops', 'Cameras']
  },
  {
    name: 'Home & Furniture', img: 'https://img.icons8.com/fluency/48/armchair.png',
    // subcategories: ['Sofa', 'Beds', 'Dining']
  },
  // { name: 'Appliances', img: 'https://img.icons8.com/fluency/48/microwave.png' },

  {
    name: 'Beauty, Toys & More', img: 'https://img.icons8.com/fluency/48/teddy-bear.png',
    // subcategories: ['Beauty', 'Toys', 'Sports']
  },
  {
    name: 'Two Wheelers', img: 'https://img.icons8.com/fluency/48/motorcycle.png',
    // subcategories: ['Bikes', 'Scooters']
  }
];

const Search = () => {
  return (
    <div>
      
      <div className="flipkart-header">
        <div className="top-row">
          <div className="left">
            <h2 className="logo">
              <span className="logo-main">flipkart</span><br />
              <span className="logo-sub">Explore <span className="plus">Plus</span></span>
            </h2>
          </div>

          <div className="search-box">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Search for Products" className="search-input" />
          </div>

          <div className="right">
            <div className="icon-text">
              <FaUserCircle />
              <span>Login</span>
            </div>
            <div className="icon-text">
              <FaShoppingCart />
              <span>Cart</span>
            </div>
            <div className="icon-text">
              <FaStore />
              <span>Become a Seller</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="category-bar">
        {categories.map((cat, index) => (
          <div className="category-item" key={index}>
            <img src={cat.img} alt={cat.name} className="category-icon" />
            <span className="category-name">
              {cat.name} {cat.subcategories && <span className="dropdown-arrow"></span>}
            </span>
            {cat.subcategories && (
              <div className="dropdown-menu">
                {cat.subcategories.map((sub, idx) => (
                  <div className="dropdown-item" key={idx}>{sub}</div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

<div className="carousel-container mt-3">
  <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner rounded-3">
      <div className="carousel-item active">
        <img src="pic/tree.jpg" className="d-block w-100 carousel-image" alt="Slide 1" />
      </div>
      <div className="carousel-item">
        <img src="pic/tree.jpg" className="d-block w-100 carousel-image" alt="Slide 2" />
      </div>
      <div className="carousel-item">
        <img src="pic/tree.jpg" className="d-block w-100 carousel-image" alt="Slide 3" />
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>
  </div>
  );
};
export default Search;
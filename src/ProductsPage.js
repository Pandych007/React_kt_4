import React from 'react';
import { Link } from 'react-router-dom';
import StarRating from './StarRating';
import './ProductsPage.css';


const ProductsPage = ({ products }) => {
  return (
    <div className="products-grid">
    
      {products.map(product => (
        <div key={product.id} className="product-card">
          // Изображение продукта
          <img src={product.image} alt={product.title} className="product-image" />
          // Название продукта
          <h3>{product.title}</h3>
          // Цена продукта
          <p>Price: ${product.price}</p>
          // Рейтинг продукта с помощью компонента StarRating
          <StarRating rating={product.rating.rate} />
          // Ссылка на страницу деталей продукта
          <Link to={`/product/${product.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};


export default ProductsPage;

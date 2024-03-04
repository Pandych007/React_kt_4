import React from 'react';
import { Link } from 'react-router-dom';


const NotFoundPage = () => {
  return (
    <div>
       React_KT_4
      <h2>404 - Not Found</h2>
      Сообщение об ошибке
      <p>The page you're looking for does not exist.</p>
       Ссылка на страницу продуктов
      <Link to="/products">Go to Products</Link>
    </div>
  );
};


export default NotFoundPage;

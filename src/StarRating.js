import React from 'react';


const StarRating = ({ rating }) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      
      stars.push(<span key={i}>★</span>);
    } else {
    
      stars.push(<span key={i}>☆</span>);
    }
  }
  
  return <div>{stars}</div>;
};


export default StarRating;

import React from 'react';
import './Checkoutproduct.css';
import { useStateValue } from './Stateprovider';

// Destructure the props directly in the function signature
function Checkoutproduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = (id) => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    });
  };

  return (
    // Add the className for overall styling
    <div className="checkoutProduct">
      <img src={image} alt={title} className="checkoutProduct_image" />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
          {/* Create an array of length 'rating' and map over it to render stars */}
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐️</p>
            ))}
        </div>
        <button onClick={() => removeFromBasket(id)} className="checkoutProduct_button">Remove from Basket</button>
      </div>
    </div>
  );
}

export default Checkoutproduct;
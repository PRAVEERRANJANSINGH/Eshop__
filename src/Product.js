import React from 'react';
import { useStateValue } from './Stateprovider';
import './Product.css'; // Assuming you have a CSS file for styling the Product component
function Product({ id, title, price, rating, image }) {
  // Function to handle adding the product to the basket
  const [state, dispatch] = useStateValue();
  const addToBasket = () => {
    // Dispatch an action to add the item to the basket
    dispatch({
  type: "ADD_TO_BASKET",
  item: {
    id,
    title,
    price: Number(price),
    rating,
    image,
  },
});
  };

  return(
<div>
  <div className="product">
    <div className="product_info">
      <p className="product_title">{title}</p>
      <p className="product_price">{price}</p>
      <div className="product_rating">{"⭐️".repeat(rating)}</div>
    </div>
    <img src={image} alt="Product" className="product_image"/>
    <button onClick={addToBasket} className="product_button">Add to Basket</button>
      </div>
  </div>
  )
}
export default Product;

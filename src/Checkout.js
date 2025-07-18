import React from 'react';
import './Checkout.css';
import Checkoutproduct from './Checkoutproduct';
import Subtotal from './Subtotal.js';
import { useStateValue } from './Stateprovider';
function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://www.billboard.com/wp-content/uploads/media/lana-del-rey-jared-leto-gucci-2019-billboard-1548.jpg?w=942&h=623&crop=1"
          alt="Ad Banner"
        />
        
        <div className="checkout_title">
          <h2>Your Shopping Basket</h2>
        </div>

  {basket.map(item => (
            <Checkoutproduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
            />
        ))}
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
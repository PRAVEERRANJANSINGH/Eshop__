import React from 'react';
import CurrencyFormat from 'react-currency-format';
import './Subtotal.css';
import { useStateValue } from './Stateprovider';
import { getBasketTotal } from './Reducer';

function Subtotal() {
  const [{ basket }] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={value => (
          <>
            <p>Subtotal</p>
            <p>Items: {basket?.length || 0}</p>
            <p>Total: {value + 0}</p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
    </div>
  );
}

export default Subtotal;

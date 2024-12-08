import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Prac1 = ({ userId }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCart = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:5000/cart/${userId}`);
        setCart(response.data.cart);
        setTotal(response.data.total);
      } catch (error) {
        console.error('Error fetching cart:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCart();
  }, [userId]);

  return (
    <div>
      <h2>Cart</h2>
      {loading ? (
        <p>Loading cart...</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                <strong>{item.name}</strong>: {item.quantity} × ${item.price} = ${item.subtotal}
              </li>
            ))}
          </ul>
          <h3>Total: ${total}</h3>
        </>
      )}
    </div>
  );
};

export default Prac1;

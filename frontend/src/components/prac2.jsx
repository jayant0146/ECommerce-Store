import React, { useState } from 'react';
import axios from 'axios';

const Prac2 = ({ userId }) => {
  const [productId, setProductId] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState('');

  const addToCart = async () => {
    try {
      const response = await axios.post(`http://localhost:5000/cart/${userId}`, {
        productId,
        quantity: parseInt(quantity),
      });
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error adding to cart:', error);
      setMessage(error.response?.data?.error || 'Failed to add item to cart.');
    }
  };

  return (
    <div>
      <h2>Add to Cart</h2>
      <div>
        <label>Product ID:</label>
        <input
          type="text"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
        />
      </div>
      <div>
        <label>Quantity:</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>
      <button onClick={addToCart}>Add to Cart</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Prac2;

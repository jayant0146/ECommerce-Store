import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDiscountPage = () => {
  const [n, setN] = useState(0);  // The threshold for every nth order
  const [discountCodes, setDiscountCodes] = useState([]);

  // Fetch the discount codes on component mount
  useEffect(() => {
    const fetchDiscountCodes = async () => {
      try {
        const response = await axios.post('http://localhost:5000/admin/discount-code', { nthOrder: n });
        setDiscountCodes(response.data.discountCodes);
      } catch (error) {
        console.error('Error fetching discount codes:', error);
      }
    };
    fetchDiscountCodes();
  }, []);

  // Handle form submission to generate discount codes
  const handleGenerateDiscount = async (e) => {
    e.preventDefault();

    if (!n) {
      alert('enter value of n');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/admin/discount-code', { nthOrder: n });
      setDiscountCodes(response.data.discountCodes);  // Update the UI with the newly generated codes
    } catch (error) {
      console.error('Error generating discount codes:', error);
    }
  };

  return (
    <div>
      <h1>Admin Discount Code Generator</h1>
      <form onSubmit={handleGenerateDiscount}>
        <div>
          <label>Threshold (n):</label>
          <input
            type="number"
            value={n}
            onChange={(e) => setN(e.target.value)}
            min="1"
            required
          />
        </div>
        <button type="submit">Generate Discount Code</button>
      </form>

      <h2>Generated Discount Codes</h2>
      <table>
        <thead>
          <tr>
            <th>Code</th>
            <th>Discount Percentage</th>
            <th>Used</th>
          </tr>
        </thead>
        <tbody>
          {discountCodes.map((code) => (
            <tr key={code.code}>
              <td>{code.code}</td>
              <td>{code.discountPercentage}%</td>
              <td>{code.used ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDiscountPage;

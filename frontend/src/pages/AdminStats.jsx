import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminStatsPage = () => {
  const [stats, setStats] = useState({
    totalItemsPurchased: 0,
    totalPurchaseAmount: 0,
    totalDiscountAmount: 0,
    discountCodes: [],
  });

  // Fetch stats when component mounts
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get('http://localhost:5000/admin/stats');
        setStats(response.data);
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div>
      <h1>Admin Stats Dashboard</h1>
      <div className="stats-container">
        <div className="stat-item">
          <h2>Total Items Purchased</h2>
          <p>{stats.totalItemsPurchased}</p>
        </div>
        <div className="stat-item">
          <h2>Total Purchase Amount</h2>
          <p>${stats.totalPurchaseAmount.toFixed(2)}</p>
        </div>
        <div className="stat-item">
          <h2>Total Discount Amount</h2>
          <p>${stats.totalDiscountAmount.toFixed(2)}</p>
        </div>
        <div className="discount-codes">
          <h2>Discount Codes</h2>
          <table>
            <thead>
              <tr>
                <th>Code</th>
                <th>Discount Percentage</th>
                <th>Used</th>
              </tr>
            </thead>
            <tbody>
              {stats.discountCodes.map((code) => (
                <tr key={code.code}>
                  <td>{code.code}</td>
                  <td>{code.discountPercentage}%</td>
                  <td>{code.used ? 'Yes' : 'No'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminStatsPage;

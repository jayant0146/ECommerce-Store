import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// Styled components for the dashboard
const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 30px;
`;

const StatCard = styled.div`
  flex: 1;
  min-width: 250px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const StatTitle = styled.h2`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 10px;
`;

const StatValue = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: #007bff;
`;

const DiscountCodesSection = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHeader = styled.th`
  background-color: #007bff;
  color: white;
  padding: 10px;
  text-align: left;
  font-size: 1rem;
`;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f4f4f4;
  }
`;

const EmptyMessage = styled.p`
  text-align: center;
  font-size: 1rem;
  color: #777;
`;

const AdminStats = () => {
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

  return (<>
    <Container>
      <Title>Admin Stats Dashboard</Title>

      {/* Statistics Cards */}
      <StatsContainer>
        <StatCard>
          <StatTitle>Total Items Purchased</StatTitle>
          <StatValue>{stats.totalItemsPurchased}</StatValue>
        </StatCard>

        <StatCard>
          <StatTitle>Total Purchase Amount</StatTitle>
          <StatValue>${stats.totalPurchaseAmount.toFixed(2)}</StatValue>
        </StatCard>

        <StatCard>
          <StatTitle>Total Discount Amount</StatTitle>
          <StatValue>${stats.totalDiscountAmount.toFixed(2)}</StatValue>
        </StatCard>
      </StatsContainer>

      {/* Discount Codes Table */}
      <DiscountCodesSection>
        <h2>Discount Codes</h2>
        {stats.discountCodes.length > 0 ? (
          <Table>
            <thead>
              <tr>
                <TableHeader>Code</TableHeader>
                <TableHeader>Discount Percentage</TableHeader>
                <TableHeader>Used</TableHeader>
              </tr>
            </thead>
            <tbody>
              {stats.discountCodes.map((code) => (
                <TableRow key={code.code}>
                  <TableCell>{code.code}</TableCell>
                  <TableCell>{code.discountPercentage}%</TableCell>
                  <TableCell>{code.used ? 'Yes' : 'No'}</TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
        ) : (
          <EmptyMessage>No discount codes available.</EmptyMessage>
        )}
      </DiscountCodesSection>
    </Container>
    </>
  );
};

export default AdminStats;

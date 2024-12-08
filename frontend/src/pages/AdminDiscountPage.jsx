import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// Styled components for the page
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
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: 600;
  color: #333;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 100%;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const Button = styled.button`
  padding: 12px 20px;
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
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
  font-size: 1.1rem;
  text-align: left;
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

const Card = styled.div`
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
`;

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
  }, [n]);

  // Handle form submission to generate discount codes
  const handleGenerateDiscount = async (e) => {
    e.preventDefault();

    if (!n) {
      alert('Please enter a value for n');
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
    <Container>
      <Title>Admin Discount Code Generator</Title>

      {/* Discount Code Generation Form */}
      <Card>
        <Form onSubmit={handleGenerateDiscount}>
          <div>
            <Label>Threshold (n):</Label>
            <Input
              type="number"
              value={n}
              onChange={(e) => setN(e.target.value)}
              min="1"
              required
            />
          </div>
          <Button type="submit">Generate Discount Code</Button>
        </Form>
      </Card>

      {/* Discount Codes Table */}
      <Card>
        <h2>Generated Discount Codes</h2>
        <Table>
          <thead>
            <tr>
              <TableHeader>Code</TableHeader>
              <TableHeader>Discount Percentage</TableHeader>
              <TableHeader>Used</TableHeader>
            </tr>
          </thead>
          <tbody>
            {discountCodes.length > 0 ? (
              discountCodes.map((code) => (
                <TableRow key={code.code}>
                  <TableCell>{code.code}</TableCell>
                  <TableCell>{code.discountPercentage}%</TableCell>
                  <TableCell>{code.used ? 'Yes' : 'No'}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan="3">No discount codes generated yet.</TableCell>
              </TableRow>
            )}
          </tbody>
        </Table>
      </Card>
    </Container>
  );
};

export default AdminDiscountPage;

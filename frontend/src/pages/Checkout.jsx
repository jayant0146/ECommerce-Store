import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";

// Styled Components
const Container = styled.div`
  max-width: 800px;
  margin: 50px auto;
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

const ItemCard = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const ItemDetail = styled.p`
  font-size: 1rem;
  color: #555;
  margin: 5px 0;
  & > b {
    color: #000;
  }
`;

const Summary = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px;
  margin-top: 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const SummaryText = styled.p`
  font-size: 1.2rem;
  color: #333;
  margin: 10px 0;
`;

const TotalText = styled.h2`
  text-align: right;
  font-size: 1.5rem;
  color: #007bff;
  margin-top: 20px;
`;

const Button = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const EmptyMessage = styled.div`
  text-align: center;
  color: #555;
  padding: 50px 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { items, discount, total } = location.state || { items: [], discount: 0, total: 0 };

  if (items.length === 0) {
    return (
      <Container>
        <EmptyMessage>
          <h1>No items to display</h1>
          <Button onClick={() => navigate("/")}>Back to Cart</Button>
        </EmptyMessage>
      </Container>
    );
  }

  return (<><Navbar />
    <Container>
        
      <Title>Checkout Summary</Title>
      {items.map((item) => (
        <ItemCard key={item.productId}>
          <ItemDetail>
            <b>Product:</b> {item.name}
          </ItemDetail>
          <ItemDetail>
            <b>Price:</b> ${item.price}
          </ItemDetail>
          <ItemDetail>
            <b>Quantity:</b> {item.quantity}
          </ItemDetail>
          <ItemDetail>
            <b>Subtotal:</b> ${item.subtotal}
          </ItemDetail>
        </ItemCard>
      ))}

      <Summary>
        <SummaryText>
          <b>Total Discount:</b> ${discount}
        </SummaryText>
        <TotalText>Total: ${total}</TotalText>
      </Summary>

      <Button>HAPPY SHOPPING !!!</Button>
    </Container>
    </>
  );
};

export default Checkout;

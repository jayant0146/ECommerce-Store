import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`
const Image = styled.img` 
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Title = styled.h1`
color: white;
margin-bottom: 20px;
`
const Button = styled.button`
cursor: pointer;
padding: 10px;
font-weight: bold;
font-size: 14px;
border: none;
border-radius: 10%;
`

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Link to={'/shirt-product'}>  <Button>SHOP NOW</Button>  </Link>
      </Info>
    </Container>
  );
};

export default CategoryItem

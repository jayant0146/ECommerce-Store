import React from 'react'
import { styled } from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartCheckoutSharpIcon from '@mui/icons-material/ShoppingCartCheckoutSharp';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';

const Container = styled.div`
  height: auto;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 8px 6px -6px gray;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 3px;
`;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;
  color: black;
  font-weight: bold;
  padding: 5px;
  margin-left: 25px;
`;

const Dropdown = styled.a`
  position: relative;
  display: inline-block;
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language> EN </Language>
          <SearchContainer>
            <Input placeholder='Search' />
            <SearchIcon style={{ color: "gray", fontSize: "24px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo> ECommerce Store</Logo>
        </Center>
        <Right>
            <Link to={'/cart'}>
                <MenuItem>
                    <Badge  color="primary"><ShoppingCartCheckoutSharpIcon /> CART</Badge>
                </MenuItem>
            </Link>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar

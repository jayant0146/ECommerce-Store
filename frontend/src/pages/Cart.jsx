
import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
        props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;

`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = ({ userId }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [discountCode, setDiscountCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCart = async () => {
      try {        
        const response = await axios.get(`http://localhost:5000/cart/${userId}`);
        setCart(response.data.cart);
        setTotal(response.data.total);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    fetchCart();
  }, [userId]);

  // const handleQuantity = (productId, type) => {
  //   setCart((prevCart) => {
  //     return prevCart.map((item) => {
  //       if (item.productId === productId) {
  //         let newQuantity = item.quantity;
  
  //         if (type === "increment") {
  //           newQuantity += 1; // Increment quantity
  //         } else if (type === "decrement" && newQuantity > 1) {
  //           newQuantity -= 1; // Decrement quantity, but ensure it doesn't go below 1
  //         }
  
  //         return { ...item, quantity: newQuantity }; // Return updated item with new quantity
  //       }
  //       return item; // Return other items as is
  //     });
  //   });
  // };


const handleQuantity = async (productId, type) => {
  const quantityChange = type === "increment" ? 1 : -1;

  try {
    const response = await axios.post(`http://localhost:5000/cart/quantity/${productId}`, {
      userId, // Replace with the actual user ID
      quantity: quantityChange,
    });

    // Update the cart state with the new data from the server
    console.log(response);
    setCart(response.data.cart);
    setTotal(response.data.total);
    // setCart((prevCart) =>
    //   prevCart.map((item) =>
    //     item.productId === productId
    //       ? { ...item, quantity: item.quantity + quantityChange }
    //       : item
    //   )
    // );
  } catch (error) {
    console.error("Error updating quantity:", error);
  }
};

  
  
  
  const handleCheckout = async () => {
    try {
        const response = await axios.post(`http://localhost:5000/cart/checkout/${userId}`, {
            discountCode,
        });
        console.log(response)
        const { message, order } = response.data;
        navigate("/checkout", { state: { items: order.items, discount: order.discount, total: order.total } });
        setMessage(message);
        setDiscount(order.discount)

        // Reset cart UI
        setCart([]);
        setTotal(order.total);
        setDiscountCode("");
    } catch (err) {
        console.error("Checkout Error:", err);
        setError(err.response?.data?.error || "Checkout failed.");
    }
};

  return (
    <Container>
      <Wrapper>
        <Title>WHAT I HAVE IN MY BAG :)</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag ({cart.length})</TopText> 
          </TopTexts>
          <TopButton type="filled">
            CHECKOUT NOW
          </TopButton>
        </Top>

        <Bottom>
          <Info>
            {cart.map((item, index) => (
              <Product key={index}>
                <ProductDetail>
                  <Image src={item.image || "https://via.placeholder.com/200"} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {item.name}
                    </ProductName>
                    <ProductName>
                      <b> Price:</b> {item.price}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {item.productId}
                    </ProductId>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                <ProductAmountContainer>
                  <AddCircleOutline onClick={() => handleQuantity(item.productId, "increment")} />
                  <ProductAmount>{item.quantity}</ProductAmount>
                  <RemoveCircleOutline onClick={() => handleQuantity(item.productId, "decrement")} />
                </ProductAmountContainer>

                  <ProductPrice>${item.subtotal}</ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>

          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>${total}</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
                <label>Coupon</label>
                <input
                    type="text"
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                    placeholder="Enter code"
                  />
                <button onClick={handleCheckout}> Apply </button>
            </ SummaryItem>

            <SummaryItem>
              <SummaryItemText>Discount</SummaryItemText>
              <SummaryItemPrice>${}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>${total}</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Cart;
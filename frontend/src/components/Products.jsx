import React, { useEffect, useState } from "react";
import { styled } from 'styled-components'
import Product from './Product'
import axios from "axios";

const Container = styled.div`
display: flex;
justify-content: space-between;
padding: 20px;
flex-wrap: wrap;
`

const Products = ({ userId }) => {
    const [popularProducts, setPopularProducts] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("http://localhost:5000/cart/products");
                console.log(response.data);
                setPopularProducts(response.data); // Assuming the API returns an array of products
            } catch (err) {
                console.error("Error fetching products:", err);
                setError("Failed to fetch products. Please try again later.");
            }
        };
        fetchProducts();
        
    }, []);

    return (
        <Container>
            {error ? (
                <p style={{ color: "red" }}>{error}</p>
            ) : (
                popularProducts.map((item) => <Product userId={userId} item={item} key={item.id} />)
            )}
        </Container>
    );
};

export default Products;


import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Checkout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { items, discount, total } = location.state || { items: [], discount: 0, total: 0 };

    if (items.length === 0) {
        return (
            <div>
                <h1>No items to display</h1>
                <button onClick={() => navigate("/")}>Back to Cart</button>
            </div>
        );
    }

    return (
        <div>
            <h1>Checkout Summary</h1>
            {items.map((item) => (
                <div key={item.productId}>
                    <p>
                        <b>Product:</b> {item.name}
                    </p>
                    <p>
                        <b>Price:</b> ${item.price}
                    </p>
                    <p>
                        <b>Quantity:</b> {item.quantity}
                    </p>
                    <p>
                        <b>Subtotal:</b> ${item.subtotal}
                    </p>
                    <p>
                        <b>Discount:</b> ${discount}
                    </p>
                    <hr />
                </div>
            ))}
            <h2>Total: ${total}</h2>
            <button onClick={() => navigate("/")}>Back to Cart</button>
        </div>
    );
};

export default Checkout;

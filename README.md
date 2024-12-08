# E-Commerce Store with Cart Functionality

An interactive e-commerce web application where users can browse products, add items to their cart, apply discount codes, and checkout seamlessly. The project includes admin functionalities for generating discount codes and viewing order statistics.

## Features

- View a list of popular products.
- Add products to a shopping cart.
- Apply discount codes during checkout.
- Admin functionality to generate discount codes and view order details.

---

## **API Endpoints**

### **Products**
- **GET /api/products**  
  Fetches a list of all available products.

  **Response:**
  ```json
  [
    {
      "id": 1,
      "name": "Jeans",
      "price": 1000,
      "image": "/images/jeans.jpg"
    }
  ]

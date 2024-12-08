# E-Commerce Store with Cart Functionality

An interactive e-commerce web application where users can browse products, add items to their cart, apply discount codes, and checkout seamlessly. The project includes admin functionalities for generating discount codes and viewing order statistics.

## Features

- View a list of popular products.
- Add products to a shopping cart.
- Apply discount codes during checkout.
- Admin functionality to generate discount codes and view order details.

---

## **API Endpoints**


# API Endpoints

## Products

### GET /api/products
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
```

## Cart

### POST /api/cart/:userId
Adds a product to the cart for a specific user.

**Request Body:**
```json
{  
  "productId": 1,  
  "quantity": 2  
}  
```

**Response:**
```json
{  
  "message": "Product added to cart successfully!"  
}  
```

### GET /api/cart/:userId
Retrieves the cart for a specific user.

**Response:**
```json
{  
  "cart": [  
    {  
      "productId": 1,  
      "name": "Jeans",  
      "price": 1000,  
      "quantity": 2,  
      "subtotal": 2000  
    }  
  ]  
}  
```

## Checkout

### POST /api/checkout/:userId
Processes a checkout for the user, applying an optional discount code.

**Request Body:**
```json
{  
  "discountCode": "DISCOUNT50"  
}  
```

**Response:**
```json
{  
  "message": "Order placed successfully",  
  "order": {  
    "orderId": "order-1234567890",  
    "items": [  
      {  
        "productId": 1,  
        "name": "Jeans",  
        "price": 1000,  
        "quantity": 2,  
        "subtotal": 2000  
      }  
    ],  
    "discount": 500,  
    "total": 1500  
  }  
}  
```

## Admin

### POST /api/admin/discount-codes
Generates a new discount code.

**Request Body:**
```json
{  
  "code": "DISCOUNT50",  
  "discountPercentage": 50  
}  
```

**Response:**
```json
{  
  "message": "Discount code created successfully"  
}  
```

### GET /api/admin/orders
Fetches all orders placed.

**Response:**
```json
[  
  {  
    "orderId": "order-1234567890",  
    "userId": "user-123",  
    "items": [...],  
    "total": 1500,  
    "discount": 500,  
    "discountCode": "DISCOUNT50"  
  }  
]  
```

# Setup Instructions

## 1. Clone the Repository
```bash
git clone <repository-url>  
cd e-commerce-store  
```

## 2. Install Dependencies
```bash
npm install  
```

## 3. Run the Server
```bash
node server.js  
```
The server will start at http://localhost:5000.

## 4. Run the Client
Navigate to the client directory and install dependencies:

```bash
cd client  
npm install  
npm start  
```
The client will be accessible at http://localhost:3000.
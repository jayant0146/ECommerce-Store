# E-Commerce Store with Cart Functionality

An interactive e-commerce web application where users can browse products, add items to their cart, apply discount codes, and checkout seamlessly. The project includes admin functionalities for generating discount codes and viewing order statistics.

## Features

- View a list of popular products.
- Add and Subtract products to a shopping cart.
- Checkout is easy and comfortable.
- Apply discount codes during checkout.
- Admin functionality to generate discount codes and view order details.

## Working:
### 1. Hovering over a product on the UI image will display a cart icon, allowing users to add the item to their cart. Currently, the user ID is hardcoded as `userId2`, but this value can be updated within the App component if needed.

![image](https://github.com/user-attachments/assets/706e4ce0-8171-4572-9104-be8afcf1856e)



### 2. The quantity of items can be adjusted later by navigating to the cart page.

![image](https://github.com/user-attachments/assets/e8303cf0-02c2-4a46-9c9f-798bea01e45b)




### 3. This is the admin dashboard where the discount code is generated after every nth order, nth value to be entered by admin.


![image](https://github.com/user-attachments/assets/78999ca1-684d-4c77-809f-906b95628f38)




### 4. This displays the total store statistics.


![image](https://github.com/user-attachments/assets/d5a622b7-4cca-4703-a9d6-9e99cc4bb0ad)

---

# API Endpoints

## Products

### GET /cart/products
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

### POST /cart/:userId
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

### GET /cart/:userId
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

### POST /cart/checkout/:userId
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

### POST /admin/discount-code
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

### GET /admin/stats
Fetches all orders placed and display all the details.

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
cd ecommerce-store  
```

## 2. Install Dependencies
```bash
npm install  
```

## 3. Run the Backend
```bash
cd backend
npm run server 
```
The server will start at http://localhost:5000.

## 4. Run the frontend
Navigate to the frontend directory and install dependencies:

```bash
cd frontend  
npm start  
```
The client will be accessible at http://localhost:3000.

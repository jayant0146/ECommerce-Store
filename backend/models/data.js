const data = {
    // List of items available for purchase
    products: [
      { id: 1, name: 'Jeans', price: 1000 },
      { id: 2, name: 'Trousers', price: 750 },
      { id: 3, name: 'Shirts', price: 500 },
    ],
  
    carts: {
    //   'userId1': [
    //     { productId: 1, quantity: 2 },
    //     { productId: 3, quantity: 1 }
    //   ]
    },
  
    orders: [ 
      // { orderId: 1, userId: 'userId1', items: [{ productId: 1, quantity: 2 }], total: 2000, discount: 200 }
    ],
  
    discountCodes: [ 
      { code: 'DISCOUNT10', used:false, discountPercentage: 10 }
    ],
  };
  
export default data;
  
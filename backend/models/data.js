const data = {
    // List of items available for purchase
    products: [
      { id: 1, name: 'Jeans', price: 1000,  img: "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png" },
      { id: 2, name: 'Trousers', price: 750,  img: "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png" },
      { id: 3, name: 'Shirts', price: 500,  img: "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png" },
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
  
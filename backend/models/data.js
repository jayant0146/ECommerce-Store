const data = {
    // List of items available for purchase
    products: [
      { id: 1, name: 'Jacket', price: 1000,  img: "https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png" },
      { id: 2, name: 'T-Shirts', price: 750,  img: "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png" },
      { id: 3, name: 'Shirts', price: 500,  img: "https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png" },
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
  
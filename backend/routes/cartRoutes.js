import express from "express";
import data from "../models/data.js"
const router = express.Router();

router.get('/:userId', (req, res) => {
    const { userId } = req.params;
    const cart = data.carts[userId] || []; 

    const detailedCart = cart.map((item) => {
        const product = data.products.find((p) => p.id === item.productId);
        return {
            productId: item.productId,
            name: product?.name || 'Unknown Product',
            price: product?.price || 0,
            quantity: item.quantity,
            subtotal: (product?.price || 0) * item.quantity,
        };
    });
    const total = detailedCart.reduce((sum, item) => sum + item.subtotal, 0);
    res.json({ cart: detailedCart, total });
});


// Add an item to the cart
router.post('/:userId', (req, res) => {
    const { userId } = req.params;
    const { productId, quantity } = req.body;

    const product = data.products.find((p) => p.id === productId);
    if (!product) {
        return res.status(404).json({ error: 'Product not found' });
    }

    if (!Number.isInteger(quantity) || quantity <= 0) {
        return res.status(400).json({ error: 'Invalid quantity. It must be a positive integer.' });
    }

    if (!data.carts[userId]) {
        data.carts[userId] = [];
    }

    const cartItem = data.carts[userId].find((item) => item.productId === productId);
    if (cartItem) {
        cartItem.quantity += quantity;
    } else {
        data.carts[userId].push({ productId, quantity });
    }

    res.json({ message: 'Item added to cart', cart: data.carts[userId] });
});

router.post('/checkout/:userId', (req, res) => {
    const { userId } = req.params;
    const { discountCode } = req.body;
  
    const cart = data.carts[userId];
    if (!cart || cart.length === 0) {
      return res.status(400).json({ error: 'Cart is empty. Add items to checkout.' });
    }
  
    const detailedCart = cart.map((item) => {
        const product = data.products.find((p) => p.id === item.productId);
        return {
            productId: item.productId,
            name: product?.name || 'Unknown Product',
            price: product?.price || 0,
            quantity: item.quantity,
            subtotal: (product?.price || 0) * item.quantity,
        };
    });

    let total = detailedCart.reduce((sum, item) => sum + item.subtotal, 0);
    let discount = 0;
    if (discountCode) {
        const validCode = data.discountCodes.find((code) => code.code === discountCode);
        if (!validCode) {
            return res.status(400).json({ error: 'Invalid discount code.' });
        }
        discount = total * 0.1;
        total -= discount;
        validCode.used = true;
    }
  
    const orderId = `order-${Date.now()}`;
    data.orders.push({
        orderId,
        userId,
        items: detailedCart,
        total,
        discount,
        discountCode: discountCode || null,
    });
    data.carts[userId] = [];
  
    res.json({
      message: 'Order placed successfully',
      order: {
        orderId,
        items: detailedCart,
        discount,
        total,
      },
    });
  });

export default router;
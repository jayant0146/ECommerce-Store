import express from "express";
import data from "../models/data.js"
const router = express.Router();

router.get('/:userId', (req, res) => {
  const { userId } = req.params;
  const cart = data.carts[userId] || [];
  res.json({ userId, cart });
});

// Add an item to the cart
router.post('/:userId', (req, res) => {
  const { userId } = req.params;
  const { productId, quantity } = req.body;

  const product = data.products.find((p) => p.id === productId);
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
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

export default router;

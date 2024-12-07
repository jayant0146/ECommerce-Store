import express from "express";
import data from "../models/data.js";
const router = express.Router();

// Generate a discount code
router.post('/discount-code', (req, res) => {
  const { code, discountPercentage } = req.body;

  if (data.discountCodes.find((dc) => dc.code === code)) {
    return res.status(400).json({ error: 'Discount code already exists' });
  }
  data.discountCodes.push({ code, discountPercentage, usedBy: [] });
  res.json({ message: 'Discount code created', code, discountCodes: data.discountCodes });
});


// Get admin stats
router.get('/stats', (req, res) => {
  const totalItemsPurchased = data.orders.reduce(
    (sum, order) => sum + order.items.reduce((itemSum, item) => itemSum + item.quantity, 0), 0);

  const totalPurchaseAmount = data.orders.reduce((sum, order) => sum + order.total, 0);
  const totalDiscountAmount = data.orders.reduce((sum, order) => sum + (order.discount || 0), 0);

  res.json({
    totalItemsPurchased,
    totalPurchaseAmount,
    discountCodes: data.discountCodes,
    totalDiscountAmount,
  });
});

export default router;

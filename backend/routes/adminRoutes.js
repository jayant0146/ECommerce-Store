import express from "express";
import data from "../models/data.js";
const router = express.Router();

// Generate a discount code
// router.post('/discount-code', (req, res) => {
//     const { code, discountPercentage } = req.body;

//     if (data.discountCodes.find((dc) => dc.code === code)) {
//         return res.status(400).json({ error: 'Discount code already exists' });
//     }
//     if (!code || !discountPercentage) 
//         return res.status(400).json({ error: 'Provide the code and discountPercentage' });
//     data.discountCodes.push({ code, discountPercentage, used: false });
//     res.json({ message: 'Discount code created', code, discountCodes: data.discountCodes });
// });



// Generating discount code for every nth order
router.post('/discount-code', (req, res) => {
    const { nthOrder } = req.body;
    if (!nthOrder || nthOrder <= 0) {
      return res.status(400).json({ error: 'Invalid nth order value. It must be greater than 0.' });
    }
  
    const totalOrders = data.orders.length;
    if (totalOrders > 0 && totalOrders % nthOrder === 0) {
        const discountCode = `DISCOUNT-${Date.now().toString().slice(-6)}`; 
        const values = [10, 20, 30];
        const discount = values[Math.floor(Math.random() * values.length)];   
        data.discountCodes.push({ code: discountCode, used: false, discountPercentage: discount }); 
        return res.json({
            message: 'Discount code generated successfully.',
            discountCodes: data.discountCodes
        });
    }
  
    res.status(400).json({
      message: `The nth order condition is not yet met. Total orders: ${totalOrders}, nth order: ${nthOrder}.`,
    });
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

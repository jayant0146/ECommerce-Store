import express from "express";
const router = express.Router();

// Placeholder routes
router.get('/', (req, res) => res.send('Cart API is working'));
router.post('/', (req, res) => res.send('Add item to cart'));

export default router;

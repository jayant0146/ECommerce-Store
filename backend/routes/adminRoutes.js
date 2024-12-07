import express from "express";
const router = express.Router();

// Placeholder routes
router.get('/stats', (req, res) => res.send('Admin stats API is working'));
router.post('/discount-code', (req, res) => res.send('Generate discount code'));

export default router;

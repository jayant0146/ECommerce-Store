import express from "express";
import colors from "colors";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";
import cartRoutes from "./routes/cartRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

dotenv.config();

const app = express();
connectDB();

app.use(express.json()); 
app.use(cors());
app.use('/cart', cartRoutes);
app.use('/admin', adminRoutes);

const port = process.env.PORT || 5000;
const mode = process.env.DEV_MODE;
app.listen(port, () => {
	console.log(`Server runing on ${mode} on ${port}`.bgCyan.white);
});

import express from 'express';
import pool from './config/database';
import productRoutes from './routes/productRoutes';

const app = express();
app.use(express.json());

app.use('/', productRoutes);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Product service running on port ${PORT}`));
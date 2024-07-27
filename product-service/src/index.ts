import express from 'express';
import { Pool } from 'pg';
import productRoutes from './routes/productRoutes';

const app = express();
app.use(express.json());

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || '5432'),
});

/* app.get('/products', async (req, res) => {
  // Implementación para obtener productos
});

app.post('/products', async (req, res) => {
  // Implementación para crear un producto
}); */

app.use('/', productRoutes);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Product service running on port ${PORT}`));
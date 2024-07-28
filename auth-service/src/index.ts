import express from 'express';
import authRoutes from './routes/authRoutes';
import { initializeDatabase } from './controllers/authController';
import pool from './config/database';

const app = express();
app.use(express.json());

app.use('/', authRoutes);

const waitForDb = async () => {
  let connected = false;
  while (!connected) {
    try {
      await pool.query('SELECT 1');
      connected = true;
    } catch (err) {
      console.log('Waiting for database to be ready...');
      await new Promise(resolve => setTimeout(resolve, 5000));
    }
  }
};//espera 5 segundos para ingresar un admin por default cuando logre conectar la bd al iniciiarse por primera vez

waitForDb().then(() => {
  console.log('Database is ready, starting initialization...');
  initializeDatabase();
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Auth service running on port ${PORT}`));
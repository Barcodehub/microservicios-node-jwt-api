import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

app.use('/auth', createProxyMiddleware({ target: 'http://auth-service:3001', changeOrigin: true }));
app.use('/products', createProxyMiddleware({ target: 'http://product-service:3002', changeOrigin: true }));


app.use((req, res) => {
    res.status(404).json({ message: "Not Found" });
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API Gateway running on port ${PORT}`));
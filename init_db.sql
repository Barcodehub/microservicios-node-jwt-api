-- Crear tabla de productos
CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  code VARCHAR(200) NOT NULL,
  description VARCHAR(150) NULL,
  price DOUBLE PRECISION DEFAULT NULL,  
  quantity INT NOT NULL  
);

-- Insertar datos de ejemplo en la tabla de productos
INSERT INTO products (code, description, price, quantity) VALUES
('P001', 'Producto A', 10.99, 100),
('P002', 'Producto B', 15.49, 200),
('P003', 'Producto C', 7.95, 150),
('P004', 'Producto D', 12.50, 80),
('P005', 'Producto E', 20.00, 50);

-- Crear tabla de roles
CREATE TABLE IF NOT EXISTS roles (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) UNIQUE NOT NULL
);

-- Insertar roles básicos
INSERT INTO roles (name) VALUES ('admin'), ('user')
ON CONFLICT (name) DO NOTHING;

-- Crear tabla de usuarios
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role_id INT NOT NULL,
  FOREIGN KEY (role_id) REFERENCES roles(id)
);


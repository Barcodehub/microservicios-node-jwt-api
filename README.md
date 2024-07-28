# Microservices-Based JWT Authentication and Product Management API

This project is a microservices-based API built with Node.js, Express, and PostgreSQL. It provides user authentication and basic product management functionality. The system consists of three main services: an API Gateway, an Authentication Service, and a Product Service.

## Table of Contents

- [Architecture](#architecture)
- [Services](#services)
- [Prerequisites](#prerequisites)
- [Environment Variables Setup](#environment-variables-setup)
- [Installation and Running](#installation-and-running)
- [Default Admin Credentials](#default-admin-credentials)
- [API Testing](#api-testing)


## Architecture

The application follows a microservices architecture:

- **API Gateway**: Routes requests to appropriate services
- **Auth Service**: Handles user authentication and authorization
- **Product Service**: Manages product-related operations
- **PostgreSQL**: Centralized database for all services

## Services

### API Gateway
- Routes requests to auth and product services
- Handles 404 errors for undefined routes

### Auth Service
- User registration
- User login with JWT token generation
- Role-based access control

### Product Service
- CRUD operations for products
- Role-based access to certain operations

## Prerequisites

- Node.js 
- Docker and Docker Compose
- PostgreSQL

## Environment Variables Setup

Create a `.env` file in the root directory and add the following variables:
```
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=nombre_base_datos
DB_HOST=postgres
DB_PORT=5432
JWT_SECRET=tu_secreto_jwt
```

## Installation and Running

To build and start the Docker containers:
```
docker-compose up --build
```

## Default Admin Credentials
```
  username: admin
  password: adminpassword
```

## API Testing
For testing the API endpoints, we provide a Thunder Client collection.

-Download the Thunder Client test collection by clicking [here](thunder-collection_microservices-app).

-Install the Thunder Client extension in Visual Studio Code if you haven't already.

-Import and run.

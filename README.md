# Product Inventory API

A secure RESTful API for product inventory management built with **Node.js**, **Express.js**, **MongoDB Atlas** and **Mongoose**. Features JWT-based authentication, protected CRUD routes, image uploads, filtering/search/sorting/pagination and aggregation statistics.

## Features

- **Authentication** — user registration with bcrypt password hashing, login with signed JWT
- **Protected routes** — JWT middleware guards product create / update / delete
- **Product CRUD** — full create, read, update, delete for products
- **Image upload** — Multer with disk storage, image-only filter, 2 MB limit
- **Querying** — filter by category, text search, sorting, pagination
- **Statistics** — per-category product count and average price via MongoDB aggregation
- **Security** — helmet, CORS, rate limiting, centralized error handling, 404 handler

## Project structure

```
product-inventory-api/
├── config/          # database connection
├── controllers/     # auth + product logic
├── middleware/      # JWT auth, error handler, multer upload
├── models/          # User & Product schemas
├── routes/          # auth + product routes
├── uploads/         # uploaded product images
├── server.js        # app entry point
└── .env.example     # environment template
```

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Configure environment
cp .env.example .env
# then edit .env with your MongoDB Atlas URI and JWT secret

# 3. Run the server
node server.js
# Server running on port 5000, MongoDB connected
```

## API endpoints

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/api/auth/register` | No | Register a new user |
| POST | `/api/auth/login` | No | Login, returns JWT |
| GET | `/api/products` | No | List products (filter, search, sort, paginate) |
| GET | `/api/products/:id` | No | Get one product |
| POST | `/api/products` | Yes | Create product (+ optional image) |
| PUT | `/api/products/:id` | Yes | Update product |
| DELETE | `/api/products/:id` | Yes | Delete product |
| GET | `/api/products/stats/summary` | No | Count + avg price per category |

Query example:

```
GET /api/products?category=Electronics&search=mouse&sort=-price&page=1&limit=5
```

Protected requests need the header:

```
Authorization: Bearer <jwt_token>
```

## Tech stack

Node.js · Express.js · MongoDB Atlas · Mongoose · bcryptjs · jsonwebtoken · multer · helmet · cors · express-rate-limit · express-validator · http-errors · dotenv

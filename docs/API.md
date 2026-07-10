# Clothing For U - API Documentation

## Base URL
```
http://localhost:5000/api
```

## Authentication
Uses JWT (JSON Web Tokens) for authentication.

## Endpoints

### Health Check
```
GET /health
```

### Products
```
GET /products           - Get all products
GET /products/:id       - Get product by ID
POST /products          - Create product (Admin)
PUT /products/:id       - Update product (Admin)
DELETE /products/:id    - Delete product (Admin)
```

### Users
```
POST /auth/register     - Register new user
POST /auth/login        - Login user
GET /auth/profile       - Get user profile
PUT /auth/profile       - Update user profile
```

### Orders
```
GET /orders             - Get user orders
POST /orders            - Create order
GET /orders/:id         - Get order details
PUT /orders/:id         - Update order status (Admin)
```

### Cart
```
GET /cart               - Get cart items
POST /cart              - Add to cart
PUT /cart/:itemId       - Update cart item
DELETE /cart/:itemId    - Remove from cart
```

### Payments
```
POST /payments/create-intent  - Create payment intent (Stripe)
POST /payments/confirm        - Confirm payment
```

## Response Format
```json
{
  "success": true,
  "data": {},
  "message": "Success message"
}
```

## Error Response
```json
{
  "success": false,
  "error": "Error message",
  "status": 400
}
```

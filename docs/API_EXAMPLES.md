# API Usage Examples

## Authentication

### Register
```bash
POST /api/auth/register
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "password": "password123",
  "phone": "1234567890"
}
```

### Login
```bash
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

## Products

### Get All Products
```bash
GET /api/products?category=mens&minPrice=10&maxPrice=100&search=shirt
```

### Create Product (Admin)
```bash
POST /api/products
Authorization: Bearer {token}
Content-Type: application/json

{
  "name": "Cool T-Shirt",
  "description": "High-quality t-shirt",
  "category": "mens",
  "price": 29.99,
  "discount": 10,
  "totalStock": 45
}
```

## Cart

### Add to Cart
```bash
POST /api/cart/add
Authorization: Bearer {token}
Content-Type: application/json

{
  "productId": "507f1f77bcf86cd799439011",
  "quantity": 2,
  "size": "M",
  "color": "Red"
}
```

## Payments

### Create Payment Intent
```bash
POST /api/payments/create-intent
Authorization: Bearer {token}
Content-Type: application/json

{
  "orderId": "507f1f77bcf86cd799439011"
}
```

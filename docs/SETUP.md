# Project Setup Guide

## Prerequisites
- Node.js v16+
- npm or yarn
- MongoDB (local or Atlas)
- Git

## Initial Setup

### 1. Clone Repository
```bash
git clone https://github.com/ankit00kz/clothing-foru.git
cd clothing-foru
```

### 2. Backend Setup
```bash
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Configure MongoDB URI and other settings in .env

# Start development server
npm run dev
```

### 3. Frontend Setup
```bash
cd frontend

# Install dependencies
npm install

# Create .env.local file
cp .env.local.example .env.local

# Configure API URL and Stripe key in .env.local

# Start development server
npm run dev
```

## Database Setup

### Option 1: Local MongoDB
```bash
mongod
```

### Option 2: MongoDB Atlas
1. Create account at mongodb.com/cloud/atlas
2. Create cluster and database
3. Get connection string
4. Add to MONGODB_URI in .env

## Environment Variables

### Backend (.env)
- PORT: Server port
- MONGODB_URI: Database connection string
- JWT_SECRET: Secret for JWT tokens
- STRIPE_SECRET_KEY: Stripe secret key

### Frontend (.env.local)
- NEXT_PUBLIC_API_URL: Backend API URL
- NEXT_PUBLIC_STRIPE_PUBLIC_KEY: Stripe public key

## Testing

```bash
# Backend tests
cd backend && npm test

# Frontend tests
cd frontend && npm test
```

## Deployment

See deployment guides in the respective frontend/backend directories.

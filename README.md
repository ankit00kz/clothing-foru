# Clothing For U - E-commerce Clothing Store

A modern, full-stack e-commerce platform for buying and selling clothing items.

## Project Structure

```
clothing-foru/
├── frontend/          # React/Next.js frontend
├── backend/           # Node.js/Express API
├── docs/              # Documentation
└── README.md
```

## Features

- 🛍️ Product Catalog with filters and search
- 🛒 Shopping Cart functionality
- 👤 User Authentication & Profiles
- 💳 Payment Integration (Stripe)
- 📦 Order Management
- ⭐ Product Reviews & Ratings
- 👨‍💼 Admin Dashboard
- 📱 Responsive Design

## Tech Stack

### Frontend
- Next.js 14+
- React 18+
- Tailwind CSS
- Redux Toolkit (State Management)
- Axios (HTTP Client)

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Stripe API

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB
- Stripe Account

### Installation

1. Clone the repository
```bash
git clone https://github.com/ankit00kz/clothing-foru.git
cd clothing-foru
```

2. Install backend dependencies
```bash
cd backend
npm install
```

3. Install frontend dependencies
```bash
cd ../frontend
npm install
```

### Configuration

1. Create `.env` files in both frontend and backend directories
2. Add required environment variables (see `.env.example`)

### Running the Project

**Backend:**
```bash
cd backend
npm run dev
```

**Frontend:**
```bash
cd frontend
npm run dev
```

## API Documentation

See `/docs/API.md` for complete API documentation.

## Contributing

Contributions are welcome! Please create a feature branch and submit a pull request.

## License

MIT License

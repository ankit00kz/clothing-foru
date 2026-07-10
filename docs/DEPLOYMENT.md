# Deployment Guide - Clothing For U

This guide covers deploying both the frontend and backend of the Clothing For U application.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Environment Setup](#environment-setup)
3. [Backend Deployment](#backend-deployment)
4. [Frontend Deployment](#frontend-deployment)
5. [Database Setup](#database-setup)
6. [CI/CD Pipeline](#cicd-pipeline)
7. [Monitoring & Maintenance](#monitoring--maintenance)

## Prerequisites

- Git account (GitHub)
- Node.js v16+ installed locally
- MongoDB Atlas account (cloud database)
- Stripe account (payment processing)
- Deployment platform account (Render/Railway/Vercel)
- Domain name (optional)

## Environment Setup

### Backend Environment Variables

Create a `.env` file in the `backend/` directory:

```bash
# Server Configuration
PORT=5000
NODE_ENV=production

# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/clothing-foru

# JWT Authentication
JWT_SECRET=your-super-secret-jwt-key-change-this
JWT_EXPIRE=7d

# Stripe Payment
STRIPE_SECRET_KEY=sk_live_...
STRIPE_PUBLIC_KEY=pk_live_...

# Frontend URL
FRONTEND_URL=https://yourdomain.com

# Email Configuration (Optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

### Frontend Environment Variables

Create a `.env.local` file in the `frontend/` directory:

```bash
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_live_...
```

## Backend Deployment

See [BACKEND_DEPLOYMENT.md](./BACKEND_DEPLOYMENT.md) for detailed backend deployment instructions.

## Frontend Deployment

See [FRONTEND_DEPLOYMENT.md](./FRONTEND_DEPLOYMENT.md) for detailed frontend deployment instructions.

## Database Setup

### MongoDB Atlas (Recommended)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a new cluster (M0 Free Tier)
4. Get your connection string
5. Add your IP to IP whitelist
6. Update your `MONGODB_URI` in `.env`

### Database Collections

The application will automatically create collections via Mongoose. Collections include:
- Users (authentication & profiles)
- Products (catalog items)
- Orders (transactions)
- Reviews (product ratings)

## CI/CD Pipeline

See [CI_CD.md](./CI_CD.md) for GitHub Actions setup.

## Monitoring & Maintenance

### Health Checks

Both backend and frontend should have health check endpoints:
- Backend: `GET /api/health`
- Frontend: Homepage loads successfully

### Log Monitoring

- **Backend Logs**: Check deployment platform logs (Render/Railway)
- **Frontend Logs**: Check Vercel/Netlify deployment logs
- **Error Tracking**: Consider using Sentry or similar service

### Regular Maintenance

- Monitor database storage (MongoDB Atlas dashboard)
- Check Stripe payment logs monthly
- Review user activity and sales metrics
- Keep dependencies updated (`npm audit fix`)
- Monitor uptime and response times

## Scaling Considerations

- Upgrade MongoDB plan as data grows
- Enable CDN for frontend assets
- Consider Redis cache for frequently accessed data
- Use PM2 or similar for production process management
- Set up alerts for high CPU/memory usage

## Security Checklist

- [ ] JWT_SECRET is secure (32+ characters)
- [ ] Environment variables are not committed to Git
- [ ] HTTPS is enabled on all domains
- [ ] Database credentials are rotated periodically
- [ ] API keys are stored securely
- [ ] CORS is properly configured
- [ ] Rate limiting is enabled
- [ ] SQL injection/NoSQL injection protections are in place

## Rollback Procedure

If deployment fails:

1. Check deployment logs for errors
2. Verify environment variables are correct
3. Ensure database connection is working
4. Revert to previous deployment version
5. Test on staging before production

## Support & Troubleshooting

For common issues, see troubleshooting sections in:
- [BACKEND_DEPLOYMENT.md](./BACKEND_DEPLOYMENT.md)
- [FRONTEND_DEPLOYMENT.md](./FRONTEND_DEPLOYMENT.md)
- [CI_CD.md](./CI_CD.md)

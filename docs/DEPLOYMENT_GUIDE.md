# Deployment Guide

## Frontend Deployment (Vercel)

### Steps:
1. **Push code to GitHub**
   ```bash
   git add .
   git commit -m "Final release"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to vercel.com
   - Click "New Project"
   - Select your GitHub repository
   - Configure environment variables:
     ```
     NEXT_PUBLIC_API_URL=https://your-api.com/api
     NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your_key
     ```
   - Click Deploy

### Environment Variables
```
NEXT_PUBLIC_API_URL=https://api.clothingforu.com/api
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_live_xxxxx
```

## Backend Deployment (Railway/Heroku)

### Using Railway:
1. **Sign up at railway.app**
2. **Create new project from GitHub**
3. **Select your repository**
4. **Add environment variables:**
   ```
   NODE_ENV=production
   PORT=5000
   MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/db
   JWT_SECRET=your_secret_key
   STRIPE_SECRET_KEY=sk_live_xxxxx
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your_email@gmail.com
   SMTP_PASS=your_app_password
   FRONTEND_URL=https://your-frontend.vercel.app
   ```
5. **Deploy**

## Database Setup (MongoDB Atlas)

1. **Create account at mongodb.com/cloud/atlas**
2. **Create a cluster**
3. **Create database user**
4. **Whitelist IP addresses**
5. **Get connection string**
6. **Update MONGODB_URI in environment variables**

## Domain Setup

### For Frontend (Vercel):
1. Go to project settings
2. Add custom domain
3. Update DNS records as shown

### For Backend (Railway):
1. Generate custom domain
2. Update API_URL in frontend

## SSL Certificate

- Vercel: Automatic
- Railway: Automatic
- Both support custom domains with free SSL

## Monitoring & Analytics

- **Vercel**: Built-in analytics
- **Railway**: Dashboard monitoring
- **MongoDB Atlas**: Performance insights
- **Stripe**: Transaction monitoring

## CI/CD Pipeline

Both Vercel and Railway auto-deploy on git push to main branch.

## Performance Optimization

1. **Image Optimization**
   - Use Next.js Image component
   - Enable automatic compression

2. **Caching**
   - Set cache headers
   - Use CDN for static assets

3. **Database**
   - Create indexes for frequently queried fields
   - Monitor query performance

## Backup Strategy

1. **Database Backups**
   - MongoDB Atlas automatic backups
   - Download periodic snapshots

2. **Code Backup**
   - GitHub repositories
   - Enable branch protection

## Cost Estimate

- **Frontend (Vercel)**: Free - $20/month
- **Backend (Railway)**: $5 - $50/month
- **Database (MongoDB)**: Free - $57/month
- **Email Service**: Free - $30/month
- **Stripe**: 2.9% + $0.30 per transaction
- **Total**: $30 - $150/month

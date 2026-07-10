# Backend Deployment Guide

## Deployment Options

We recommend one of these platforms:

1. **Render** (Recommended - Easy, Free tier available)
2. **Railway** (Good free tier, pay-as-you-go)
3. **Fly.io** (Global deployment)
4. **DigitalOcean App Platform** (More control)
5. **AWS** (Enterprise option)

## Option 1: Deploy to Render (Recommended)

### Step 1: Prepare Your Repository

```bash
# Ensure your code is pushed to GitHub
git add .
git commit -m "Prepare for deployment"
git push origin main
```

### Step 2: Create Render Account

1. Go to [render.com](https://render.com)
2. Sign up with GitHub account
3. Authorize Render to access your repositories

### Step 3: Create Web Service

1. Dashboard → New + → Web Service
2. Connect GitHub repository
3. Configure:
   - **Name**: `clothing-foru-backend`
   - **Environment**: `Node`
   - **Build Command**: `cd backend && npm install`
   - **Start Command**: `cd backend && npm start`
   - **Root Directory**: (leave blank or set to `backend`)

### Step 4: Add Environment Variables

In Render Dashboard:

1. Go to Service Settings → Environment
2. Add variables:

```
NODE_ENV=production
PORT=5000
JWT_SECRET=your-secret-key-here
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/clothing-foru
STRIPE_SECRET_KEY=sk_live_...
STRIPE_PUBLIC_KEY=pk_live_...
FRONTEND_URL=https://yourdomain.com
```

### Step 5: Deploy

1. Click "Deploy"
2. Monitor build logs
3. Once deployed, you'll get a public URL

### Step 6: Test Deployment

```bash
curl https://your-service.onrender.com/api/health
```

Expected response:
```json
{ "status": "Server is running", "timestamp": "2024-01-15T10:30:00Z" }
```

## Option 2: Deploy to Railway

### Step 1: Create Railway Account

1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Create new project

### Step 2: Link GitHub Repository

1. Select "Deploy from GitHub"
2. Choose your repository
3. Select the branch to deploy

### Step 3: Configure Service

```
Root Directory: backend
Start Command: npm start
Port: 5000
```

### Step 4: Add Environment Variables

In Railway Dashboard → Variables:

```
NODE_ENV=production
JWT_SECRET=your-secret-key
MONGODB_URI=your-connection-string
STRIPE_SECRET_KEY=sk_live_...
FRONTEND_URL=https://yourdomain.com
```

### Step 5: Deploy

Railway automatically deploys on push to main branch.

## Option 3: Deploy to AWS (EC2)

### Step 1: Launch EC2 Instance

1. Go to AWS EC2 console
2. Click "Launch Instance"
3. Select "Ubuntu Server 22.04 LTS"
4. Instance type: t3.micro (free tier)
5. Configure security groups:
   - SSH (22) from your IP
   - HTTP (80) - for redirects
   - HTTPS (443) - for API

### Step 2: Connect via SSH

```bash
ssh -i your-key.pem ubuntu@your-ec2-ip
```

### Step 3: Install Dependencies

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install PM2 (process manager)
sudo npm install -g pm2

# Install Nginx
sudo apt install -y nginx

# Install Let's Encrypt SSL
sudo apt install -y certbot python3-certbot-nginx
```

### Step 4: Clone and Setup Application

```bash
# Clone repository
git clone https://github.com/ankit00kz/clothing-foru.git
cd clothing-foru/backend

# Install dependencies
npm install --production

# Create .env file
echo 'NODE_ENV=production
JWT_SECRET=your-secret
MONGODB_URI=your-uri' > .env
```

### Step 5: Start with PM2

```bash
cd /home/ubuntu/clothing-foru/backend
pm2 start server.js --name "clothing-api"
pm2 startup
pm2 save
```

### Step 6: Configure Nginx

Create `/etc/nginx/sites-available/clothing-foru`:

```nginx
server {
    listen 80;
    server_name api.yourdomain.com;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable site:

```bash
sudo ln -s /etc/nginx/sites-available/clothing-foru /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### Step 7: Setup SSL

```bash
sudo certbot --nginx -d api.yourdomain.com
```

## Environment Variables Checklist

- [ ] `NODE_ENV=production`
- [ ] `JWT_SECRET` (32+ random characters)
- [ ] `MONGODB_URI` (from MongoDB Atlas)
- [ ] `STRIPE_SECRET_KEY` (from Stripe dashboard)
- [ ] `STRIPE_PUBLIC_KEY`
- [ ] `FRONTEND_URL` (CORS configuration)
- [ ] `PORT=5000`

## Troubleshooting

### Port Already in Use

```bash
lsof -i :5000
kill -9 <PID>
```

### MongoDB Connection Failed

- Verify IP is whitelisted in MongoDB Atlas
- Check connection string format
- Ensure credentials are URL-encoded

### Environment Variables Not Loading

- Verify `.env` file exists
- Check file permissions: `chmod 600 .env`
- Restart application after changes

### Stripe Keys Invalid

- Ensure keys are for correct environment (test vs live)
- Verify keys haven't been rotated
- Check for accidental whitespace

## Monitoring

### View Logs

**Render:**
```
Dashboard → Service → Logs
```

**Railway:**
```
Dashboard → Deployments → View Logs
```

**AWS EC2 with PM2:**
```bash
pm2 logs
pm2 logs clothing-api
```

### Health Check

```bash
curl https://api.yourdomain.com/api/health
```

## Auto-Deployment

Most platforms auto-deploy on push to main. To disable:

1. Go to deployment settings
2. Disable automatic deployments
3. Deploy manually via dashboard

## Database Backups

**MongoDB Atlas:**
1. Dashboard → Backups → Auto-Backup
2. Enable automatic daily backups
3. Configure 7-day retention

## Performance Tips

- Enable request compression
- Use database indexes
- Cache frequently accessed data
- Monitor response times
- Set up alerts for errors

## Next Steps

1. Deploy frontend (see FRONTEND_DEPLOYMENT.md)
2. Configure CI/CD (see CI_CD.md)
3. Set up monitoring and alerts
4. Create database backups
5. Test all API endpoints

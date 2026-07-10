# Frontend Deployment Guide

## Deployment Options

1. **Vercel** (Recommended - Optimized for Next.js)
2. **Netlify** (Good for static sites)
3. **GitHub Pages** (Free, limited)
4. **AWS S3 + CloudFront** (Scalable)
5. **DigitalOcean** (Full control)

## Option 1: Deploy to Vercel (Recommended)

### Step 1: Create Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Authorize Vercel to access repositories

### Step 2: Import Project

1. Dashboard → Add New → Project
2. Select your GitHub repository
3. Configure:
   - **Framework Preset**: Next.js
   - **Root Directory**: frontend
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`

### Step 3: Set Environment Variables

In Vercel Dashboard → Settings → Environment Variables:

```
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_live_...
```

**Note**: Variables starting with `NEXT_PUBLIC_` are exposed to the browser.

### Step 4: Deploy

1. Click "Deploy"
2. Wait for build to complete
3. Get your production URL

### Step 5: Custom Domain (Optional)

1. Go to Settings → Domains
2. Add your domain
3. Update DNS records:
   ```
   CNAME: your-app.vercel.app
   ```
4. Vercel auto-provisions SSL

### Step 6: Test

```bash
https://yourdomain.com
https://yourdomain.com/auth/login
```

## Option 2: Deploy to Netlify

### Step 1: Create Netlify Account

1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Authorize access

### Step 2: Deploy from Git

1. Sites → Add new site → Import an existing project
2. Select GitHub
3. Configure build:
   - **Base directory**: frontend
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`

### Step 3: Environment Variables

1. Site settings → Build & deploy → Environment
2. Add:
   ```
   NEXT_PUBLIC_API_URL=https://api.yourdomain.com
   ```

### Step 4: Build and Deploy

1. Click "Deploy site"
2. Monitor build logs
3. Get deployment URL

## Option 3: Deploy to AWS S3 + CloudFront

### Step 1: Export Next.js as Static

Modify `frontend/next.config.js`:

```javascript
module.exports = {
  output: 'export',
  reactStrictMode: true,
};
```

Build:

```bash
cd frontend
npm run build
```

Output will be in `out/` directory.

### Step 2: Create S3 Bucket

1. AWS S3 Console → Create Bucket
2. Name: `clothing-foru-frontend`
3. Unblock public access
4. Enable static website hosting:
   - Index document: `index.html`
   - Error document: `404.html`

### Step 3: Configure Bucket Policy

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::clothing-foru-frontend/*"
    }
  ]
}
```

### Step 4: Upload Files

```bash
aws s3 sync frontend/out s3://clothing-foru-frontend --delete
```

### Step 5: Create CloudFront Distribution

1. CloudFront → Create distribution
2. Origin: S3 bucket
3. Default cache behavior:
   - Viewer protocol: Redirect to HTTPS
   - Allowed HTTP methods: GET, HEAD
   - Cache policy: Managed-CachingOptimized

### Step 6: Custom Domain

1. CloudFront → Alternate domain names: `yourdomain.com`
2. SSL certificate: Use AWS Certificate Manager
3. Update Route 53 DNS to point to CloudFront

## Environment Variables

### Required Variables

```
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
```

### Optional Variables

```
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_live_...
NEXT_PUBLIC_ENVIRONMENT=production
```

## Performance Optimization

### Image Optimization

Next.js automatically optimizes images with `next/image`:

```jsx
import Image from 'next/image';

<Image src="/product.jpg" alt="Product" width={300} height={300} />
```

### Code Splitting

Dynamic imports for large components:

```jsx
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
});
```

### Caching

Set cache headers in `next.config.js`:

```javascript
module.exports = {
  headers: async () => [
    {
      source: '/_next/static/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
  ],
};
```

## Monitoring

### Vercel Analytics

1. Install: `npm install @vercel/analytics`
2. Add to app:

```jsx
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  return (
    <>
      <Component />
      <Analytics />
    </>
  );
}
```

### Error Tracking (Sentry)

1. Create Sentry account
2. Install: `npm install @sentry/nextjs`
3. Add DSN to environment

## Troubleshooting

### Build Fails

1. Check build logs
2. Verify environment variables
3. Ensure all dependencies installed
4. Check for TypeScript errors

### API Connection Issues

- Verify `NEXT_PUBLIC_API_URL` is correct
- Check CORS settings on backend
- Test API with Postman

### Images Not Loading

- Verify image paths in `next.config.js`
- Check image file permissions
- Use `next/image` for optimization

### Slow Performance

- Enable automatic optimizations
- Use analytics to identify bottlenecks
- Reduce bundle size
- Enable ISR (Incremental Static Regeneration)

## Auto-Deployment

**Vercel and Netlify** automatically deploy on push:

1. Push to main branch
2. Webhook triggers deployment
3. Build runs automatically
4. Site updates on success

To disable auto-deployment:

1. Go to deployment settings
2. Disable automatic deployments
3. Deploy manually via dashboard

## DNS Configuration

### Vercel

```
A: 76.76.19.132
AAAA: 2606:4700:3031::6c4c:1384
CNAME: cname.vercel-dns.com
```

### Netlify

```
CNAME: [your-site].netlify.app
```

### AWS CloudFront

```
Alias: [distribution-id].cloudfront.net
```

## Next Steps

1. Deploy backend (see BACKEND_DEPLOYMENT.md)
2. Configure CI/CD pipelines (see CI_CD.md)
3. Set up monitoring
4. Run smoke tests
5. Monitor error rates

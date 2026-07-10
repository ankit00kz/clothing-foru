# Image Setup Guide

## Image Directory Structure

Create the following directory structure for images:

```
public/
├── images/
│   ├── models/
│   │   ├── model-1.jpg    (Men's wear photo)
│   │   ├── model-2.jpg    (Women's wear photo)
│   │   ├── model-3.jpg    (Kids' wear photo)
│   │   ├── model-4.jpg    (Accessories photo)
│   │   ├── model-5.jpg    (Premium collection)
│   │   ├── model-6.jpg    (Summer collection)
│   │   ├── model-7.jpg    (Winter collection)
│   │   └── model-8.jpg    (Sale collection)
│   ├── products/
│   │   ├── product-1.jpg
│   │   ├── product-2.jpg
│   │   └── ... (more products)
│   └── banners/
│       ├── hero-banner.jpg
│       └── seasonal-banner.jpg
```

## Where to Get High-Quality Model Images

### Free Stock Photo Sites
1. **Unsplash** (unsplash.com)
   - Search: "fashion models", "clothing photoshoot"
   - High-quality, free for commercial use

2. **Pexels** (pexels.com)
   - Search: "people wearing clothes", "fashion"
   - Completely free

3. **Pixabay** (pixabay.com)
   - Search: "fashion", "clothing", "models"
   - Free and high quality

### Premium Stock Photo Sites
1. **Shutterstock** (shutterstock.com)
   - Professional fashion photography
   - Subscription-based

2. **Getty Images** (gettyimages.com)
   - Premium quality
   - Highest quality available

3. **Adobe Stock** (stock.adobe.com)
   - Professional collection
   - Integration with Adobe tools

## Adding Images to Project

1. Download high-quality images (min 800x800px)
2. Optimize for web (recommended 1200x1500px for models)
3. Place in `/public/images/models/`
4. Name files as `model-1.jpg`, `model-2.jpg`, etc.
5. Update image paths in components if needed

## Image Optimization

### Using Next.js Image Component
```javascript
import Image from 'next/image';

<Image
  src="/images/models/model-1.jpg"
  alt="Model wearing premium t-shirt"
  width={600}
  height={800}
  priority
/>
```

### Recommended Image Specs
- **Format**: JPEG for photos, PNG for graphics
- **Size**: 1200x1500px (for model photos)
- **File Size**: Keep under 500KB (use compression)
- **Quality**: High resolution for detail

## Tools for Image Optimization

1. **TinyPNG** (tinypng.com) - Lossless compression
2. **ImageOptim** (imageoptim.com) - Mac tool
3. **Online Converter** (cloudconvert.com) - Format conversion
4. **Photoshop** - Professional editing

## Image Usage in Components

The following pages use images:
- `/pages/index.js` - Hero and featured products
- `/pages/shop.js` - Product grid (models in shop)
- `/pages/product/[id].js` - Product detail page
- `/pages/admin/dashboard.js` - Admin panel

Each uses `model-{number}.jpg` from the models folder.

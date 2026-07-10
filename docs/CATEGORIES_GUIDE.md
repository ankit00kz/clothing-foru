# Product Categories Guide

## Categories Implemented

### 1. Men's Clothing
- T-Shirts & Tops
- Jeans & Pants
- Jackets & Coats
- Shirts
- Shorts
- Activewear

### 2. Women's Clothing
- Dresses
- Tops & Blouses
- Jeans & Pants
- Skirts
- Jackets & Cardigans
- Activewear

### 3. Kids' Clothing
- T-Shirts
- Jeans
- Dresses
- Jackets
- Sportswear
- Accessories

### 4. Accessories
- Hats & Caps
- Scarves
- Belts
- Sunglasses
- Bags
- Jewelry

## Adding New Categories

### Backend (Product Model)
```javascript
category: {
  type: String,
  enum: ['mens', 'womens', 'kids', 'accessories', 'new-category'],
  required: true,
}
```

### Frontend (Filter)
```jsx
<select>
  <option value="">All Categories</option>
  <option value="mens">Men's</option>
  <option value="womens">Women's</option>
  <option value="kids">Kids</option>
  <option value="accessories">Accessories</option>
  <option value="new-category">New Category</option>
</select>
```

## Category-Based Features

1. **Filtering**: Users can filter by category
2. **Navigation**: Category menu in header
3. **Collections**: Dedicated pages per category
4. **Recommendations**: Show similar categories
5. **Admin**: Manage inventory per category

## Subcategories

Implement nested categories:

```javascript
subcategory: {
  type: String,
  enum: {
    mens: ['shirts', 'pants', 'jackets', 'shoes'],
    womens: ['dresses', 'tops', 'pants', 'jackets'],
    kids: ['shirts', 'pants', 'dresses', 'jackets'],
  },
}
```

## Category Analytics

Track:
- Sales by category
- Popular items per category
- Category growth
- Category profitability

## SEO Optimization

- Create category landing pages
- Unique meta descriptions per category
- Category-specific keywords
- Breadcrumb navigation

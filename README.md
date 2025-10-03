# E-commerce Website

A modern, responsive e-commerce website built with React, TypeScript, and Tailwind CSS. Features include product categories, detailed product pages, filtering, sorting, and a complete shopping experience.

## 🚀 Live Demo

Visit the live site: [https://ecom-hatimbenayad.vercel.app](https://ecom-hatimbenayad.vercel.app)

## ✨ Features

### 🏠 Landing Page
- Modern hero banner with featured products
- Brand showcases (Nike, Adidas, etc.)
- Product grid with wishlist functionality
- Gender categories section
- Newsletter signup
- Responsive design for all devices

### 📱 Category Pages
- **Routes**: `/category/sneakers`, `/category/converse`, `/category/apparel`, `/category/sale`
- Responsive product grid (2-4 columns based on screen size)
- Advanced filtering system (brand, color, size, price, sale items)
- Sorting options (featured, newest, price)
- Wishlist integration with heart icons
- "Load More" pagination
- Mobile-optimized filter sidebar
- Active filter management with removable badges

### 🛍️ Product Detail Pages
- **Route**: `/product/:id`
- Product image gallery with thumbnails and navigation
- Color and size selection with availability indicators
- Quantity selector with stock validation
- Add to cart functionality
- Product information tabs (Description, Details, Shipping)
- "Complete Your Look" product recommendations
- "You Might Also Like" related products
- Star ratings and reviews
- Breadcrumb navigation

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui components
- **Routing**: Wouter
- **State Management**: React Hooks, TanStack Query
- **Icons**: Lucide React
- **Deployment**: Vercel
- **Backend**: Express.js, Node.js
- **Database**: PostgreSQL with Drizzle ORM

## 🎨 Design System

### Color Palette
- **Primary**: Red (#e60000) for CTAs and highlights
- **Background**: White (#ffffff)
- **Text**: Black (#000000) for headings, Gray (#555555) for secondary
- **Buttons**: Black background with white text

### Typography
- Clean sans-serif fonts
- Bold uppercase headings
- Consistent font weights and spacing
- Mobile-optimized text sizes

### Layout
- Responsive grid system
- Consistent container widths (max-w-7xl)
- Standard padding and margin patterns
- Mobile-first approach

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/hatimbenayad/ecom.git
cd ecom
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:5173
```

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
├── client/                 # Frontend React app
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── ui/        # shadcn/ui components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── ProductCard.tsx
│   │   │   └── ProductFilters.tsx
│   │   ├── pages/         # Page components
│   │   │   ├── Home.tsx
│   │   │   ├── CategoryPage.tsx
│   │   │   └── ProductDetailPage.tsx
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/          # Utilities and configurations
│   │   └── App.tsx       # Main app component
│   ├── index.html
│   └── public/           # Static assets
├── server/               # Backend Express server
│   ├── index.ts         # Server entry point
│   ├── routes.ts        # API routes
│   └── storage.ts       # Database operations
├── shared/              # Shared types and schemas
├── attached_assets/     # Product images and assets
├── package.json
├── vercel.json         # Vercel deployment config
└── README.md
```

## 📱 Responsive Design

### Mobile (< 768px)
- 2-column product grid
- Slide-out filter panel
- Collapsible navigation
- Touch-friendly interfaces

### Tablet (768px - 1024px)
- 3-column product grid
- Improved spacing
- Better filter layout

### Desktop (> 1024px)
- 4-column product grid
- Sidebar filters
- Full navigation menu
- Optimal image sizes

## 🎯 Key Features

### Product Management
- Dynamic product filtering and sorting
- Stock management with availability indicators
- Wishlist functionality with local storage
- Product image galleries with navigation
- Color and size variant selection

### User Experience
- Smooth animations and transitions
- Loading states and error handling
- Breadcrumb navigation
- Mobile-optimized interactions
- Accessible design patterns

### Performance
- Lazy loading for images
- Code splitting by routes
- Optimized bundle sizes
- Fast static site generation

## 🚀 Deployment

This project is configured for easy deployment on Vercel:

1. **Connect to Vercel**
   - Import the GitHub repository to Vercel
   - Vercel will automatically detect the configuration

2. **Environment Variables**
   - Add any required environment variables in Vercel dashboard
   - Database connection strings, API keys, etc.

3. **Automatic Deployment**
   - Every push to main branch triggers automatic deployment
   - Preview deployments for pull requests

## 🔧 Development

### Adding New Products
Products are currently using mock data in the components. To integrate with a real backend:

1. Replace mock data with API calls
2. Update the product interface in `shared/schema.ts`
3. Implement loading and error states
4. Add proper image handling

### Customizing Styles
- Modify `tailwind.config.ts` for theme changes
- Update CSS variables in `client/src/index.css`
- Use existing shadcn/ui components for consistency

### Adding New Pages
1. Create component in `client/src/pages/`
2. Add route in `client/src/App.tsx`
3. Update navigation in `client/src/components/Header.tsx`

## 🐛 Known Issues

- TypeScript compilation warnings (don't affect functionality)
- Mock data limitations (easily replaceable with real API)
- Image assets reused across products (demo limitation)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the component library
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Lucide React](https://lucide.dev/) for icons
- [Vercel](https://vercel.com/) for hosting

---

**Built with ❤️ by [Hatim Benayad](https://github.com/hatimbenayad)**
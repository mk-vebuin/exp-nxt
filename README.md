# Expensiq - Next.js

A modern, production-ready expense tracking application built with Next.js 15, featuring comprehensive financial management tools, beautiful UI, and robust SEO optimizations.

## ✨ Features

### 🎯 Core Functionality

- **Smart Expense Tracking**: Daily expense management with category-based organization
- **Multi-Platform Support**: Responsive design for mobile and desktop
- **Offline-First Architecture**: PWA support with offline capabilities
- **Real-time Analytics**: Beautiful charts and detailed financial insights
- **Payment Method Tracking**: Support for UPI, Cards, Cash, and Bank transfers
- **Advanced Filtering**: Search, sort, and filter transactions by multiple criteria

### 🚀 Technical Features

- **Next.js 15**: Latest version with App Router and Server Components
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Modern utility-first styling with custom design system
- **Radix UI**: Accessible, unstyled UI components
- **SEO Optimized**: Comprehensive meta tags, structured data, and sitemap
- **PWA Ready**: Manifest, service worker support, and installable
- **API Routes**: RESTful backend with mock data (ready for database integration)

## 🏗️ Architecture

### Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── expenses/      # Expense management endpoints
│   │   └── stats/         # Statistics and analytics endpoints
│   ├── app/               # Mobile app interface
│   ├── dashboard/         # Web dashboard
│   ├── layout.tsx         # Root layout with SEO
│   ├── page.tsx           # Homepage
│   ├── not-found.tsx      # 404 page
│   ├── sitemap.ts         # Dynamic sitemap generation
│   ├── robots.ts          # SEO robots.txt
│   └── manifest.ts        # PWA manifest
├── components/
│   ├── ui/                # Reusable UI components (Radix + Tailwind)
│   └── providers.tsx      # React Query and toast providers
├── lib/
│   └── utils.ts           # Utility functions
└── styles/
    └── globals.css        # Global styles and CSS variables
```

### Key Components

- **Homepage**: Comprehensive landing page with features, testimonials, and pricing
- **Mobile App**: Touch-optimized expense tracking interface
- **Web Dashboard**: Advanced analytics and expense management
- **UI Library**: 20+ reusable components built with Radix UI

## 🛠️ Technologies

### Frontend

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety and developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful SVG icons
- **Framer Motion** - Smooth animations
- **React Query** - Server state management

### Development Tools

- **ESLint** - Code linting with Next.js config
- **Prettier** - Code formatting
- **PostCSS** - CSS processing
- **TypeScript** - Static type checking

### SEO & Performance

- **Next.js SEO** - Built-in meta tags and Open Graph
- **Sitemap Generation** - Dynamic XML sitemap
- **Robots.txt** - Search engine crawling rules
- **PWA Manifest** - Progressive Web App configuration
- **Performance Optimizations** - Image optimization, code splitting

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser
# Visit http://localhost:3000
```

### Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
npm run typecheck  # Run TypeScript checks
```

## 📱 Pages & Features

### Homepage (`/`)

- Hero section with product overview
- Feature showcase with interactive elements
- User testimonials and social proof
- Pricing information
- SEO optimized with structured data

### Mobile App (`/app`)

- Touch-optimized expense entry form
- Category-based expense organization
- Recent transactions view
- Offline-ready functionality
- Bottom navigation for mobile UX

### Web Dashboard (`/dashboard`)

- Comprehensive expense analytics
- Interactive charts and graphs
- Advanced filtering and search
- Transaction management
- Export capabilities

### API Endpoints

#### Expenses API (`/api/expenses`)

```typescript
// GET - Fetch expenses with optional filters
GET /api/expenses?limit=10&category=Food&dateFrom=2024-01-01

// POST - Create new expense
POST /api/expenses
{
  "amount": -150,
  "category": "Food",
  "description": "Lunch",
  "paymentMethod": "UPI",
  "tags": ["restaurant"]
}
```

#### Statistics API (`/api/stats`)

```typescript
// GET - Fetch financial statistics
GET /api/stats?period=month
```

## 🎨 Design System

### Color Palette

- **Primary**: Purple (`#7c3aed`) - Main brand color
- **Secondary**: Amber (`#f59e0b`) - Accent and highlights
- **Success**: Green (`#10b981`) - Income and positive actions
- **Warning**: Orange (`#f97316`) - Alerts and notifications
- **Destructive**: Red (`#ef4444`) - Expenses and negative actions

### Typography

- **Font**: Inter (loaded from Google Fonts)
- **Headings**: Semibold with tight tracking
- **Body**: Regular weight with optimized line height

### Components

All UI components are built with:

- **Accessibility**: ARIA labels, keyboard navigation
- **Responsiveness**: Mobile-first design approach
- **Consistency**: Shared design tokens and variants
- **Customization**: Easy theming with CSS variables

## 🔍 SEO Features

### Meta Tags

- Comprehensive title and description optimization
- Open Graph tags for social media sharing
- Twitter Card configuration
- Canonical URLs and language specification

### Structured Data

- Organization schema for business information
- Product schema for app features
- Review schema for user testimonials

### Performance

- Optimized Core Web Vitals
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Efficient bundle size

## 🌐 PWA Features

### Installability

- Web App Manifest with proper configuration
- Offline functionality with service worker support
- App shortcuts for quick actions
- Native app-like experience

### Features

- Add to home screen capability
- Offline expense tracking
- Background sync (when implemented)
- Push notifications (ready for implementation)

## 🔄 Migration from React SPA

This application was migrated from a React SPA to Next.js with the following improvements:

### Performance Enhancements

- **Server-Side Rendering**: Faster initial page loads
- **Static Generation**: Pre-built pages for better performance
- **Image Optimization**: Automatic image optimization and WebP support
- **Bundle Optimization**: Automatic code splitting and tree shaking

### SEO Improvements

- **Meta Tags**: Comprehensive SEO meta tags
- **Sitemap**: Automatically generated XML sitemap
- **Robots.txt**: Proper search engine guidance
- **Structured Data**: Rich snippets for better search appearance

### Developer Experience

- **TypeScript**: Full type safety with improved developer experience
- **Hot Reloading**: Faster development with Next.js Fast Refresh
- **API Routes**: Integrated backend functionality
- **File-based Routing**: Intuitive routing based on file structure

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Connect your repository to Vercel
# Automatic deployments on push to main branch
```

### Other Platforms

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Environment Variables

```env
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
```

## 🔮 Future Enhancements

### Planned Features

- **Database Integration**: Replace mock data with real database
- **User Authentication**: Secure user accounts and data
- **Real-time Sync**: Multi-device synchronization
- **Advanced Analytics**: ML-powered insights and predictions
- **Export Features**: PDF reports and CSV exports
- **Budget Management**: Goal setting and budget tracking
- **Recurring Expenses**: Automatic expense tracking
- **Receipt Scanning**: OCR for receipt data extraction

### Technical Improvements

- **Testing**: Unit and integration tests with Jest/Vitest
- **E2E Testing**: Playwright for end-to-end testing
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js integration
- **Real-time**: WebSocket for live updates
- **Monitoring**: Error tracking with Sentry
- **Analytics**: User analytics with Vercel Analytics

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support, please contact [support@expensiq.com](mailto:support@expensiq.com) or open an issue on GitHub.

---

**Built with ❤️ using Next.js and modern web technologies**

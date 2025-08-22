# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is **LUMIA Odontología Especializada** - a bilingual (Spanish/English) dental clinic website built with Astro, React, and Tailwind CSS. The site focuses on specialized dentistry services including smile design, dental implants, and dental tourism in Manizales, Colombia.

## Key Technologies & Architecture

### Frontend Stack
- **Astro 5.12+** - Main framework with static site generation
- **React 19** - Interactive components (Hero, UI widgets, icons)
- **TypeScript** - Type safety throughout the project
- **Tailwind CSS** - Utility-first styling with custom color palette
- **Fontsource** - Self-hosted fonts (Montserrat, Playfair Display)

### Internationalization (i18n)
- **Bilingual Support**: Spanish (default, `/`) and English (`/en/`)
- **Translation System**: Custom i18n implementation in `src/i18n/index.ts`
- **URL Structure**: 
  - Spanish: `/`, `/nosotros`, `/servicios`
  - English: `/en`, `/en/about`, `/en/services`
- **SEO**: Automatic hreflang tags, localized structured data

### Content Architecture
```
src/
├── components/
│   ├── react/          # Interactive React components
│   └── *.astro         # Static Astro components
├── layouts/
│   └── Layout.astro    # Base layout with SEO, fonts, i18n
├── pages/
│   ├── *.astro         # Spanish pages (root level)
│   └── en/             # English translations
├── i18n/
│   └── index.ts        # Translation keys and utilities
└── styles/
    └── global.css      # Global styles
```

### Media & Assets
- **Optimized Images**: `/optimized-images/img-lumia/` directory structure
- **Videos**: `/optimized-videos/img-lumia/Videos/` with device-specific optimization
- **Responsive Design**: Mobile-first approach with desktop enhancements

## Common Development Commands

```bash
# Install dependencies
npm install

# Development server (localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Astro CLI commands
npm run astro add <integration>
npm run astro check        # Type checking
npm run astro -- --help   # CLI help
```

## Development Workflow

### Adding New Pages
1. Create Spanish version in `src/pages/`
2. Create English version in `src/pages/en/`
3. Add translation keys to `src/i18n/index.ts`
4. Use `Layout` component with proper SEO metadata
5. Implement responsive design with Tailwind classes

### Working with Translations
- All text content uses the `t()` function from `useTranslations()`
- Translation keys follow dot notation: `'home.hero.title'`
- Both Spanish (`es`) and English (`en`) variants required
- SEO metadata should be localized for each language

### Component Development
- **Static Components**: Use `.astro` files for server-side rendering
- **Interactive Components**: Use React `.tsx` files in `components/react/`
- **Client Hydration**: Add `client:load` directive for interactive components
- **Styling**: Use Tailwind utility classes with custom design system

### Media Optimization
- Images should be optimized and placed in `/public/optimized-images/`
- Videos require multiple formats for cross-browser compatibility
- Use `ResponsiveImage.astro` and `OptimizedVideo.astro` components
- Implement lazy loading for performance

### SEO & Performance
- Each page requires unique `title`, `description`, and `keywords`
- Implement structured data (JSON-LD) for dental clinic schema
- Use canonical URLs and hreflang for multilingual SEO
- Optimize Core Web Vitals with proper image/video loading

## Design System

### Color Palette
```css
primary-black: #000000
primary-white: #FFFFFF  
primary-gold: #D4AF37
primary-gold-light: #E6C866
primary-gold-dark: #B8941F
```

### Typography
- **Headers**: Playfair Display (serif) for elegance
- **Body**: Montserrat (sans-serif) for readability
- **Weights**: 400, 500, 600, 700 available

### Custom Animations
- `animate-fade-in`: 800ms ease-in-out
- `animate-slide-up`: 800ms ease-in-out  
- `animate-scale-in`: 600ms ease-in-out
- `animate-float`: 3s infinite float effect

## Project-Specific Patterns

### Hero Component Architecture
The `Hero.tsx` component implements sophisticated media optimization:
- Device-specific video sources (desktop/mobile)
- Format prioritization (WebM > MP4) based on browser support
- Automatic fallback to poster images
- Performance-optimized loading with preload metadata

### Navigation System
- Fixed header with scroll-based styling changes
- Mobile-responsive hamburger menu
- Language selector with proper routing
- Active state management for current page

### Internationalization Utilities
```typescript
// Get language from URL
const lang = getLangFromUrl(Astro.url)

// Get translation function
const t = useTranslations(lang)

// Use translations
{t('home.hero.title')}
```

## Performance Considerations

### Build Optimization
- Automatic font subsetting via Fontsource
- Image optimization and WebP generation
- CSS inlining for critical styles
- Static generation for all pages

### Runtime Performance  
- Minimal JavaScript hydration (only interactive components)
- Progressive image loading
- Optimized video delivery based on device capabilities
- Custom scrollbar styling for consistent UX

## Deployment Notes

- **Site URL**: `https://lumiaodontologia.com`
- **Build Target**: Static files in `./dist/`
- **Sitemap**: Auto-generated with i18n support
- **Environment**: Configured for production optimizations

This architecture ensures excellent performance, SEO, and user experience while maintaining code quality and developer productivity.

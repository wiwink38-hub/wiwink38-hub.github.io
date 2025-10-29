# TechCo - Premium Connectivity & Devices Platform

## Overview

TechCo is a modern telecommunications e-commerce platform built with React, TypeScript, and Vite. The application serves as a comprehensive digital storefront for wireless services, devices, and connectivity plans. It features a fully responsive design with a focus on user experience, showcasing products, service plans, and support resources through a clean, gradient-driven interface.

The platform targets consumers looking for telecommunications services, from individual users to business customers, offering multiple plan tiers, device catalogs, and comprehensive support resources.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18.3.1** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, configured for optimal performance
- **React Router DOM** for client-side routing with dedicated routes for products, plans, support, and informational pages
- **Single Page Application (SPA)** architecture with code splitting support

**UI Component System**
- **shadcn/ui** components built on Radix UI primitives for accessible, customizable components
- **Tailwind CSS** for utility-first styling with custom design tokens
- **Design System**: Centralized color palette using HSL values, gradient definitions, shadow utilities, and custom CSS variables for theming
- Component library includes: cards, buttons, forms, dialogs, navigation menus, carousels, accordions, and data display components

**State Management & Data Fetching**
- **TanStack Query (React Query)** for server state management and data synchronization
- Local component state using React hooks
- No centralized global state management (Redux/Zustand) - architecture favors component-level state

**Routing Strategy**
- Multi-page routing with dedicated pages for:
  - Home (landing/hero page)
  - Products (device catalog)
  - Plans (service tiers)
  - Support resources (help center, FAQ, contact)
  - Company information (about, careers, press, investors)
  - Business-specific offerings
- **404 handling** with custom NotFound component and error logging
- Navigation consistency through shared Navbar and Footer components

### Design Patterns & Principles

**Component Architecture**
- Atomic design approach with reusable UI primitives
- Compound component pattern for complex UI elements (cards, forms, dialogs)
- Composition over inheritance using React's composition model
- Props-based customization with TypeScript interfaces

**Styling Approach**
- CSS-in-JS avoided in favor of utility classes
- Custom Tailwind configuration with extended color palette
- CSS variables for dynamic theming support
- Responsive design using Tailwind breakpoints
- Custom gradient utilities for brand consistency

**Type Safety**
- TypeScript configured with relaxed rules (`strict: false`, `noImplicitAny: false`)
- Component props typed using TypeScript interfaces
- Utility functions and hooks fully typed

**Accessibility**
- Radix UI primitives provide ARIA attributes and keyboard navigation
- Semantic HTML structure
- Focus management in interactive components

### Build & Deployment Configuration

**Development Environment**
- Vite dev server on port 5000, accessible from all network interfaces
- Hot Module Replacement (HMR) for rapid development
- Component tagging plugin for development mode
- Path aliases configured (`@/*` maps to `./src/*`)

**Production Build**
- Output directory: `dist`
- Assets directory: `assets`
- Base path configured for root deployment (`base: '/'`)
- GitHub Actions workflow for automated deployment to GitHub Pages
- Build optimizations through Vite's production mode

**Code Quality**
- ESLint configuration with React hooks rules
- TypeScript compilation checks
- Unused variable warnings disabled for flexibility

## External Dependencies

### Core Libraries
- **React & React DOM** (18.3.1): UI framework
- **React Router DOM**: Client-side routing
- **TypeScript**: Type system and compilation
- **Vite**: Build tool and dev server

### UI Component Libraries
- **@radix-ui/* packages**: Headless UI primitives (accordion, alert-dialog, avatar, checkbox, collapsible, context-menu, dialog, dropdown-menu, hover-card, label, menubar, navigation-menu, popover, progress, radio-group, scroll-area, select, separator, slider, slot, switch, tabs, toast, toggle, toggle-group, tooltip)
- **shadcn/ui**: Pre-built components on Radix UI
- **lucide-react**: Icon library
- **cmdk**: Command menu component

### Styling & Theming
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS** with Autoprefixer: CSS processing
- **class-variance-authority**: Utility for component variants
- **clsx** & **tailwind-merge**: Class name utilities
- **next-themes**: Theme switching support

### Data & Forms
- **@tanstack/react-query**: Server state management
- **react-hook-form**: Form state and validation
- **@hookform/resolvers**: Form validation resolvers
- **zod** (implied via resolvers): Schema validation
- **date-fns**: Date manipulation
- **react-day-picker**: Date picker component

### UI Enhancements
- **embla-carousel-react**: Carousel/slider functionality
- **input-otp**: OTP input component
- **vaul**: Drawer component primitives

### Advertising Integration
- **Google AdSense**: Monetization through ads (client ID: ca-pub-5154045299270057)
- Ad slots configured in index.html

### Development Tools
- **@vitejs/plugin-react-swc**: Fast React refresh using SWC
- **ESLint** with TypeScript support
- **lovable-tagger**: Component tagging for development

### SEO & Metadata
- Open Graph tags configured
- Twitter card metadata
- robots.txt for search engine crawling
- ads.txt for advertising verification

### Deployment
- **GitHub Actions**: CI/CD pipeline
- **GitHub Pages**: Static hosting platform
- Node.js 20 runtime for builds

### Notable Architecture Decisions

**No Backend/Database**: Currently a static frontend application with no server-side logic or database integration. All data is hardcoded or would be fetched from external APIs via React Query.

**No Authentication System**: No user authentication or session management implemented. This is a public-facing informational/marketing site.

**Monorepo Structure**: Single package.json with all dependencies, no workspaces or multi-package setup.

**Asset Management**: Images sourced from Unsplash URLs, no local image optimization pipeline configured.
# BROWN - Premium Cosmetics Website

A modern, elegant cosmetic website built with React, Tailwind CSS, and React Router. The design features a clean, minimalist aesthetic with white as the dominant color and aesthetic pink accents.

## Features

- **Responsive Design**: Mobile-first approach with mobile menu navigation
- **Modern UI**: Clean, elegant design matching the original BROWN cosmetics brand
- **Component-Based Architecture**: Modular React components for maintainability
- **Routing**: React Router for seamless page navigation
- **Tailwind CSS**: Utility-first CSS framework for consistent styling
- **Animations**: Custom CSS animations for splashes, butterflies, and floating effects

## Pages

- **Home**: Hero section with main product bottle, splashes, butterflies, and product showcase
- **About**: Company information and story
- **Beauty Products**: Extended product catalog
- **Contact**: Contact form and company information

## Design Elements

- **Main Product Bottle**: Large white bottle with gold pump dispenser
- **Dynamic Splashes**: Animated white fluid effects around the bottle
- **Butterflies**: Ethereal white butterfly silhouettes with gentle animations
- **Product Cards**: Clean white cards showcasing individual products
- **Color Scheme**: White dominant with aesthetic pink accents and black text

## Technologies Used

- React 19
- React Router DOM
- Tailwind CSS
- Vite
- PostCSS
- Autoprefixer

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx      # Navigation header with mobile menu
│   ├── ProductCard.jsx # Product display cards
│   ├── ScrollIndicator.jsx # Scroll down indicator
│   └── SocialLinks.jsx # Social media links
├── pages/              # Page components
│   ├── Home.jsx        # Main landing page
│   ├── About.jsx       # About page
│   ├── BeautyProducts.jsx # Products catalog
│   └── Contact.jsx     # Contact page
├── App.jsx             # Main app with routing
├── main.jsx            # App entry point
└── index.css           # Global styles and Tailwind imports
```

## Customization

The website can be easily customized by:
- Modifying colors in `tailwind.config.js`
- Updating product data in the components
- Adjusting animations in `index.css`
- Changing content in the page components

## Browser Support

- Modern browsers with ES6+ support
- Mobile responsive design
- Progressive enhancement approach

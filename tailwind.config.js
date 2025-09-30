// Tailwind CSS Configuration File
// This file customizes how Tailwind CSS works in your project

// JSDoc comment for TypeScript support in JavaScript files
/** @type {import('tailwindcss').Config} */
export default {
  // Content paths - tells Tailwind where to look for class names
  // Tailwind will scan these files and only include CSS for classes that are actually used
  // This keeps your final CSS bundle small (purging unused styles)
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  
  // Theme configuration - customize Tailwind's default design system
  theme: {
    // Extend the default theme instead of replacing it
    // This allows you to add custom values while keeping Tailwind's defaults
      /*
        Examples of theme extensions:
        
        // Custom colors
        colors: {
          'brand-blue': '#1e40af',
          'brand-gray': '#6b7280',
        },
        
        // Custom fonts
        fontFamily: {
          'sans': ['Inter', 'system-ui', 'sans-serif'],
          'mono': ['Fira Code', 'monospace'],
        },
        
        // Custom spacing
        spacing: {
          '18': '4.5rem',
          '88': '22rem',
        },
        
        // Custom breakpoints
        screens: {
          'xs': '475px',
          '3xl': '1600px',
        },
        
        // Custom animations
        animation: {
          'fade-in': 'fadeIn 0.5s ease-in-out',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
        },
      */
    extend: {},
  },
  
  // Plugins array - add Tailwind plugins here
  // Plugins add additional utilities, components, or functionality
    /*
      Popular Tailwind plugins:
      
      require('@tailwindcss/forms'),        // Better form styling
      require('@tailwindcss/typography'),   // Prose styling for content
      require('@tailwindcss/aspect-ratio'), // Aspect ratio utilities
      require('@tailwindcss/container-queries'), // Container query support
    */
  plugins: [],
  
  /*
    Other configuration options:
    
    // Dark mode configuration
    darkMode: 'class', // or 'media' for system preference
    
    // Prefix all Tailwind classes (useful to avoid conflicts)
    prefix: 'tw-',
    
    // Disable specific core plugins
    corePlugins: {
      preflight: false, // Disable Tailwind's CSS reset
    },
  */
};

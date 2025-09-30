// Vite Environment Type Definitions
// This file provides TypeScript type definitions for Vite-specific features

// Triple-slash directive that includes Vite's type definitions
// This gives you TypeScript support for:
// - import.meta.env (environment variables)
// - import.meta.hot (hot module replacement API)
// - import.meta.glob (dynamic imports)
// - Vite-specific module types (like importing .svg files)
/// <reference types="vite/client" />

/*
  What this enables:
  
  1. Environment Variables:
     const apiUrl = import.meta.env.VITE_API_URL; // TypeScript knows this exists
  
  2. Hot Module Replacement:
     if (import.meta.hot) {
       import.meta.hot.accept(); // TypeScript knows about HMR API
     }
  
  3. Dynamic Imports:
     const modules = import.meta.glob('./components/*.tsx'); // Typed correctly
  
  4. Asset Imports:
     import logo from './logo.svg'; // TypeScript knows this returns a string URL
  
  Without this file, TypeScript would show errors for these Vite-specific features.
  
  Note: This file is automatically included in your TypeScript compilation
  because it's in the src/ directory and matches the include pattern in tsconfig.app.json
*/

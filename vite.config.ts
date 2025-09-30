// Import the defineConfig function from Vite
// This provides TypeScript support and IntelliSense for the config
import { defineConfig } from 'vite';

// Import the React plugin for Vite
// This plugin enables React support, including JSX transformation and Fast Refresh
import react from '@vitejs/plugin-react';

// Vite Configuration
// https://vitejs.dev/config/
// This file configures how Vite builds and serves your application
export default defineConfig({
  // Plugins array - add Vite plugins here
  // Plugins extend Vite's functionality
  plugins: [react()],
  
  // Dependency optimization configuration
  // This tells Vite how to handle dependencies during development
  optimizeDeps: {
    // Exclude certain packages from pre-bundling
    // lucide-react is excluded because it works better when not pre-bundled
    // This can help with compatibility issues for some packages
    exclude: ['lucide-react'],
  },
  
  /*
    Other common configuration options you might use:
    
    // Custom server configuration
    server: {
      port: 3000,        // Change development server port
      open: true,        // Automatically open browser
      host: true,        // Allow external connections
    },
    
    // Build configuration
    build: {
      outDir: 'dist',    // Output directory for build files
      sourcemap: true,   // Generate source maps
    },
    
    // Path aliases
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    
    // Environment variables prefix
    envPrefix: 'VITE_',
  */
});

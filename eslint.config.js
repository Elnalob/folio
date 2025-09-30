// ESLint Configuration
// ESLint is a tool for identifying and fixing problems in JavaScript/TypeScript code
// This file configures the rules and settings for code linting

// Import ESLint's recommended JavaScript rules
import js from '@eslint/js';

// Import global variables definitions (like window, document, etc.)
import globals from 'globals';

// Import React Hooks specific linting rules
// These rules help catch common mistakes with React Hooks
import reactHooks from 'eslint-plugin-react-hooks';

// Import React Fast Refresh plugin
// This ensures components are compatible with React's Fast Refresh feature
import reactRefresh from 'eslint-plugin-react-refresh';

// Import TypeScript ESLint integration
import tseslint from 'typescript-eslint';

// Export ESLint configuration using TypeScript ESLint's config helper
// This provides better TypeScript integration than plain ESLint config
export default tseslint.config(
  // Global ignores - files/directories to exclude from linting
  { ignores: ['dist'] },
  
  // Main configuration object
  {
    // Extend base configurations
    // These provide recommended rules as a starting point
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    
    // File patterns this configuration applies to
    // Only lint TypeScript and TypeScript React files
    files: ['**/*.{ts,tsx}'],
    
    // Language options - configure the JavaScript environment
    languageOptions: {
      // ECMAScript version to support
      // 2020 provides modern JavaScript features
      ecmaVersion: 2020,
      
      // Global variables available in the environment
      // browser globals include window, document, console, etc.
      globals: globals.browser,
    },
    
    // Plugins - additional rule sets and functionality
    plugins: {
      // React Hooks rules - ensures proper Hook usage
      'react-hooks': reactHooks,
      
      // React Fast Refresh rules - ensures HMR compatibility
      'react-refresh': reactRefresh,
    },
    
    // Rules configuration - specific linting rules to apply
    rules: {
      // Apply all recommended React Hooks rules
      // These catch common mistakes like:
      // - Using hooks conditionally
      // - Missing dependencies in useEffect
      // - Incorrect hook call order
      ...reactHooks.configs.recommended.rules,
      
      // React Fast Refresh rule - warns about components that can't use Fast Refresh
      // Fast Refresh requires components to be the default export or named exports
      'react-refresh/only-export-components': [
        // Severity level - 'warn' shows warnings, 'error' would fail the build
        'warn',
        // Options - allow constant exports (like const SOME_CONSTANT = ...)
        { allowConstantExport: true },
      ],
      
      /*
        You can add custom rules here:
        
        // Require semicolons
        'semi': ['error', 'always'],
        
        // Enforce consistent indentation
        'indent': ['error', 2],
        
        // Require const for variables that are never reassigned
        'prefer-const': 'error',
        
        // Disallow console.log in production
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      */
    },
  }
  
  /*
    ESLint configuration can be complex. Here's what this setup provides:
    
    1. JavaScript best practices (js.configs.recommended)
    2. TypeScript-specific rules (tseslint.configs.recommended)
    3. React Hooks rules (proper hook usage)
    4. React Fast Refresh compatibility
    5. Browser environment globals
    
    Common commands:
    npm run lint - check for linting errors
    npm run lint -- --fix - automatically fix fixable errors
  */
);

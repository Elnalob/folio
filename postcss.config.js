// PostCSS Configuration
// PostCSS is a tool for transforming CSS with JavaScript plugins
// It processes your CSS and applies various transformations
export default {
  // Plugins array - PostCSS plugins to apply to your CSS
  plugins: {
    // Tailwind CSS plugin - processes Tailwind directives and generates utility classes
    // This plugin:
    // 1. Processes @tailwind directives in your CSS
    // 2. Generates all the utility classes based on your config
    // 3. Purges unused styles in production builds
    tailwindcss: {},
    
    // Autoprefixer plugin - automatically adds vendor prefixes to CSS properties
    // This ensures your CSS works across different browsers
    // For example: transforms "display: flex" to include "-webkit-flex" for older browsers
    autoprefixer: {},
  },
  
  /*
    Other common PostCSS plugins you might use:
    
    // CSS nesting support (like Sass)
    'postcss-nesting': {},
    
    // Import CSS files
    'postcss-import': {},
    
    // Minify CSS in production
    'cssnano': process.env.NODE_ENV === 'production' ? {} : false,
    
    // Custom properties (CSS variables) support for older browsers
    'postcss-custom-properties': {},
  */
};

import React from 'react';

/**
 * Main App Component
 * 
 * This is the root component of our React application. It serves as the entry point
 * for all other components and contains the main layout and structure of the app.
 * 
 * React functional components are the modern way to write components in React.
 * They use hooks for state management and lifecycle methods.
 */
function App() {
  return (
    // Main container div with Tailwind CSS classes
    // min-h-screen: ensures the container takes at least the full viewport height
    // bg-gray-50: sets a light gray background color
    // flex: makes this a flexbox container
    // items-center: centers content vertically
    // justify-center: centers content horizontally
    // p-4: adds padding of 1rem (16px) on all sides
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      
      {/* Content card container */}
      {/* max-w-4xl: sets maximum width to 56rem (896px) */}
      {/* w-full: makes the element take full width up to the max-width */}
      {/* bg-white: white background */}
      {/* rounded-xl: large border radius for rounded corners */}
      {/* shadow-lg: large drop shadow for depth */}
      {/* p-8: padding of 2rem (32px) on all sides */}
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg p-8">
        
        {/* Header section */}
        <header className="text-center mb-12">
          {/* Main heading */}
          {/* text-4xl: very large text size */}
          {/* font-bold: bold font weight */}
          {/* text-gray-900: very dark gray text color */}
          {/* mb-4: margin bottom of 1rem (16px) */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Your React App
          </h1>
          
          {/* Subtitle paragraph */}
          {/* text-xl: large text size */}
          {/* text-gray-600: medium gray text color */}
          {/* mb-8: margin bottom of 2rem (32px) */}
          <p className="text-xl text-gray-600 mb-8">
            This is a modern React application built with TypeScript, Vite, and Tailwind CSS
          </p>
          
          {/* Technology badges container */}
          {/* flex: flexbox container */}
          {/* flex-wrap: allows items to wrap to new lines */}
          {/* justify-center: centers items horizontally */}
          {/* gap-3: adds 0.75rem (12px) gap between items */}
          <div className="flex flex-wrap justify-center gap-3">
            
            {/* Individual technology badge */}
            {/* px-4: horizontal padding of 1rem (16px) */}
            {/* py-2: vertical padding of 0.5rem (8px) */}
            {/* bg-blue-100: light blue background */}
            {/* text-blue-800: dark blue text */}
            {/* rounded-full: fully rounded corners (pill shape) */}
            {/* text-sm: small text size */}
            {/* font-medium: medium font weight */}
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              React 18
            </span>
            
            <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              TypeScript
            </span>
            
            <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
              Vite
            </span>
            
            <span className="px-4 py-2 bg-cyan-100 text-cyan-800 rounded-full text-sm font-medium">
              Tailwind CSS
            </span>
          </div>
        </header>

        {/* Main content section */}
        <main>
          {/* Features grid */}
          {/* grid: CSS Grid layout */}
          {/* grid-cols-1: 1 column on mobile */}
          {/* md:grid-cols-2: 2 columns on medium screens and up */}
          {/* lg:grid-cols-3: 3 columns on large screens and up */}
          {/* gap-6: 1.5rem (24px) gap between grid items */}
          {/* mb-12: margin bottom of 3rem (48px) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            
            {/* Feature card 1 */}
            {/* p-6: padding of 1.5rem (24px) */}
            {/* border: thin border */}
            {/* border-gray-200: light gray border color */}
            {/* rounded-lg: large border radius */}
            {/* hover:shadow-md: medium shadow on hover */}
            {/* transition-shadow: smooth transition for shadow changes */}
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                ⚡ Fast Development
              </h3>
              <p className="text-gray-600">
                Vite provides lightning-fast hot module replacement and build times
              </p>
            </div>

            {/* Feature card 2 */}
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                🎨 Beautiful Styling
              </h3>
              <p className="text-gray-600">
                Tailwind CSS utility classes make styling fast and consistent
              </p>
            </div>

            {/* Feature card 3 */}
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                🔒 Type Safety
              </h3>
              <p className="text-gray-600">
                TypeScript catches errors early and improves code quality
              </p>
            </div>
          </div>

          {/* Getting started section */}
          <section className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Ready to Start Building?
            </h2>
            
            {/* Instructions list */}
            {/* space-y-3: adds 0.75rem (12px) vertical space between children */}
            {/* text-left: left-aligns text */}
            {/* max-w-2xl: maximum width of 42rem (672px) */}
            {/* mx-auto: centers the element horizontally */}
            <div className="space-y-3 text-left max-w-2xl mx-auto">
              
              {/* Individual instruction item */}
              {/* flex: flexbox container */}
              {/* items-start: aligns items to the start (top) */}
              {/* gap-3: 0.75rem (12px) gap between items */}
              <div className="flex items-start gap-3">
                {/* Step number */}
                {/* flex-shrink-0: prevents the element from shrinking */}
                {/* w-6: width of 1.5rem (24px) */}
                {/* h-6: height of 1.5rem (24px) */}
                {/* bg-blue-500: blue background */}
                {/* text-white: white text */}
                {/* rounded-full: fully rounded (circle) */}
                {/* flex: flexbox container */}
                {/* items-center: centers content vertically */}
                {/* justify-center: centers content horizontally */}
                {/* text-sm: small text size */}
                {/* font-bold: bold font weight */}
                <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </span>
                <p className="text-gray-700">
                  Edit <code className="bg-gray-100 px-2 py-1 rounded text-sm">src/App.tsx</code> to customize this page
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </span>
                <p className="text-gray-700">
                  Create new components in the <code className="bg-gray-100 px-2 py-1 rounded text-sm">src/</code> directory
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </span>
                <p className="text-gray-700">
                  Use Tailwind CSS classes for styling or add custom CSS to <code className="bg-gray-100 px-2 py-1 rounded text-sm">src/index.css</code>
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  4
                </span>
                <p className="text-gray-700">
                  Run <code className="bg-gray-100 px-2 py-1 rounded text-sm">npm run build</code> when ready to deploy
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

// Export the App component as the default export
// This allows other files to import this component using: import App from './App'
export default App;
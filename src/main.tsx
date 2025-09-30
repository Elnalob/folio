// Import React's StrictMode component for additional development checks
// StrictMode helps identify potential problems in the application during development
import { StrictMode } from 'react';

// Import the createRoot function from React DOM client
// This is the new way to render React apps (React 18+)
// It replaces the older ReactDOM.render() method
import { createRoot } from 'react-dom/client';

// Import our main App component
import App from './App.tsx';

// Import global CSS styles (includes Tailwind CSS)
import './index.css';

// Create a root for our React application
// document.getElementById('root')! - finds the HTML element with id="root"
// The ! tells TypeScript we're certain this element exists (non-null assertion)
// This root element is defined in index.html
createRoot(document.getElementById('root')!).render(
  // StrictMode is a wrapper that helps catch common mistakes during development
  // It doesn't render any visible UI, but activates additional checks and warnings
  // Only runs in development mode, not in production builds
  <StrictMode>
    {/* Render our main App component inside StrictMode */}
    <App />
  </StrictMode>
);

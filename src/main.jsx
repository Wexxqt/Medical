import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Lazy load the App component
const App = lazy(() => import('./App'));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<div className="w-full h-screen flex items-center justify-center">Loading...</div>}>
      <App />
    </Suspense>
  </React.StrictMode>
);

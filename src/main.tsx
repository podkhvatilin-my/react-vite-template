import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.scss';

const rootApp = createRoot(document.getElementById('root')!);

rootApp.render(
  <StrictMode>
    <App />
  </StrictMode>
);

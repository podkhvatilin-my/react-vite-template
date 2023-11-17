import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

import './assets/scss/global.scss';

const rootApp = createRoot(document.getElementById('root')!);

rootApp.render(
  <StrictMode>
    <App />
  </StrictMode>
);

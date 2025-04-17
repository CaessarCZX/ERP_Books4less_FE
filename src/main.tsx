import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import AppWithProviders from './components/AppWithProviders';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppWithProviders />
  </StrictMode>
);

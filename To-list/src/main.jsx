import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CssBaseline } from '@mui/material';
import { ColorModeContextProvider } from './theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ColorModeContextProvider>
      <CssBaseline />
      <App />
    </ColorModeContextProvider>
  </React.StrictMode>
);
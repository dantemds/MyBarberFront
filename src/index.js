import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import GlobalStyle from './Styles/global'
import { ThemeProvider } from 'styled-components';
import { theme } from './Styles/tema';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
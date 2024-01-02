import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalProvider } from './Contexts/GlobalContext';
import TesteReact from './Teste';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <TesteReact></TesteReact>
  // <GlobalProvider>
  //   <App />
  // </GlobalProvider>
  // </React.StrictMode>
);
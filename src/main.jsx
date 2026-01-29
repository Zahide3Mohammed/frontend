import React from 'react';
import ReactDOM from 'react-dom/client';


import App from "./App.jsx";
import { LanguageProvider } from './element/LanguageContext.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <LanguageProvider>
    <App ></App>
  </LanguageProvider>
  </React.StrictMode>
);


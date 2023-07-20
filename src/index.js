import React from 'react';
/* import ReactDOM from 'react-dom'; */
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

/* ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
); */

// Cambié el ReactDOM por createRoot

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
<React.StrictMode>
    <BrowserRouter>
<App tab="home" />
</BrowserRouter>
  </React.StrictMode>
);

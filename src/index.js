import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./css/font-awesome.min.css";
import "./css/linearicons.css";
import "./css/style.css";
import "./css/bootstrap.min.css";
import "./css/responsive.css";
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);


import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from "./components/Layout"
import App from './App';
import { ThemeProvider } from './Theme'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <Layout>
        <App />
      </Layout>
    </ThemeProvider>
  </BrowserRouter>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Layout from './components/Layout';
import { ThemeProvider } from './Theme'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <Layout />
  </ThemeProvider>
);

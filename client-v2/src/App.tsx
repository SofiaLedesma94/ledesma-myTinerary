import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Cities } from './pages/Cities';
import { AppRouter } from './routes/AppRoutes';

export function App() {
  return (
   <AppRouter/>
  );
}

export default App;
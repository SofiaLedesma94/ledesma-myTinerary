import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
// Importa aquí las demás páginas a medida que las vayas creando:
import { Cities } from '../pages/Cities';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';

// import { Admin } from '../pages/Admin';

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta principal (Home) con el diseño asimétrico que armamos */}
        <Route path="/" element={<Home />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/auth/signin" element={<SignIn/>} />
        <Route path="/auth/signup" element={<SignUp/>} />

        {/* Ruta comodín para redireccionar o mostrar un 404 si la URL no existe */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User, LogIn, LogOut } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectUser, selectIsAuthenticated, selectUserRole } from '../../redux/user/authSelector'; 
import { logout as logoutAction } from  '../../redux/user/authSlice';




const menuItems = [
  {
    path: '/',
    label: 'Home',
    roles: ['guest', 'user', 'admin'], // Todos pueden verlo
  },
  {
    path: '/cities',
    label: 'Cities',
    roles: ['guest', 'user', 'admin'],
  },
  {
    path: '/admin/cities',
    label: 'Admin Panel',
    roles: ['admin'], // Exclusivo de administrador
  },
];

export const Navbar: React.FC = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();

  // 3. Obtenemos los datos directamente desde el estado global de Redux
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const user = useAppSelector(selectUser);
  const currentRole = useAppSelector(selectUserRole); // Devuelve 'guest', 'user' o 'admin'

  // Páginas donde solo queremos mostrar el logo (sin menú de navegación)
  const minimalNavbarPaths = ['/auth/signin', '/auth/signup'];
  const isMinimalNavbar = minimalNavbarPaths.includes(location.pathname);

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    dispatch(logoutAction());
  };

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-slate-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-slate-900">
          <img
            src="../../logo-mytinerary.png"
            alt="Logo de MyTinerary"
            className="h-8 w-auto md:h-10 object-contain"
          />
        </Link>

        {/* Si NO es una página minimalista, filtramos y pintamos los links desde el array */}
        {!isMinimalNavbar && (
          <>
            <nav className="hidden md:flex items-center gap-8 font-medium">
              {menuItems
                .filter((item) => item.roles.includes(currentRole)) // Filtra según el rol actual del usuario
                .map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`transition-colors ${
                      isActive(item.path)
                        ? 'text-[#0D9488] font-semibold'
                        : 'text-slate-600 hover:text-[#0D9488]'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
            </nav>

            {/* Auth Actions (Login / Register o Perfil) */}
            <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
              {!isAuthenticated ? (
                <>
                  <Link
                    to="/auth/signin"
                    className="whitespace-nowrap flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-700 hover:text-[#0D9488] transition-colors"
                  >
                    <LogIn className="w-4 h-4" />
                    Sign In
                  </Link>
                  <Link
                    to="/auth/signup"
                    className="whitespace-nowrap flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold text-white bg-[#0D9488] hover:bg-[#0f766e] rounded-full shadow-sm transition-all"
                  >
                    <User className="w-4 h-4" />
                    Sign Up
                  </Link>
                </>
              ) : (
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    {/* Si el usuario tiene userPic mostramos su imagen, sino la inicial de su nombre */}
                    {user?.userPic ? (
                      <img 
                        src={user.userPic} 
                        alt={user.userName} 
                        className="w-9 h-9 rounded-full object-cover border border-teal-100" 
                      />
                    ) : (
                      <div className="w-9 h-9 rounded-full bg-teal-50 text-[#0D9488] flex items-center justify-center font-bold text-sm border border-teal-100">
                        {user?.userName?.charAt(0).toUpperCase() || 'U'}
                      </div>
                    )}

                    <span className="hidden sm:inline text-sm font-semibold text-slate-800">
                      {user?.userName} 
                      {user?.rol === 'admin' && (
                        <span className="text-xs bg-teal-100 text-[#0D9488] px-2 py-0.5 rounded-full ml-1">
                          Admin
                        </span>
                      )}
                    </span>
                  </div>

                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-rose-600 hover:bg-rose-50 rounded-xl transition-colors cursor-pointer"
                    title="Cerrar sesión"
                  >
                    <LogOut className="w-4 h-4" />
                    <span className="hidden sm:inline">Salir</span>
                  </button>
                </div>
              )}
            </div>
          </>
        )}

      </div>
    </header>
  );
};
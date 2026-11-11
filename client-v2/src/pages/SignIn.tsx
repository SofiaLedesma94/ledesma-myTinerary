import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, Mail, Lock, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { loginUser, clearAuthError } from '../redux/user/authSlice' ;

const loginSchema = z.object({
  userName: z.string().min(1, 'El usuario es requerido'),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
});

type LoginFormData = z.infer<typeof loginSchema>;

export const SignIn: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();


  const { error } = useAppSelector((state) => state.auth);

  const onSubmit = async (data: LoginFormData) => {
    try {
      dispatch(clearAuthError());
      const resultAction = await dispatch(loginUser(data));
      if (loginUser.fulfilled.match(resultAction)) {
        navigate('/'); 
      }
    } catch (err) {
      console.error('Error inesperado:', err);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex items-center justify-center px-4 font-sans">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
        
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold font-heading text-[#0F172A]">Bienvenido de nuevo</h2>
          <p className="text-slate-500 text-sm mt-1">Ingresa a tu cuenta de MyTinerary</p>
        </div>
        {error && (
          <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-100 flex items-start gap-3 text-rose-700 text-sm animate-fade-in">
            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Usuario o Email</label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-3 w-5 h-5 text-slate-400" />
              <input
                type="text"
                {...register('userName')}
                placeholder="tu_usuario"
                className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0D9488] text-slate-900 text-sm"
              />
            </div>
            {errors.userName && (
              <span className="text-xs text-rose-500 mt-1 block font-medium">{errors.userName.message}</span>
            )}
          </div>

          {/* Campo Contraseña */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Contraseña</label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-3 w-5 h-5 text-slate-400" />
              <input
                type="password"
                {...register('password')}
                placeholder="••••••••"
                className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0D9488] text-slate-900 text-sm"
              />
            </div>
            {errors.password && (
              <span className="text-xs text-rose-500 mt-1 block font-medium">{errors.password.message}</span>
            )}
          </div>

          {/* Botón de Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#0D9488] hover:bg-[#0f766e] text-white font-semibold py-3 rounded-full transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm mt-2 disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Iniciando sesión...</span>
              </>
            ) : (
              <span>Sign In</span>
            )}
          </button>
        </form>

      </div>
    </div>
  );
};
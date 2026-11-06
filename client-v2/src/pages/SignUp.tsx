import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, Mail, Lock, User, UserPlus } from 'lucide-react';

// 1. Definimos el esquema de validación con Zod
const SingUpSchema = z.object({
    userName: z.string().email('Por favor ingresa un email válido'),
    password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
    userPic: z.string().optional(),
    name: z.string().min(3, 'Ingrese un nombre válido'),
    lastName: z.string().min(3, 'Ingrese un apellido válido'),
    userPhone: z.string().min(10, 'Ingrese un nombre válido'),
});

type LoginFormData = z.infer<typeof SingUpSchema>;

export const SignUp: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginFormData>({
        resolver: zodResolver(SingUpSchema),
    });

    const onSubmit = async (data: LoginFormData) => {
        try {
            // Aquí harías tu petición al backend (ej. axios.post('/api/auth/login', data))
            console.log('Datos válidos para enviar:', data);
            await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulando API
        } catch (error) {
            console.error('Error en el login', error);
        }
    };

    return (
        <div className="min-h-screen bg-[#F8F9FA] flex items-center justify-center px-4 font-sans">
            <div className="max-w-md w-full bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold font-heading text-[#0F172A]">Bienvenido</h2>
                    <p className="text-slate-500 text-sm mt-1">Crea tu cuenta de MyTinerary</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {/* Campo Email */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                        <div className="relative">
                            <Mail className="absolute left-3.5 top-3 w-5 h-5 text-slate-400" />
                            <input
                                type="email"
                                {...register('userName')}
                                placeholder="tu@email.com"
                                className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0D9488] text-slate-900 text-sm"
                            />
                        </div>
                        {errors.email && (
                            <span className="text-xs text-rose-500 mt-1 block font-medium">{errors.email.message}</span>
                        )}
                    </div>
                    {/* Campo Contraseña */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
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
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                        <div className="relative">
                            <User className="absolute left-3.5 top-3 w-5 h-5 text-slate-400" />
                            <input
                                type="text"
                                {...register('name')}
                                placeholder="Name"
                                className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0D9488] text-slate-900 text-sm"
                            />

                        </div>
                        {errors.password && (
                            <span className="text-xs text-rose-500 mt-1 block font-medium">{errors.name.message}</span>
                        )}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                        <div className="relative">
                            <User className="absolute left-3.5 top-3 w-5 h-5 text-slate-400" />
                            <input
                                type="text"
                                {...register('lastName')}
                                placeholder="Last Name"
                                className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0D9488] text-slate-900 text-sm"
                            />

                        </div>
                        {errors.password && (
                            <span className="text-xs text-rose-500 mt-1 block font-medium">{errors.lastName.message}</span>
                        )}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Telephone Number</label>
                        <div className="relative">
                            <User className="absolute left-3.5 top-3 w-5 h-5 text-slate-400" />
                            <input
                                type="text"
                                {...register('userPhone')}
                                placeholder="Telephone Number"
                                className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0D9488] text-slate-900 text-sm"
                            />
                        </div>
                        {errors.password && (
                            <span className="text-xs text-rose-500 mt-1 block font-medium">{errors.userPhone.message}</span>
                        )}
                    </div>
                    {/* Botón de Submit */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#0D9488] hover:bg-[#0f766e] text-white font-semibold py-3 rounded-full transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm mt-2"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                <span>Iniciando sesión...</span>
                            </>
                        ) : (
                            <span>Sign Up</span>
                        )}
                    </button>
                </form>

            </div>
        </div>
    );
};
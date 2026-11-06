import React, { useEffect } from 'react';
import { Navbar } from '../components/common/Navbar';
import { Hero } from '../components/common/Hero';
import { CityCard } from '../components/cards/CityCard';
import { Carousel } from '../components/common/Carousel';
import { Compass, Heart, Loader2, ShieldCheck } from 'lucide-react';
import { fetchCities } from '../redux/cities/citiesSlice';
import { selectCitiesError, selectCitiesStatus, selectPopularCities } from '../redux/cities/citiesSelectors';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

export const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const popularCities = useAppSelector(selectPopularCities);
  const status = useAppSelector(selectCitiesStatus);
  const error = useAppSelector(selectCitiesError);
  const featuredCities = popularCities.slice(0, 2); // Las primeras 2 más grandes
  const secondaryCities = popularCities.slice(2, 5); // Las otras 3 uniformes



  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCities());
    }
  }, []);


  console.log(popularCities)


  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />
      <Hero />

      {/* Sección del Carrusel Dinámico */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        {status === 'loading' && (
          <div className="flex justify-center items-center py-16 text-[#0D9488]">
            <Loader2 className="w-8 h-8 animate-spin" />
          </div>
        )}

        {status === 'failed' && (
          <p className="text-center py-12 text-rose-500 font-medium">{error}</p>
        )}

        {status === 'succeeded' && popularCities.length > 0 && (
          <div className="space-y-8">

            {/* Fila 1: Las 2 ciudades principales (Más grandes / Altas) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredCities.map((city) => (
                <div key={city._id} className="h-[380px] sm:h-[420px] rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                  <CityCard city={city} />
                </div>
              ))}
            </div>

            {/* Fila 2: Las 3 ciudades siguientes (Tamaño estándar y uniforme) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {secondaryCities.map((city) => (
                <div key={city._id} className="h-[320px] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                  <CityCard city={city} />
                </div>
              ))}
            </div>

          </div>
        )}
      </section>

      {/* Sección de Características (Beneficios) */}
      <section className="bg-white border-t border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="w-12 h-12 bg-teal-50 text-[#0D9488] rounded-xl flex items-center justify-center mx-auto mb-4">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-lg text-slate-900 font-heading">Itinerarios Únicos</h3>
            <p className="text-slate-600 text-sm mt-1">Planes armados por personas reales que conocen cada rincón.</p>
          </div>
          <div className="p-6">
            <div className="w-12 h-12 bg-teal-50 text-[#0D9488] rounded-xl flex items-center justify-center mx-auto mb-4">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-lg text-slate-900 font-heading">Guarda tus Favoritos</h3>
            <p className="text-slate-600 text-sm mt-1">Arma tu propia colección de viajes y actividades deseadas.</p>
          </div>
          <div className="p-6">
            <div className="w-12 h-12 bg-teal-50 text-[#0D9488] rounded-xl flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-lg text-slate-900 font-heading">Comunidad Verificada</h3>
            <p className="text-slate-600 text-sm mt-1">Interactúa, comenta y comparte experiencias con confianza.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm border-t border-slate-800">
        <p>© 2026 MyTinerary. Diseñado con UX/UI minimalista.</p>
      </footer>
    </div>
  );
};
import React, { useEffect } from 'react';
import { Navbar } from '../components/common/Navbar';
import { CityCard } from '../components/cards/CityCard';
import { Search, Loader2 } from 'lucide-react';
import { fetchCities, setCitySearch } from '../redux/cities/citiesSlice';
import {
  selectCitiesError,
  selectCitiesStatus,
  selectCitySearch,
  selectFilteredCities,
} from '../redux/cities/citiesSelectors';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

export const Cities: React.FC = () => {
  const dispatch = useAppDispatch();
  const cities = useAppSelector(selectFilteredCities);
  const searchTerm = useAppSelector(selectCitySearch);
  const status = useAppSelector(selectCitiesStatus);
  const error = useAppSelector(selectCitiesError);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCities());
    }
  }, [dispatch, status]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow w-full">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Explore Destinations</h1>
          <p className="text-slate-600 mt-2">Encuentra tu próximo destino y descubre itinerarios únicos creados por la comunidad.</p>
        </div>

        <div className="max-w-md mx-auto mb-12 relative">
          <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search by city or country..."
            value={searchTerm}
            onChange={(e) => dispatch(setCitySearch(e.target.value))}
            className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
          />
        </div>

        {status === 'loading' && (
          <div className="flex justify-center items-center py-20 text-indigo-600">
            <Loader2 className="w-8 h-8 animate-spin" />
          </div>
        )}

        {status === 'failed' && error && (
          <div className="text-center py-12 text-red-500 font-medium">
            {error}
          </div>
        )}

        {status === 'succeeded' && (
          <>
            {cities.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {cities.map((city) => (
                  <CityCard key={city._id} city={city} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 text-slate-500">
                <p className="text-lg">No se encontraron ciudades que coincidan con tu búsqueda.</p>
              </div>
            )}
          </>
        )}
      </main>

      <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm border-t border-slate-800">
        <p>© 2026 MyTinerary. Diseñado con UX/UI minimalista por Sofia Ledesma.</p>
      </footer>
    </div>
  );
};

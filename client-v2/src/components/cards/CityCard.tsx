import React from 'react';
import { Link } from 'react-router-dom';
import type { City } from '../../types';

interface CityCardProps {
  city: City;
}

export const CityCard: React.FC<CityCardProps> = ({ city }) => {
  const { _id, cityName, cityCountryName, url } = city;

  return (
    <Link
      to={`/cities/${city._id}`}
      className="group relative block w-full h-full rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl"
    >
      <img
        src={city.url}
        alt={city.cityName}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />

      {/* Degradado oscuro para legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

      {/* Texto de Ciudad y País */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-2xl font-bold font-heading tracking-tight">
          {city.cityName}
        </h3>
        <p className="text-sm font-sans text-slate-300 font-medium">
          {city.cityCountryName}
        </p>
      </div>
    </Link>
  );
};
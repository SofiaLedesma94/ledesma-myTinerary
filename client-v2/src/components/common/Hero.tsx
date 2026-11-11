import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="bg-[#0f172a] text-white py-20 px-6 sm:px-12 text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight text-white mb-6">
          Find your perfect trip, <br className="hidden sm:inline" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
            designed by insiders
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed mb-8">
          Find your perfect itinerary, designed by insiders who know and love their cities.
        </p>

        <Link
          to="/cities"
          className="inline-flex items-center gap-2 bg-[#6366f1] hover:bg-[#4f46e5] text-white font-semibold px-8 py-3.5 rounded-full shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:scale-105"
        >
          <span>Explore Cities</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
};
import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  title?: string;
  subtitle?: string;
}

export function Carousel<T>({ items, renderItem, title, subtitle }: CarouselProps<T>) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollContainerRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="w-full">
      {/* Encabezado y Botones de Control */}
      {(title || subtitle) && (
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
          <div>
            {title && (
              <h2 className="text-4xl font-bold font-heading tracking-tight text-slate-900">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-slate-600 mt-2 font-sans">
                {subtitle}
              </p>
            )}
          </div>

          <div className="flex items-center gap-2 mt-4 sm:mt-0">
            <button
              onClick={() => scroll('left')}
              className="p-2.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition-colors shadow-sm cursor-pointer"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition-colors shadow-sm cursor-pointer"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Contenedor Deslizable del Carrusel */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 pt-2"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="snap-start shrink-0 w-[280px] sm:w-[320px] lg:w-[380px]"
          >
            {renderItem(item, index)}
          </div>
        ))}
      </div>
    </div>
  );
}
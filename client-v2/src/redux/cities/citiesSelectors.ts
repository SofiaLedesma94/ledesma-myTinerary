import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export const selectCities = (state: RootState) => state.cities.items;
export const selectCitiesStatus = (state: RootState) => state.cities.status;
export const selectCitiesError = (state: RootState) => state.cities.error;
export const selectCitySearch = (state: RootState) => state.cities.search;

export const selectFilteredCities = createSelector(
  [selectCities, selectCitySearch],
  (cities, search) => {
    const term = search.trim().toLowerCase();
    if (!term) return cities;

    return cities.filter(
      (city) =>
        city.cityName.toLowerCase().startsWith(term) ||
        city.cityCountryName.toLowerCase().startsWith(term)
    );
  }
);

export const selectPopularCities = createSelector([selectCities], (cities) =>
  [...cities].sort((a, b) => b.cityCountItineraries - a.cityCountItineraries).slice(0, 5)
);

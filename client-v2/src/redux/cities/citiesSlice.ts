import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { getCities } from '../../services/CityService';
import type { City } from '../../types';

interface CitiesState {
  items: City[];
  search: string;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: CitiesState = {
  items: [],
  search: '',
  status: 'idle',
  error: null,
};

export const fetchCities = createAsyncThunk('cities/fetchCities', async () => {
  return getCities();
});

const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    setCitySearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCities.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchCities.rejected, (state) => {
        state.status = 'failed';
        state.error = 'No se pudieron cargar las ciudades. Verifica la conexión con el servidor.';
      });
  },
});

export const { setCitySearch } = citiesSlice.actions;
export default citiesSlice.reducer;

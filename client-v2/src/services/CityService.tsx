import axios from 'axios';
import type { City } from '../types';

const API_URL = 'http://localhost:4000/api';

export const getCities = async (): Promise<City[]> => {
  const response = await axios.get(`${API_URL}/cities`);
  const cities = response.data?.respuesta;
  return Array.isArray(cities) ? cities : [];
};

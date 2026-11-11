import axios from 'axios';
import type { City } from '../types';
import { API_URL } from '../config/Api';

export const getCities = async (): Promise<City[]> => {
  const response = await axios.get(`${API_URL}/cities`);
  const cities = response.data?.respuesta;
  return Array.isArray(cities) ? cities : [];
};

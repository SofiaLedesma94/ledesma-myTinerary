import { configureStore } from '@reduxjs/toolkit';
import citiesReducer from './cities/citiesSlice';
import userReducer from './user/authSlice'

export const store = configureStore({
  reducer: {
    cities: citiesReducer,
    auth:userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

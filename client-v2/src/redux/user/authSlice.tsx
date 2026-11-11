import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL } from '../../config/Api';
import axios from 'axios';

export interface UserSignUp {
  userName: string,
  userPic: string,
  name: string,
  lastName: string,
  userPhone: string,
  token: string,
  rol: string
}

export interface UserSignIn {
  userName: string,
  userPic: string,
  rol: string,
  token: string
}

interface AuthState {
  user: UserSignUp | UserSignIn | null;
  token: string | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

// Recuperamos sesión previa de localStorage si existe
const storedUser = localStorage.getItem('user');
const storedToken = localStorage.getItem('token');

const initialState: AuthState = {
  user: storedUser ? JSON.parse(storedUser) : null,
  token: storedToken || null,
  status: 'idle',
  error: null,
};

// AsyncThunk para el Login (Sign In)
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials: { userName: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/user/signIn`, credentials);
      localStorage.setItem('token', response.data.response.token);
      localStorage.setItem('user', JSON.stringify(response.data.response));
      return response.data.response;
    } catch (error: any) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data.message || 'Error en el servidor');
      }
      if (error.request) {
        return rejectWithValue('No se pudo conectar con el servidor. Verifica tu conexión o la base de datos.');
      }
      return rejectWithValue('Ocurrió un error inesperado al intentar iniciar sesión.');
    }
  }
);

// AsyncThunk para el Registro (Sign Up / Crear usuario)
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData: { userName: string; password: string; name: string; lastName: string; userPhone: string; userPic?: string  }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/user/signup`, userData);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      localStorage.setItem('token', response.data.response.token);
      localStorage.setItem('user', JSON.stringify(response.data.response));
      return response.data.response;
    } catch (error: any) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data.errors[0].message || 'Error en el servidor');
      }
      if (error.request) {
        return rejectWithValue('No se pudo conectar con el servidor. Verifica tu conexión o la base de datos.');
      }
      return rejectWithValue('Ocurrió un error inesperado al intentar iniciar sesión.');
    }
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.status = 'idle';
      state.error = null;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    },
    clearAuthError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // LOGIN
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      // REGISTER
      .addCase(registerUser.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
        state.token = action.payload.token;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const { logout, clearAuthError } = authSlice.actions;
export default authSlice.reducer;
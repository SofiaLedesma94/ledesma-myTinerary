// import { RootState } from '../store';
import type { RootState } from '../store';

// Usuario y Auth Status general
export const selectUser = (state: RootState) => state.auth.user;
export const selectIsAuthenticated = (state: RootState) => Boolean(state.auth.token && state.auth.user);
export const selectAuthStatus = (state: RootState) => state.auth.status;
export const selectAuthError = (state: RootState) => state.auth.error;


export const selectUserRole = (state: RootState) => {
  const user = state.auth.user as any;
  return user?.rol || 'guest'; 
};

export const selectIsAdmin = (state: RootState) => {
  const user = state.auth.user as any;
  return user?.rol === 'admin';
}

export const selectUserPic = (state: RootState) => state.auth.user?.userPic || '';

export const selectUserDisplayName = (state: RootState) => {
  const user = state.auth.user;
  if (!user) return '';
  
  if ('name' in user && user.name) {
    return `${user.name} ${user.lastName}`;
  }

  return user.userName;
};

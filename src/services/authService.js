import api from './api';

export const login = async (email, password) => {
  const res = await api.post('/auth/login', { email, password });
  return res.data;
};

export const logout = async () => {
  const res = await api.post('/auth/logout');
  return res.data;
};

export const getCurrentUser = async () => {
  const res = await api.get('/auth/me');
  return res.data;
};
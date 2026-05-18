import api from './api';

export const getUsers = async (params = {}) => {
  const res = await api.get('/users', { params });
  return res.data;
};

export const getUserById = async (id) => {
  const res = await api.get(`/users/${id}`);
  return res.data;
};

export const createUser = async (data) => {
  const res = await api.post('/users', data);
  return res.data;
};

export const updateUser = async (id, data) => {
  const res = await api.put(`/users/${id}`, data);
  return res.data;
};

export const deleteUser = async (id) => {
  const res = await api.delete(`/users/${id}`);
  return res.data;
};

export const resetPassword = async (id, data) => {
  const res = await api.patch(`/users/${id}/reset-password`, data);
  return res.data;
};

export const updateUserStatus = async (id, data) => {
  const res = await api.patch(`/users/${id}/status`, data);
  return res.data;
};

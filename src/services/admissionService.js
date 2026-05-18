import api from './api';

export const submitAdmission = async (data) => {
  const res = await api.post('/admissions', data);
  return res.data;
};

export const getAdmissions = async (params = {}) => {
  const res = await api.get('/admissions', { params });
  return res.data;
};

export const getAdmissionById = async (id) => {
  const res = await api.get(`/admissions/${id}`);
  return res.data;
};

export const updateAdmissionStatus = async (id, data) => {
  const res = await api.patch(`/admissions/${id}/status`, data);
  return res.data;
};

export const exportAdmissions = async (params = {}) => {
  const res = await api.get('/admissions/export', { params, responseType: 'blob' });
  return res.data;
};

export const getAdmissionLogs = async (id) => {
  const res = await api.get(`/admissions/${id}/logs`);
  return res.data;
};

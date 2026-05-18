import api from './api';

export const getPartners = async (params = {}) => {
  const res = await api.get('/partners', { params });
  return res.data;
};

export const createPartner = async (data) => {
  const res = await api.post('/partners', data);
  return res.data;
};

export const updatePartner = async (id, data) => {
  const res = await api.put(`/partners/${id}`, data);
  return res.data;
};

export const deletePartner = async (id) => {
  const res = await api.delete(`/partners/${id}`);
  return res.data;
};

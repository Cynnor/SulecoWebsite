import api from './api';

export const getPartners = async (params = {}) => {
  const res = await api.get('/partners', { params });
  return res.data;
};

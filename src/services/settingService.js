import api from './api';

export const getSettings = async () => {
  const res = await api.get('/settings');
  return res.data;
};

export const updateSetting = async (key, data) => {
  const res = await api.put(`/settings/${key}`, data);
  return res.data;
};

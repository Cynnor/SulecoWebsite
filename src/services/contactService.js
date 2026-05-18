import api from './api';

export const submitContact = async (data) => {
  const res = await api.post('/contacts', data);
  return res.data;
};

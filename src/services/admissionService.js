import api from './api';

export const submitAdmission = async (data) => {
  const res = await api.post('/admissions', data);
  return res.data;
};

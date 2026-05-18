import api from './api';

export const getCourses = async (params = {}) => {
  const res = await api.get('/courses', { params });
  return res.data;
};

export const getCourseById = async (id) => {
  const res = await api.get(`/courses/${id}`);
  return res.data;
};

export const getCourseCategories = async (params = {}) => {
  const res = await api.get('/course-categories', { params });
  return res.data;
};

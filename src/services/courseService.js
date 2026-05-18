import api from './api';

export const getCourses = async (params = {}) => {
  const res = await api.get('/courses', { params });
  return res.data.data?.courses || [];
};

export const getCourseById = async (id) => {
  const res = await api.get(`/courses/${id}`);
  return res.data;
};

export const getCourseCategories = async (params = {}) => {
  const res = await api.get('/course-categories', { params });
  return res.data;
};

export const createCourse = async (data) => {
  const res = await api.post('/courses', data);
  return res.data;
};

export const updateCourse = async (id, data) => {
  const res = await api.put(`/courses/${id}`, data);
  return res.data;
};

export const deleteCourse = async (id) => {
  const res = await api.delete(`/courses/${id}`);
  return res.data;
};

export const createCourseCategory = async (data) => {
  const res = await api.post('/course-categories', data);
  return res.data;
};

export const updateCourseCategory = async (id, data) => {
  const res = await api.put(`/course-categories/${id}`, data);
  return res.data;
};

export const deleteCourseCategory = async (id) => {
  const res = await api.delete(`/course-categories/${id}`);
  return res.data;
};

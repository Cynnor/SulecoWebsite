import api from './api';

export const getPosts = async (params = {}) => {
  const res = await api.get('/posts', { params });
  return res.data;
};

export const getPostBySlug = async (slug) => {
  const res = await api.get(`/posts/${slug}`);
  return res.data;
};

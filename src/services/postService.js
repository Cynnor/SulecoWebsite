import api from './api';

export const getPosts = async (params = {}) => {
  const res = await api.get('/posts', { params });
  return res.data;
};

export const getPostBySlug = async (slug) => {
  const res = await api.get(`/posts/${slug}`);
  return res.data;
};

export const getManagePosts = async (params = {}) => {
  const res = await api.get('/posts/manage', { params });
  return res.data;
};

export const createPost = async (data) => {
  const res = await api.post('/posts', data);
  return res.data;
};

export const updatePost = async (id, data) => {
  const res = await api.put(`/posts/${id}`, data);
  return res.data;
};

export const deletePost = async (id) => {
  const res = await api.delete(`/posts/${id}`);
  return res.data;
};

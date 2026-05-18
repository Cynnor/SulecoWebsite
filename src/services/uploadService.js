import axios from 'axios';

const baseURL = import.meta.env.DEV ? '/api/v1' : 'https://api.newcitygroupsuleco.com.vn/api/v1';

const publicUploadApi = axios.create({ baseURL, timeout: 60000 });

export const uploadAdmissionDocument = async (file, oldUrl) => {
  const form = new FormData();
  form.append('file', file);
  if (oldUrl) form.append('oldUrl', oldUrl);
  const res = await publicUploadApi.post('/uploads/admissions/public-document', form);
  return res.data;
};

export const uploadCmsImage = async (file, onProgress) => {
  const form = new FormData();
  form.append('image', file);
  const res = await publicUploadApi.post('/uploads/cms/image', form, { onUploadProgress: onProgress });
  return res.data;
};

export const uploadPostImage = async (file, onProgress) => {
  const form = new FormData();
  form.append('image', file);
  const res = await publicUploadApi.post('/uploads/cms/post-image', form, { onUploadProgress: onProgress });
  return res.data;
};

export const uploadPartnerLogo = async (file, onProgress) => {
  const form = new FormData();
  form.append('logo', file);
  const res = await publicUploadApi.post('/uploads/cms/partner-logo', form, { onUploadProgress: onProgress });
  return res.data;
};

export const uploadCourseImage = async (file, onProgress) => {
  const form = new FormData();
  form.append('image', file);
  const res = await publicUploadApi.post('/uploads/cms/course-image', form, { onUploadProgress: onProgress });
  return res.data;
};

export const uploadSettingsBanner = async (file, onProgress) => {
  const form = new FormData();
  form.append('banner', file);
  const res = await publicUploadApi.post('/uploads/settings/banner', form, { onUploadProgress: onProgress });
  return res.data;
};

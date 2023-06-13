import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:3001`,
});

export const requestDataGet = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
};

export const requestDataPost = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export const requestUpdate = async (endpoint, body) => {
  const { data } = await api.put(endpoint, body);
  return data;
};

export default api;

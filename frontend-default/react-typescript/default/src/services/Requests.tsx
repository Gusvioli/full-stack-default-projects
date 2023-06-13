import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:3001`,
});

interface IrequestBody {
  name: string;
  email: string;
  password: string;
}

interface IrequestUpdate {
  id: string;
  name: string;
  email: string;
  password: string;
}

export const requestDataGet = async (endpoint: string) => {
  const { data } = await api.get(endpoint);
  return data;
};

export const requestDataPost = async (endpoint: string, body: IrequestBody) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export const requestUpdate = async (endpoint: string, body: IrequestUpdate) => {
  const { data } = await api.put(endpoint, body);
  return data;
};

export default api;

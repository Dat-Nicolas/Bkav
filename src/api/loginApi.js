import axios from 'axios';

export const loginApi = (loginData) => {
  return axios.post('/api/auth/login', loginData);
};
import axios from 'axios';

export const loginApi = (loginData: { usernameOrEmail: string; password: string }) => {
  return axios.post<{ token: string; message?: string }>('/api/auth/login', loginData);
};

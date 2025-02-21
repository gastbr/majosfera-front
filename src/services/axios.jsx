import axios from 'axios';

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
  withCredentials: true
});

export const requestCookie = () => {
  return api.get('/sanctum/csrf-cookie', { withCredentials: true })
    .then(response => {
      console.log('CSRF cookie set', response);
    })
    .catch(error => {
      console.error('Error setting CSRF cookie:', error);
    });
}

export default api;
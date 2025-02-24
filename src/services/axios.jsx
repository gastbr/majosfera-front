import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

const api = axios.create({
  baseURL: '/',
  withCredentials: true,
  withXSRFToken: true,
  xsrfCookieName: 'XSRF-TOKEN', // Nombre de la cookie donde Laravel almacena el token CSRF
  xsrfHeaderName: 'X-XSRF-TOKEN' // Nombre del header donde se enviará el token
});

export const requestCookie = () => {
  return api.get('/sanctum/csrf-cookie', { withCredentials: true, withXSRFToken: true })
    .then(response => {
      console.log('CSRF cookie set', response);
    })
    .catch(error => {
      console.error('Error setting CSRF cookie:', error);
    });
}

export default api;

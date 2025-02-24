import axios from 'axios';

// Función para obtener la cookie XSRF-TOKEN
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
  withCredentials: true,
  headers: {
    'X-XSRF-TOKEN': getCookie('XSRF-TOKEN'), // 🔹 Enviar el token en cada solicitud
  }
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

// filepath: /c:/laragon/www/majosfera-front/src/services/axios.jsx
import axios from 'axios';

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
});

// Add a request interceptor to include the CSRF token
instance.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  // Get the CSRF token from the meta tag
  const csrfToken = document.head.querySelector('meta[name="csrf-token"]');
  if (csrfToken) {
    config.headers['X-CSRF-TOKEN'] = csrfToken.content;
  } else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
  }

  return config;
});

export default instance;
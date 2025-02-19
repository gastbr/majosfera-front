import axios from './axios';

export const login = (email, password) => {
    return axios.post('/login', { email, password })
        .then(response => {
            const token = response.data.token;
            sessionStorage.setItem('token', token);
            return response.data;
        });
};

export const logout = () => {
    sessionStorage.removeItem('token');
};

export const register = (email, password) => {
    return axios.post('/register', { email, password })
        .then(response => {
            const token = response.data.token;
            sessionStorage.setItem('token', token);
            return response.data;
        });
}
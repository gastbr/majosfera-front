import api from './axios';

export const login = (email, password) => {
    return api.post('/login', { email, password })
        .then(response => {
            return response.data;
        });
};

export const logout = () => {
    // hacer logout a traves de la API
    sessionStorage.removeItem('token');
};

export const register = (name, email, password) => {
    return api.get(`/sanctum/csrf-cookie`)
        .then(() => {
            try {
                return api.post(`/register`, { name, email, password }, {
                    withCredentials: true,
                    withXSRFToken: true,
                });
            } catch (error) {
                console.error(error);
            }
        })
        .then(response => {
            console.log(response);
        });
};
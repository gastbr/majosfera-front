import api from './axios';

export const user = () => {
    return api.get('/api/user', { withCredentials: true, withXSRFToken: true })
        .then(response => {
            console.log('==> user:', response);
            return response.data;
        }).catch(error => {
            console.error('==> user error:', error);
        });
}

export const login = (email, password) => {
    return api.post('/login', { email, password },
        {
            withCredentials: true,
            withXSRFToken: true,
        }).then(response => {
            console.log('==> login successful:', response);
        }).catch(error => {
            console.error('==> login error:', error);
        });
};

export const logout = () => {
    return api.post('/logout', {}, { withCredentials: true, withXSRFToken: true })
        .then(response => {
            console.log('==> logout successful:', response);
        }).catch(error => {
            console.error('==> logout error:', error);
        });
};

export const register = (name, email, password) => {
    return api.post('/register', { name, email, password },
        {
            withCredentials: true,
            withXSRFToken: true,
        })
        .then(response => {
            console.log('==> register successful:', response);
            return response.data;
        }).catch(error => {
            console.error('==> register error:', error);
            return error;
        });
};

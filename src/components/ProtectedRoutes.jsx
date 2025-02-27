/* eslint-disable react/prop-types */
import { Navigate, useLocation } from 'react-router';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export const RouteUser = ({ element: Element }) => {
    const { state } = useContext(AppContext);
    const location = useLocation();

    return (
        state.user ? (
            <Element />
        ) : (
            <Navigate to="/login" state={{ from: location }} replace />
        )
    );
};

export const RouteAdmin = ({ element: Element }) => {
    const { state } = useContext(AppContext);
    const location = useLocation();

    return (
        state.user && state.user.admin ? (
            <Element />
        ) : (
            <Navigate to="/login" state={{ from: location }} replace />
        )
    );
};
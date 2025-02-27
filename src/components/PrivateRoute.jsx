/* eslint-disable react/prop-types */
import { Route, Redirect } from 'react-router';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = !!sessionStorage.getItem('token');
    const { state } = useContext(AppContext);

    console.log("state: ", state);

    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
};

export default PrivateRoute;
/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

export const AppContext = createContext();

const initialState = {
    username: "",
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_USERNAME":
            return { ...state, username: action.payload };
        default:
            return state;
    }
};

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};
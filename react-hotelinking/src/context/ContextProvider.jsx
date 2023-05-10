import { createContext, useContext, useState } from "react";
import axiosClient from "../axios-client";

const StateContext = createContext({
    currentUser: null,
    token: null,
    setUser: () => {},
    setToken: () => {},
    allCoupons: [],
});

// eslint-disable-next-line react/prop-types
export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));
    const [brands, _setBrands] = useState([]);


    const setToken = (token) => {
        _setToken(token);
        if (token) {
            localStorage.setItem("ACCESS_TOKEN", token);
        } else {
            localStorage.removeItem("ACCESS_TOKEN");
        }
    };

    const setBrands = () => {
        axiosClient.get("/brands").then((res) => _setBrands(res.data));
    };

    return (
        <StateContext.Provider
            value={{
                user,
                setUser,
                token,
                setToken,
                setBrands,
                brands
              
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);

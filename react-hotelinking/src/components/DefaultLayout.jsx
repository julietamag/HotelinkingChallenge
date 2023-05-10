import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";

import { useEffect } from "react";
import axiosClient from "../axios-client";

export default function DefaultLayout() {
    const { user, token, setUser, setToken } = useStateContext();

    const onLogout = (ev) => {
        ev.preventDefault();

        axiosClient.post("/logout").then(() => {
            setUser({});
            setToken(null);
        });
    };

    useEffect(() => {
        if (token) {
            axiosClient.get("/user").then(({ data }) => {
                setUser(data);
            });
        }
    }, [setUser, token]);

    if (!token) {
        return <Navigate to="/welcome" />;
    }

    return (
        <div id="defaultLayout">
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
                    <a className="navbar-brand" href="/">
                        HotePromos
                    </a>

                    <div className="nav w-100 d-flex align-items-end justify-content-end gap-3">
                        <Link
                            className="nav-item nav-link text-dark"
                            to="/dashboard"
                        >
                            All Promos
                        </Link>
                        <Link
                            className="nav-item nav-link text-dark"
                            to="/profile"
                        >
                            {user.name}
                        </Link>
                        <Link
                            className="nav-item nav-link btn btn-danger text-light"
                            to="/profile"
                            onClick={onLogout}
                        >
                            Logout
                        </Link>
                    </div>
                </nav>
            </div>
            <div className="content">
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

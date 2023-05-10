import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";

export default function GuestLayout() {
    const { token } = useStateContext();

    if (token) {
        return <Navigate to="/" />;
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
                <Link className="navbar-brand" to="/">
                HotePromos
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarNavAltMarkup"
                >
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link" to="/login">
                            Login
                        </Link>
                        <Link className="nav-item nav-link" to="/register">
                            Register
                        </Link>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    );
}

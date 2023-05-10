import { Link } from "react-router-dom";

const Welcome = () => {
    return (
        <div
            className="bg-primary bg-gradient text-light d-flex flex-column align-items-center justify-content-start pt-5"
            style={{ height: "60vh" }}
        >
            <h1>Welcome to Hotelinking Promos</h1>
            <h3>Coupons that work, savings that last.</h3>
            <h4>You need to login to browse</h4>
            <div className="d-flex gap-5 align-items-center justify-content-start">
                <button
                    type="button"
                    className="btn btn-light mt-4"
                    aria-label="login"
                >
                    <Link to="/login">Login</Link>
                </button>
                <button
                    type="button"
                    className="btn btn-light mt-4"
                    aria-label="login"
                >
                    <Link to="/register">Register</Link>
                </button>
            </div>
        </div>
    );
};

export default Welcome;

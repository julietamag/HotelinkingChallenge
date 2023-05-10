import { Link } from "react-router-dom";
import { createRef, useState } from "react";
import axiosClient from "../axios-client.js";
import { useStateContext } from "../context/ContextProvider.jsx";
import toast from "react-hot-toast";

export default function Register() {
    const nameRef = createRef();
    const emailRef = createRef();
    const passwordRef = createRef();
    const passwordConfirmationRef = createRef();
    const { setUser, setToken } = useStateContext();
    const [errors, setErrors] = useState(null);

    const onSubmit = (ev) => {
        ev.preventDefault();

        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value,
        };
        axiosClient
            .post("/register", payload)
            .then(({ data }) => {
                setUser(data.user);
                setToken(data.token);
                toast.success("Regsiter successful");
            })
            .catch((err) => {
                const response = err.response;
                if (response && response.status === 422) {
                    setErrors(response.data.errors);
                    toast.error(
                        Object.keys(errors).map((key) => errors[key][0])
                    );
                }
            });
    };

    return (
        <div className="login-signup-form animated fadeInDown w-50 mx-auto">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1 className="title my-4">Signup for Free</h1>
                    <label>Full Name</label>
                    <input
                        className="form-control my-1"
                        ref={nameRef}
                        type="text"
                        placeholder="Full Name"
                    />
                    <label>Email Address</label>

                    <input
                        className="form-control my-1"
                        ref={emailRef}
                        type="email"
                        placeholder="Email Address"
                    />
                    <label>Password</label>

                    <input
                        className="form-control my-1"
                        ref={passwordRef}
                        type="password"
                        placeholder="Password"
                    />
                    <label>Repeat Password</label>

                    <input
                        className="form-control my-1"
                        ref={passwordConfirmationRef}
                        type="password"
                        placeholder="Repeat Password"
                    />
                    <button className=" btn btn-block btn-primary px-4 my-2">
                        Register
                    </button>
                    <p className="message">
                        Already registered? <Link to="/login">Sign In</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

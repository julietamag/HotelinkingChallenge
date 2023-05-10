import {Link} from "react-router-dom";
import axiosClient from "../axios-client.js";
import {createRef} from "react";
import {useStateContext} from "../context/ContextProvider.jsx";
import toast from "react-hot-toast";

export default function Login() {
  const emailRef = createRef()
  const passwordRef = createRef()
  const { setUser, setToken } = useStateContext()

  const onSubmit = ev => {
    ev.preventDefault()

    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }
    axiosClient.post('/login', payload)
      .then(({data}) => {
        setUser(data.user)
        setToken(data.token);
        toast.success('Login successful')
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          toast.error(response.data.message)
        }
      })
  }

  return (
    <div className="login-signup-form animated fadeInDown w-50 mx-auto">
      <div className="form">
        <form onSubmit={onSubmit}>
          <h1 className="title my-4">Login into your account</h1>
          <label >Email address</label>
          <input className="form-control my-1" ref={emailRef} type="email" placeholder="Email"/>
          <label >Password</label>
          <input className="form-control my-1" ref={passwordRef} type="password" placeholder="Password"/>
          <button className=" btn btn-block btn-primary px-4 my-2" >Login</button>
          <p className="message">Not registered? <Link to="/register">Create an account</Link></p>
        </form>
      </div>
    </div>
  )
}

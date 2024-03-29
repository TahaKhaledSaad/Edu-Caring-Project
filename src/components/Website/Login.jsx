import logo from "../../assets/logo-removebg-preview.png";
import loginImage from "../../assets/login-image.jpg";
import style from "./Login.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Cookie from "cookie-universal";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const cookies = Cookie();

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  async function handleFormSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.post("http://hossamelhadad-001-site12.atempurl.com/api/Auth/Login", {
        email: email,
        password: password,
      });

      console.log(res);
      // Set Token && Roles && UserId
      cookies.set("edu-caring", res.data.responseObject.token);
      cookies.set("roles", res.data.responseObject.roles);
      cookies.set("userId", res.data.responseObject.userID);
      // Set Navigation
      window.location.pathname = "home";
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) {
        console.log("Wrong Email Or Password");
      } else {
        console.log("Internal Server Error");
      }
    }
  }

  console.log(email, password);

  return (
    <>
      <div className={style.container}>
        <form className={style.form} onSubmit={handleFormSubmit}>
          <img src={logo} alt="logo" />
          <h2>Sign in</h2>

          {/* Input */}
          <div>
            <i className="fa-regular fa-envelope"></i>
            <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
          </div>

          {/* Password */}
          <div className={style.input}>
            <i className="fa-solid fa-lock"></i>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <i
              className={`fa-regular ${
                showPassword ? "fa-eye" : "fa-eye-slash"
              } fa-flip-horizontal`}
              onClick={togglePasswordVisibility}
            ></i>
          </div>

          <button>Sign In</button>
          <p className="m-0 p-0 my-3 fs-6">
            I have an Account? &nbsp;
            <Link to="/" className="fw-bold">
              Sign Up
            </Link>
          </p>
        </form>
        <div className={style.image}>
          <img src={loginImage} alt="loginImage" />
        </div>
      </div>
    </>
  );
}
//

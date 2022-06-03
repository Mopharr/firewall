import React from "react";
import { useState } from "react";
import "../style/style.css";
import axios from "axios";

const SignIn = () => {
  const [sign, setSign] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setSign({ ...sign, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://bank-firewall.herokuapp.com/api/login", {
        email: sign.email,
        password: sign.password,
      })
      .then((res) => {
        setSign({
          email: "",
          password: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="main">
      <div className="picc">
        <img src="yoyo.png" alt="" />
      </div>
      <div className="sign">
        <div className="signn">
          <h2>Welcome Back!</h2>
          <hr />

          <form action="" onSubmit={handleSubmit}>
            <div className="input">
              <label htmlFor="title">Email Adress/UserName</label>
              <div className="inputt">
                <input
                  type="text"
                  name="email"
                  value={sign.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="input">
              <div className="tit">
                <label htmlFor="title">Password</label>
                <span>Forget Password?</span>
              </div>
              <div className="inputt">
                <input
                  type="password"
                  name="password"
                  value={sign.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <span>
              You don't have an account: <a href="/">signUp</a>
            </span>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

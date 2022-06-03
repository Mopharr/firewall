import React from "react";
import "../style/style.css";
import { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [sign, setSign] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
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
        firstName: sign.firstName,
        lastName: sign.lastName,
        middleName: sign.middleName,
        email: sign.email,
        password: sign.password,
      })
      .then((res) => {
        setSign({
          firstName: "",
          lastName: "",
          middleName: "",
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
          <h2>Welcome </h2>
          <hr />

          <form action="" onSubmit={handleSubmit}>
            <div className="input">
              <label htmlFor="title">First Name</label>
              <div className="inputt">
                <input
                  type="text"
                  name="firstName"
                  value={sign.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="input">
              <label htmlFor="title">Last Name</label>
              <div className="inputt">
                <input
                  type="text"
                  name="lastName"
                  value={sign.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="input">
              <label htmlFor="title">Middle Name</label>
              <div className="inputt">
                <input
                  type="text"
                  name="middleName"
                  value={sign.middleName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="input">
              <label htmlFor="title">Email</label>
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
              Have an account: <a href="/">Go back to login</a>
            </span>
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

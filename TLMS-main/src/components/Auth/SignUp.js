import React, { Fragment } from "react";
import { useRef } from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import getUuidByString from "uuid-by-string";
import { GoogleLogin } from "react-google-login";
import "./SignUp.css";
const SignUp = () => {
  const emailValueRef = useRef();
  const history = useNavigate();
  const redirect = () => {
    const val = emailValueRef.current.value;
    // .substring(1, 3);
    const uuidHash = getUuidByString(val);

    localStorage.setItem("email", uuidHash);

    history("/orders");
  };
  const responseGoogle = (response) => {
    console.log(response);
    localStorage.setItem("email", response.googleId);
    history("/orders");
  };
  const responseGoogl = (response) => {
    console.log(response);
  };
  return (
    <Fragment>
      <div className="container">
        <div className="left-section">
          <div className="header">
            <h1 className="animation a1">
              Thapar Laundry Management System (TLMS)
            </h1>
            <h3 className="animation a1">Welcome !</h3>
            <h4 className="animation a2">
              Sign Up for entering your membership dashboard.
            </h4>
          </div>
          <div className="form">
            <input
              id="t1"
              type="text"
              className="form-field animation a3"
              placeholder="Name"
            />
            <input
              id="t2"
              type="email"
              className="form-field animation a3"
              ref={emailValueRef}
              placeholder="Email"
            />
            <input
              id="t3"
              type="password"
              className="form-field animation a4"
              placeholder="Password"
            />
            <input
              id="t4"
              type="password"
              className="form-field animation a4"
              placeholder="Confirm Password"
            />
            <select id="User" className="form-field animation a4">
              <option value="Student">Student</option>
              <option value="Employee">Employee</option>
            </select>
            <button
              id="t5"
              className="btn sign animation a6"
              onClick={redirect}
            >
              <Link to="/orders">Create Account</Link>
            </button>
            <p className="animation a7">
              <Link to="/login">Already a Member? Log In</Link>
            </p>
            <GoogleLogin
              className="animation a7"
              clientId="975112296299-s33sdv53ukptvmg2g3vulc268rboa5qi.apps.googleusercontent.com"
              buttonText="SignUp with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogl}
              cookiePolicy="single_host_origin"
            />
          </div>
        </div>
        <div className="right-section" />
      </div>
    </Fragment>
  );
};
export default SignUp;

import React, { Fragment } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import getUuidByString from "uuid-by-string";
import { GoogleLogin } from "react-google-login";
import { useState } from "react";
import "./Login.css";
const Login = () => {
  const emailValueRef = useRef();
  const history = useNavigate();
  const [uservalue,setuservalue]=useState();
  const redirect = () => {
    const userValue=document.getElementById('User').value;
    const val = emailValueRef.current.value;
    const uuidHash = getUuidByString(val);
    localStorage.setItem("email", uuidHash);
    localStorage.setItem("userValue", userValue);
    setuservalue(localStorage.getItem("userValue"));
    if(userValue=='Student')
    history("/orders");
    else
    history("/EmployeeOrders");
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
            <h3 className="animation a1">Welcome Back!</h3>
            <h4 className="animation a2">
              Log in for entering your membership dashboard.
            </h4>
          </div>
          <div className="form">
            <input
              id="t1"
              type="email"
              className="form-field animation a3"
              placeholder="Email"
              ref={emailValueRef}
            />
            <input
              id="t2"
              type="password"
              className="form-field animation a4"
              placeholder="Password"
            />
            <select id="User" className="form-field animation a4" >
              <option value="Student" className="form-field"  >Student</option>
              <option value="Employee" className="form-field">Employee</option>
            </select>
            <p className="animation a5">
            </p>
            <button
              id="t5"
              className="btn sign animation a6"
              onClick={redirect}
            >
              LOGIN
            </button>
            <p className="animation a7">
              <Link to="/signup">New Here? Sign Up</Link>
            </p>
          </div>
          <GoogleLogin
            className="animation a7"
            clientId="975112296299-s33sdv53ukptvmg2g3vulc268rboa5qi.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogl}
            cookiePolicy="single_host_origin"
          />
        </div>
        <div className="right-section" />
      </div>
    </Fragment>
  );
};

export default Login;

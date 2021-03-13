import React, { useState } from 'react';
import { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Buttons from "./Buttons";
const Loginform = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const formSubmit = (e) => {
    
    e.preventDefault();
    alert('Yayyyy Login :)');
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-9 col-11 mx-auto my-5">
            <form onSubmit={formSubmit}>
              <div className="mb-4" style={{ marginTop: "60px" }}>
                <label for="Email"
                  className="form-label">
                  Email address
                </label>
                <input type="email"
                  className="form-control"
                  id="Email"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  pattern="[a-zA-Z0-9.!# $ % &'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
                  placeholder="Enter Email Address"
                  required />
              </div>
              <div className="mb-4">
                <label for="Password"
                  className="form-label">
                  Password
                </label>
                <input type="password"
                  className="form-control"
                  id="Password"
                  name="password"
                  value={data.password}
                  onChange={InputEvent}
                  // pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"
                  placeholder="Enter Password" required />
              </div>
              <div className="mb-4">
                <div className="form-check">
                  <input type="checkbox"
                    className="form-check-input"
                    id="Check" />
                  <label className="form-check-label"
                    for="Check">
                    Remember me
                  </label>
                </div>
              </div>
              <div className="col-md-12 mx-5">
                <Buttons name="Sign In" id="login" type="submit" navigate='/Admin_Dashboard'/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loginform;
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loginuser } from "../Redux/Action/UserAction";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const initialvalue = { email: "", password: "" };
  const dispatch = useDispatch();
  const [formValues, setFormData] = useState(initialvalue);

  const user = useSelector((state) => state.user.user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(Loginuser(formValues));
  };

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          name="email"
          value={formValues.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit" onClick={handleSubmit}>
        Login
      </button>
    </div>
  );
};

export default Login;

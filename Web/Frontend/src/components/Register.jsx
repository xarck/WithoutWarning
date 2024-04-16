import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RegisterUser } from "../Redux/Action/UserAction";

const Register = () => {
  const initialvalue = { name: "", email: "", password: "" };
  const [formData, setFormData] = useState(initialvalue);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(RegisterUser(formData));
    navigate("/login");
  };

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Name
        </label>
        <input
          name="name"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          name="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Password
        </label>
        <input
          name="password"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit" onClick={handleSubmit}>
        Register
      </button>
    </div>
  );
};

export default Register;

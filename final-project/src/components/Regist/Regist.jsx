import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Regist.scss";
import { FormInput } from "./FormInput/FormInput";

import facebook from "../../assets/icons/facebook.svg";
import google from "../../assets/icons/google.svg";
import { auth } from "../../firebase";
import { updateProfile, createUserWithEmailAndPassword } from "firebase/auth";

export const Regist = () => {
  const [inputValid, setInputValid] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate()

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn`t include any special character",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "text",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number, 1 special character",
      pattern: `(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]{8,20}$`,
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "text",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match",
      pattern: inputValid.password,
      required: true,
    },
  ];

  const handleChange = (e) => {
    setInputValid({ ...inputValid, [e.target.name]: e.target.value });
  };

  //   console.log(inputValid);
  const handleRegist =  async (e) => {
    e.preventDefault();

    try {
     await createUserWithEmailAndPassword(
        auth,
        inputValid.email,
        inputValid.password
      ).then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        updateProfile(user, {
          displayName: inputValid.username,
        });
        navigate("/login");
      });
    } catch (error) {}
  };

  return (
    <div className="regist">
      <form className="regist__form">
        <h2 className="regist__form--title">Register</h2>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={inputValid[input.name]}
            onChange={handleChange}
            className="regist__input"
          />
        ))}

        <button className="button" type="submit" onClick={handleRegist}>
          Register
        </button>

        <div className="regist__form--link">
          <span>Already have an account? </span>
          <Link to="/login" className="regist__form--signup">
            Sign In
          </Link>
        </div>
        <div className="regist__line"></div>
        <div className="regist__media-options">
          <Link to="#" className="regist__form--facebook">
            <img src={facebook} alt="icon" className="regist__icon" />
            <span>Login with Facebook</span>
          </Link>
        </div>
        <div className="regist__media-options">
          <Link to="#" className="regist__form--facebook regist__form--google ">
            <img src={google} alt="icon" className="googleImg" />
            <span>Login with Google</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

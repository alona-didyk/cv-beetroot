import React, { useState } from "react";
import "./Form2.scss";

export const Form2 = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phoneAreaCode, setPhoneAreaCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [isExistingCustomer, setIsExistingCustomer] = useState(false);
  const [, setSubmitted] = useState(false);

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;

    if (name.length < 4 || lastName.length < 4) {
      isValid = false;
      setNameError("Юзернейм повинен містити мінімум 4 символи");
    } else {
      setNameError("");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
      isValid = false;
      setEmailError("Неправильна адреса електронної пошти");
    } else {
      setEmailError("");
    }

    
    if (phoneAreaCode.length < 3 || phoneNumber.length< 6) {
      isValid = false;
      setPhoneError("Перевір формат телефонного коду");
    } else {
      setPhoneError("");
    }

    if (isValid) {
      setSubmitted(true);
      alert("Ваш запит було надіслано.");
    }
  };

  const handleFieldFocus = (errorSetter) => {
    errorSetter("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__title-wrapper">
        <h1 className="form__title">EVENT REGISTRATION FORM</h1>
      </div>
      <div className="form__wrapper">
        <label className="form__label">
          Name
          <div className="form__input-wrapper">
            <input
              className="form__input-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onFocus={() => handleFieldFocus(setNameError)}
            />
            <p className="form__caption">First Name</p>
          </div>
          <div className="form__input-wrapper">
            <input
              className="form__input-name"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              onFocus={() => handleFieldFocus(setNameError)}
            />
            <p className="form__caption">Last Name</p>
          </div>
        </label>
          {nameError && <p className="form__error">{nameError}</p>}

        <label className="form__label">
          Company
          <input
            className="form__input"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </label>

        <label className="form__label">
          Email
          <input
            className="form__input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => handleFieldFocus(setEmailError)}
          />
        </label>
          {emailError && <p className="form__error">{emailError}</p>}

        <label className="form__label">
          Phone
          <div className="form__input-wrapper">
            <input
              className="form__input form__input--small"
              type="tel"
              value={phoneAreaCode}
              onChange={(e) => setPhoneAreaCode(e.target.value)}
              onFocus={() => handleFieldFocus(setPhoneError)}
            />
            <p className="form__caption">Area Code</p>
          </div>
          <div className="form__input-wrapper">
            <input className="form__input form__input--small" 
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            onFocus={() => handleFieldFocus(setPhoneError)}
            />
            <p className="form__caption">Phone Number</p>
          </div>
        </label>
          {phoneError && <p className="form__error">{phoneError}</p>}

        <div className="form__select-wrapper">
          <label for="subject" className="form__label">
            Subject
          </label>

          <select
            id="subject"
            name="subject"
            className="form__input form__select"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          >
            <option disabled selected hidden>
              Choose option
            </option>
            <option value="1">Subject 1</option>
            <option value="2">Subject 2</option>
            <option value="3">Subject 3</option>
          </select>
        </div>

        <div className="form__radiobutton-wrapper">
          <h4 className="form__label">Are you an existing customer?</h4>
          <div className="form__radiobutton-group">
            <label className="form__radiobutton-label">
              <input className="form__radiobutton" 
              type="radio" 
              name="radio" 
              checked={isExistingCustomer}
              onChange={() => setIsExistingCustomer(true)}
              />
              <span className="form__checkmark"></span>
              Yes
            </label>
            <label className="form__radiobutton-label">
              <input className="form__radiobutton" 
              type="radio" 
              name="radio" 
              checked={!isExistingCustomer}
              onChange={() => setIsExistingCustomer(false)} />
              <span className="form__checkmark"></span>
              No
            </label>
          </div>
        </div>
        <button className="form__button" type="submit">
          Register
        </button>
      </div>
    </form>
  );
};




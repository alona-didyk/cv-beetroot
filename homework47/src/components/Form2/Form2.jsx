import React, { useState } from "react";
import "./Form2.scss";
import { TextInput } from "./TextInput";
import { SelectInput } from "./SelectInput";
import { RadioButtonGroup } from "./RadioButtonGroup";

export const Form2 = () => {
  const initialFormState = {
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phoneAreaCode: "",
    phoneNumber: "",
    subject: "",
    isExistingCustomer: false,
  };

  const [form, setForm] = useState(initialFormState);
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid =
      form.firstName.length >= 4 &&
      form.lastName.length >= 4 &&
      form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) &&
      form.phoneAreaCode.length >= 3 &&
      form.phoneNumber.length >= 6;

    if (isValid) {
      alert("Ваш запит було надіслано.");
      setForm(initialFormState);
    } else {
      setErrors({
        firstName:
          form.firstName.length < 4 &&
          "Юзернейм повинен містити мінімум 4 символи",
        lastName:
          form.lastName.length < 4 &&
          "Прізвище повинно містити мінімум 4 символи",
        email:
          !form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) &&
          "Неправильна адреса електронної пошти",
        phone:
          (form.phoneAreaCode.length < 3 || form.phoneNumber.length < 6) &&
          "Перевір формат телефонного коду",
      });
    }
  };

  const handleFieldChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setForm((prevForm) => ({
      ...prevForm,
      [fieldName]: fieldValue,
    }));
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__title-wrapper">
        <h1 className="form__title">EVENT REGISTRATION FORM</h1>
      </div>
      <div className="form__wrapper">
        <div className="form__inline">
          <label className="form__label">Name</label>
          <TextInput
            className="inline"
            // label="First Name"
            name="firstName"
            value={form.firstName}
            onChange={handleFieldChange}
            error={errors.firstName}
            caption="First Name"
          />
          <TextInput
            className="inline"
            // label="Last Name"
            name="lastName"
            value={form.lastName}
            onChange={handleFieldChange}
            error={errors.lastName}
            caption="Last Name"
          />
        </div>

        <label className="form__label">
          Company
          <input
            className="form__input"
            name="company"
            value={form.company}
            onChange={handleFieldChange}
          />
        </label>

        <label className="form__label">
          Email
          <input
            className="form__input"
            type="email"
            name="email"
            value={form.email}
            onChange={handleFieldChange}
          />
          {errors.email && <p className="form__error">{errors.email}</p>}
        </label>

        <label className="form__label">
          Phone
          <div className="form__input-wrapper">
            <input
              className="form__input form__input--small"
              type="tel"
              name="phoneAreaCode"
              value={form.phoneAreaCode}
              onChange={handleFieldChange}
            />
            <p className="form__caption">Area Code</p>
          </div>
          <div className="form__input-wrapper">
            <input
              className="form__input form__input--small"
              type="tel"
              name="phoneNumber"
              value={form.phoneNumber}
              onChange={handleFieldChange}
            />
            <p className="form__caption">Phone Number</p>
          </div>
          {errors.phone && <p className="form__error">{errors.phone}</p>}
        </label>

        <SelectInput
          label="Subject"
          name="subject"
          value={form.subject}
          onChange={handleFieldChange}
          options={[
            { value: "1", label: "Subject 1" },
            { value: "2", label: "Subject 2" },
            { value: "3", label: "Subject 3" },
          ]}
        />

        <RadioButtonGroup
          label="Are you an existing customer?"
          name="isExistingCustomer"
          value={form.isExistingCustomer}
          onChange={handleFieldChange}
          options={[
            { value: true, label: "Yes" },
            { value: false, label: "No" },
          ]}
        />

        <button className="form__button" type="submit">
          Register
        </button>
      </div>
    </form>
  );
};

// import React, { useState } from "react";
// import "./Form1.scss";

// export const Form1 = () => {
//   const defaultFormValue = {
//     name: "",
//     email: "",
//     number: "",
//     message: "",
//     checked: false,
//   };
//   const defaultErrorState = {
//     nameError: "",
//     emailError: "",
//     phoneError: "",
//     messageError: "",
//   };

//   const [formValue, setFormValue] = useState(defaultFormValue);
//   const [submitted, setSubmitted] = useState(false);
//   const [errorState, setErrorState] = useState(defaultErrorState);

//   const inputChangeHandler = (value, formControlName) => {
//     if (formControlName === "number") {
//       value = String(value);
//     }
//     setFormValue((state) => ({ ...state, [formControlName]: value }));
//   };

//   const onSubmitHandler = (event) => {
//     event.preventDefault();

//     let isValid = true;
//     const newErrorState = { ...defaultErrorState };

//     if (formValue.name.length < 4) {
//       isValid = false;
//       newErrorState.nameError = "Юзернейм повинен містити мінімум 4 символи";
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!formValue.email.match(emailRegex)) {
//       isValid = false;
//       newErrorState.emailError = "Перевір формат телефону";
//     }

//     const phoneRegex = /^\+380\d{9}$/;
//     if (!formValue.number.match(phoneRegex)) {
//       isValid = false;
//       newErrorState.phoneError = "Перевір формат телефону";
//     }

//     if (formValue.message.length < 10) {
//       isValid = false;
//       newErrorState.messageError = "Повідомлення має бути не менше 10 символів";
//     }

//     if (isValid) {
//       setSubmitted(true);
//       alert("Ваш запит було надіслано.");
//       setFormValue(defaultFormValue);
//       setErrorState(defaultErrorState);
//     } else {
//       setErrorState(newErrorState);
//     }
//   };

//   const inputFocusHandler = (errorSetter) => () => {
//     errorSetter("");
//   };

//   return (
//     <form className="form" onSubmit={onSubmitHandler}>
//       <div className="form__wrapper">
//         <div className="form__inputs">
//           <label className="form__label">
//             <input
//               onChange={({ target: { value } }) =>
//                 inputChangeHandler(value, "name")
//               }
//               onFocus={inputFocusHandler(() =>
//                 setErrorState({ ...errorState, nameError: "" })
//               )}
//               value={formValue.name}
//               className="form__input"
//               type="text"
//               placeholder="Ім'я та прізвище"
//             />
//             {errorState.nameError && (
//               <p className="form__error">{errorState.nameError}</p>
//             )}
//           </label>
//           <label className="form__label">
//             <input
//               onChange={({ target: { value } }) =>
//                 inputChangeHandler(value, "email")
//               }
//               value={formValue.email}
//               className="form__input"
//               type="text"
//               placeholder="Email"
//               onFocus={inputFocusHandler(() =>
//                 setErrorState({ ...errorState, emailError: "" })
//               )}
//             />
//             {errorState.emailError && (
//               <p className="form__error">{errorState.emailError}</p>
//             )}
//           </label>
//         </div>

//         <label className="form__label">
//           <input
//             onChange={({ target: { value } }) =>
//               inputChangeHandler(value, "number")
//             }
//             value={formValue.number}
//             className="form__input"
//             type="text"
//             placeholder="Телефон (у форматі +380)"
//             onFocus={inputFocusHandler(() =>
//               setErrorState({ ...errorState, phoneError: "" })
//             )}
//           />
//           {errorState.phoneError && (
//             <p className="form__error">{errorState.phoneError}</p>
//           )}
//         </label>
//         <label className="form__label">
//           <input
//             onChange={({ target: { value } }) =>
//               inputChangeHandler(value, "message")
//             }
//             value={formValue.message}
//             className="form__input"
//             type="text"
//             placeholder="Повідомлення"
//             onFocus={inputFocusHandler(() =>
//               setErrorState({ ...errorState, messageError: "" })
//             )}
//           />
//           {errorState.messageError && (
//             <p className="form__error">{errorState.messageError}</p>
//           )}
//         </label>
//         <label className="form__label form__label-checkbox">
//           <input
//             onChange={({ target: { value } }) =>
//               inputChangeHandler(value, "checked")
//             }
//             checked={formValue.checked}
//             type="checkbox"
//             className="form__input form__checkbox"
//           />
//           Надсилати мені оновлення про академію
//         </label>
//         <button type="submit" className="form__button">
//           Надіслати
//         </button>
//       </div>
//     </form>
//   );
// };

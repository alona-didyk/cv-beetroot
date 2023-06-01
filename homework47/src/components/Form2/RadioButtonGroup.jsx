export const RadioButtonGroup = ({ label, name, value, onChange, options }) => {
    return (
      <div className="form__radiobutton-wrapper">
        <h4 className="form__label">{label}</h4>
        <div className="form__radiobutton-group">
          {options.map((option) => (
            <label key={option.value} className="form__radiobutton-label">
              <input
                className="form__radiobutton"
                type="radio"
                name={name}
                checked={value === option.value}
                onChange={onChange}
                value={option.value}
              />
              <span className="form__checkmark"></span>
              {option.label}
            </label>
          ))}
        </div>
      </div>
    );
  };
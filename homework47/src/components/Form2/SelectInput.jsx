export const SelectInput = ({ label, name, value, onChange, options }) => {
  return (
    <div className="form__select-wrapper">
      <label htmlFor={name} className="form__label">
        {label}
      </label>

      <select
        id={name}
        name={name}
        className="form__input form__select"
        value={value}
        onChange={onChange}
      >
        <option disabled selected hidden>
          Choose option
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

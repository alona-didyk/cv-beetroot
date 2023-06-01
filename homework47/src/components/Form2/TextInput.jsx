export const TextInput = ({ label, name, value, onChange, error, caption }) => {
  return (
    <label className="form__label">
      {label}
      <div className="form__input-wrapper">
        <input
          className="form__input-name"
          type="text"
          name={name}
          value={value}
          onChange={onChange}
        />
        <p className="form__caption">{caption}</p>
      </div>
      {error && <p className="form__error">{error}</p>}
    </label>
  );
};

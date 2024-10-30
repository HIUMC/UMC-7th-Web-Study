function Input({ value, defaultValue, onChange, className }) {
  return (
    <input
      type="text"
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      className={className}
    />
  );
}

export default Input;

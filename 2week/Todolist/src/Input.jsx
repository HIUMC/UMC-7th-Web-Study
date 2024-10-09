import './App.css';

const Input = ({ value, onChange, defaultValue }) => {
  return (
    <input
      type="text"
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      className="custom-input"
    />
  );
};

export default Input;

import './InputRadio.css';

const CLASS_NAME_DEFAULT = 'input-radio';
const CLASS_NAMES = {
  Work: 'work-input',
  School: 'school-input',
  Family: 'family-input',
  Low: 'low-input',
  Medium: 'medium-input',
  High: 'high-input',
};

const InputRadio = ({ value, handleChange, name, checked }) => {
  const className =
    `${CLASS_NAME_DEFAULT} ${CLASS_NAMES[value]}` || CLASS_NAME_DEFAULT;
  return (
    <input
      required
      className={className}
      type="radio"
      onChange={handleChange}
      name={name}
      value={value}
      checked={checked}
    />
  );
};

export default InputRadio;

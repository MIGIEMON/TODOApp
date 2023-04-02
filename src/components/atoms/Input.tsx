import './Input.css';

type InputProps = {
  inputType: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
};

export const Input: React.FC<InputProps> = ({ inputType, value, onChange, placeholder, type = 'text' }) => {
  return (
    <input
      className={`Input ${inputType}`}
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
};
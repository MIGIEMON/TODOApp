import './RadioButton.css';

type RadioButtonProps = {
  radioButtonType: string;
  checked?: boolean
  onChange: (value: string) => void;
  id: string;
  name: string;
  children: React.ReactNode;
};

export const RadioButton: React.FC<RadioButtonProps> = ({ radioButtonType = 'base', id, name, checked = false, children, onChange }) => {


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    if (onChange) {
      onChange(e.target.value);
    }
  };
  return (
    <div className={`Radio ${radioButtonType}`}>
      <input type="radio" checked={checked}
        onChange={handleChange} id={id} name={name} />
      <label htmlFor={id}>
        {children}
      </label>
    </div>
  );
};
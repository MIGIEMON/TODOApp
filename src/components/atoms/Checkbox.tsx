import './Checkbox.css';

type CheckboxProps = {
  checkBoxType: string;
  isCompleted: boolean;
  onChange: (checked: boolean) => void;
  id: string;
  children: React.ReactNode;
};

export const Checkbox: React.FC<CheckboxProps> = ({ checkBoxType, isCompleted, onChange, id, children }) => {
  return (
    <div className={`Checkbox ${checkBoxType}`}>
      <input type="checkbox" checked={isCompleted}
        onChange={(e) => onChange(e.target.checked)} id={id} />
      <label htmlFor={id}>
        {children}
      </label>
    </div>
  );
};
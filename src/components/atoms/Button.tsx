import './Button.css';

type ButtonProps = {
  buttonType: string;
  onClick?: (e: React.MouseEvent) => void;
  children: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({ buttonType, onClick, children }) => {
  return (
    <button className={`Button ${buttonType}`} onClick={onClick}>
      {children}
    </button>
  );
};

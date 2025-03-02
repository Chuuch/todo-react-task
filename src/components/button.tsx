interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 pyt-2 rounded-lg transition-colors ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

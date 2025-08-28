import React from 'react';
import { ButtonProps } from '../../interfaces';

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
}) => {
  // Simple button styles
  const baseStyle = 'px-4 py-2 rounded font-medium';
  const primaryStyle = 'bg-red-500 text-white hover:bg-red-600';
  const secondaryStyle = 'bg-gray-500 text-white hover:bg-gray-600';
  const disabledStyle = 'opacity-50 cursor-not-allowed';

  // Choose the right style
  let buttonStyle = baseStyle;
  if (variant === 'primary') buttonStyle += ` ${primaryStyle}`;
  if (variant === 'secondary') buttonStyle += ` ${secondaryStyle}`;
  if (disabled) buttonStyle += ` ${disabledStyle}`;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={buttonStyle}
    >
      {children}
    </button>
  );
};

export default Button;
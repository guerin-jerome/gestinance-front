import { SyntheticEvent } from 'react';
import './Button.css';

interface ButtonProps {
  name: string;
  type?: 'submit' | 'button';
  appearance?: 'primary' | 'secondary';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
}

export const Button = ({
  name,
  type = 'button',
  appearance = 'primary',
  disabled,
  loading,
  onClick,
}: ButtonProps) => {
  function handleClick(event: SyntheticEvent) {
    if (onClick) {
      event.preventDefault();
      onClick();
    }
  }

  return (
    <button
      className={`button ${
        (!!disabled || !!loading) && 'disabled'
      } ${appearance}`}
      disabled={!!disabled || !!loading}
      type={type}
      role="button"
      onClick={handleClick}
    >
      {loading ? 'Chargement...' : name}
    </button>
  );
};

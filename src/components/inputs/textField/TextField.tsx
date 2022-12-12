import { ChangeEvent, useState } from 'react';
import './TextField.css';

interface TextFieldProps {
  name: string;
  onChange?: (value: string) => void;
  size?: 'small' | 'medium' | 'large';
  label?: string;
  placeholder?: string;
  maxLength?: number;
  minLength?: number;
  disabled?: boolean;
  required?: boolean;
  invalid?: boolean;
}

export const TextField = ({
  name,
  disabled,
  required,
  invalid,
  size = 'medium',
  label,
  placeholder,
  minLength,
  maxLength,
  onChange,
}: TextFieldProps) => {
  const [value, setValue] = useState('');

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value;
    setValue(newValue);
    if (onChange) onChange(newValue);
  }

  return (
    <div className="input-text">
      {!!label && (
        <label htmlFor={name}>
          {label}
          {!!required && <span>*</span>}
        </label>
      )}
      <input
        id={name}
        name={name}
        className={`${size} ${!!disabled && 'disabled'} ${
          !!invalid && 'invalid'
        }`}
        type="text"
        role="textbox"
        disabled={disabled}
        maxLength={maxLength}
        minLength={minLength}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

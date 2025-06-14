import React from 'react';

interface TextInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  type?: 'text' | 'email' | 'tel' | 'url';
  pattern?: string;
  className?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  name,
  value,
  onChange,
  onKeyDown,
  placeholder,
  required = false,
  type = 'text',
  pattern,
  className = ''
}) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        required={required}
        pattern={pattern}
        className={`input input-bordered ${className}`}
      />
    </div>
  );
};

export default TextInput; 
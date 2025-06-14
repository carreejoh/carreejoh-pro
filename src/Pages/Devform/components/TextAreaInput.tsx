import React from 'react';

interface TextAreaInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  className?: string;
}

const TextAreaInput: React.FC<TextAreaInputProps> = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  rows = 3,
  className = ''
}) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={rows}
        className={`textarea textarea-bordered ${className}`}
      />
    </div>
  );
};

export default TextAreaInput; 
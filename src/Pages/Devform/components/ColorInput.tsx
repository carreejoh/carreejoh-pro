import React from 'react';

interface ColorInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const ColorInput: React.FC<ColorInputProps> = ({
  label,
  name,
  value,
  onChange,
  onKeyDown,
  placeholder = '#000000'
}) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <div className="flex items-center space-x-3">
        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          pattern="^#[0-9A-Fa-f]{6}$"
          className="input input-bordered flex-1"
        />
        <div 
          className="w-12 h-12 rounded border-2 border-gray-300"
          style={{ backgroundColor: value }}
        ></div>
      </div>
    </div>
  );
};

export default ColorInput; 
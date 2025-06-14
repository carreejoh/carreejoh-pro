import React from 'react';

interface CheckboxFieldProps {
  label: string;
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const CheckboxField: React.FC<CheckboxFieldProps> = ({
  label,
  name,
  checked,
  onChange,
  className = ''
}) => {
  return (
    <div className={`form-control ${className}`}>
      <label className="label cursor-pointer justify-start space-x-3">
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          className="checkbox checkbox-primary"
        />
        <span className="label-text font-medium">{label}</span>
      </label>
    </div>
  );
};

export default CheckboxField; 
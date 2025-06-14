import React from 'react';

interface FormSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const FormSection: React.FC<FormSectionProps> = ({
  title,
  children,
  className = ''
}) => {
  return (
    <div className={`bg-base-200 rounded-lg p-6 ${className}`}>
      <h3 className="text-xl font-bold text-primary mb-4">{title}</h3>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
};

export default FormSection; 
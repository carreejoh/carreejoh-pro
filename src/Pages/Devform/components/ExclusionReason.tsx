import React from 'react';

interface ExclusionReasonProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
}

const ExclusionReason: React.FC<ExclusionReasonProps> = ({
  value,
  onChange,
  placeholder = "Why is this field not included?"
}) => {
  return (
    <div className="mt-3 p-3 bg-warning/10 border border-warning/20 rounded-lg">
      <label className="label">
        <span className="label-text text-warning font-medium">Exclusion Reason</span>
      </label>
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={2}
        className="textarea textarea-bordered textarea-warning w-full text-sm"
      />
    </div>
  );
};

export default ExclusionReason; 
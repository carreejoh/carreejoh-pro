import React from 'react';

interface ChecklistItem {
  id: string;
  label: string;
  checked: boolean;
}

interface EnhancedExclusionReasonProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  checklistItems: ChecklistItem[];
  onChecklistChange: (itemId: string, checked: boolean) => void;
  title: string;
}

const EnhancedExclusionReason: React.FC<EnhancedExclusionReasonProps> = ({
  value,
  onChange,
  checklistItems,
  onChecklistChange,
  title
}) => {
  return (
    <div className="mt-3 p-4 bg-warning/10 border border-warning/20 rounded-lg">
      <div className="mb-4">
        <h5 className="font-semibold text-warning-content mb-2">
          {title} - Search Checklist
        </h5>
        <p className="text-sm text-gray-600 mb-3">
          Check off each location you've searched:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {checklistItems.map((item) => (
            <label key={item.id} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={item.checked}
                onChange={(e) => onChecklistChange(item.id, e.target.checked)}
                className="checkbox checkbox-sm checkbox-warning"
              />
              <span className="text-sm">{item.label}</span>
            </label>
          ))}
        </div>
      </div>
      
      <div>
        <label className="label">
          <span className="label-text font-medium text-warning-content">
            Exclusion Reason / Notes:
          </span>
        </label>
        <textarea
          value={value}
          onChange={onChange}
          className="textarea textarea-bordered textarea-warning w-full"
          rows={3}
          placeholder="Explain why this item is excluded or note what was found/missing..."
        />
      </div>
    </div>
  );
};

export default EnhancedExclusionReason; 
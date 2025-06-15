import React from 'react';
import EnhancedExclusionReason from './EnhancedExclusionReason';
import { ChecklistItem } from './ChecklistManager';

interface UniversalExclusionReasonProps {
  section: string;
  field: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  checklistItems: ChecklistItem[];
  onChecklistChange: (itemId: string, checked: boolean) => void;
}

const UniversalExclusionReason: React.FC<UniversalExclusionReasonProps> = ({
  field,
  value,
  onChange,
  checklistItems,
  onChecklistChange
}) => {
  const title = field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()).replace(/_/g, ' ');
  
  return (
    <EnhancedExclusionReason
      value={value}
      onChange={onChange}
      checklistItems={checklistItems}
      onChecklistChange={onChecklistChange}
      title={title}
    />
  );
};

export default UniversalExclusionReason; 
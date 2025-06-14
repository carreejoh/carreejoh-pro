import React from 'react';

interface InstructionButtonProps {
  onClick: () => void;
}

const InstructionButton: React.FC<InstructionButtonProps> = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="btn btn-info btn-sm ml-2"
      title="View Collection Instructions"
    >
      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
      </svg>
      Instructions
    </button>
  );
};

export default InstructionButton; 
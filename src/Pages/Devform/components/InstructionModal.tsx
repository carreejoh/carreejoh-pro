import React from 'react';

interface InstructionModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const InstructionModal: React.FC<InstructionModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-2xl max-h-[80vh] overflow-y-auto m-4 w-full">
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
          <h3 className="text-xl font-bold text-gray-800">{title} - Collection Instructions</h3>
          <button
            onClick={onClose}
            className="btn btn-sm btn-circle btn-ghost"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-6">
          <div className="text-sm text-gray-700 space-y-3">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructionModal; 
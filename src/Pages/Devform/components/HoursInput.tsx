import React from 'react';

interface DayHours {
  day: string;
  time: string;
}

interface HoursInputProps {
  hours: DayHours[];
  onChange: (hours: DayHours[]) => void;
}

const HoursInput: React.FC<HoursInputProps> = ({ hours, onChange }) => {
  const handleDayChange = (index: number, field: 'day' | 'time', value: string) => {
    const newHours = [...hours];
    newHours[index] = { ...newHours[index], [field]: value };
    onChange(newHours);
  };

  const addDay = () => {
    onChange([...hours, { day: '', time: '' }]);
  };

  const removeDay = (index: number) => {
    onChange(hours.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-3">
      {hours.map((hour, index) => (
        <div key={index} className="flex items-center space-x-3 bg-base-100 p-3 rounded-lg">
          <input
            type="text"
            value={hour.day}
            onChange={(e) => handleDayChange(index, 'day', e.target.value)}
            placeholder="Day (e.g., Monday)"
            className="input input-bordered input-sm flex-1"
          />
          <input
            type="text"
            value={hour.time}
            onChange={(e) => handleDayChange(index, 'time', e.target.value)}
            placeholder="Time (e.g., 9:30 AM - 6 PM)"
            className="input input-bordered input-sm flex-2"
          />
          <button
            type="button"
            onClick={() => removeDay(index)}
            className="btn btn-error btn-sm"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={addDay}
        className="btn btn-outline btn-sm"
      >
        Add Day
      </button>
    </div>
  );
};

export default HoursInput; 
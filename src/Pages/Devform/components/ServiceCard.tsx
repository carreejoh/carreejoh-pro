import React from 'react';
import PictureUploader from './pictureUploader';

interface ServiceCardData {
  title: string;
  description: string;
  image: { cropped: string; original: string };
  items: string[];
}

interface ServiceCardProps {
  title: string;
  data: ServiceCardData;
  onChange: (data: ServiceCardData) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  data,
  onChange,
  onKeyDown
}) => {
  const handleInputChange = (field: keyof ServiceCardData, value: string) => {
    onChange({ ...data, [field]: value });
  };

  const handleItemChange = (index: number, value: string) => {
    const newItems = [...data.items];
    newItems[index] = value;
    onChange({ ...data, items: newItems });
  };

  const addItem = () => {
    onChange({ ...data, items: [...data.items, ''] });
  };

  const removeItem = (index: number) => {
    onChange({ ...data, items: data.items.filter((_, i) => i !== index) });
  };

  return (
    <div className="bg-base-100 p-4 rounded-lg border">
      <h4 className="font-semibold text-lg mb-3">{title}</h4>
      
      <div className="space-y-3">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            value={data.title}
            onChange={(e) => handleInputChange('title', e.target.value)}
            onKeyDown={onKeyDown}
            className="input input-bordered input-sm"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            value={data.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
            className="textarea textarea-bordered textarea-sm"
            rows={2}
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <PictureUploader
            pictureState={data.image}
            setPictureState={(image) => onChange({ ...data, image })}
            uploadText={`Upload ${title} Image`}
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Service Items</span>
          </label>
          <div className="space-y-2">
            {data.items.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <input
                  type="text"
                  value={item}
                  onChange={(e) => handleItemChange(index, e.target.value)}
                  onKeyDown={onKeyDown}
                  placeholder="Service item"
                  className="input input-bordered input-sm flex-1"
                />
                <button
                  type="button"
                  onClick={() => removeItem(index)}
                  className="btn btn-error btn-sm"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addItem}
              className="btn btn-outline btn-sm"
            >
              Add Item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard; 
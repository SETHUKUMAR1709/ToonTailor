import React from 'react';
import { hairColors } from '../../utils/constants';

const colors=Object.keys(hairColors);

const Appearance = ({ appearance, onChange }) => {
  const handleChange = (feature, value) => {
    onChange({
      ...appearance,
      [feature]: value
    });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-3">Appearance</h2>
      <div className="mb-3">
        <label className="block text-gray-700 mb-1">Backpacks</label>
        
      </div>
      <div className="mb-3">
        <label className="block text-gray-700 mb-1">Hair Color</label>
        <div className="flex-row items-center">
        <select
          value={appearance.hairColor || ''}
          onChange={(e) => handleChange('hairColor', e.target.value)}
          className="w-full p-2 border rounded"
        >
          {colors.map((color) => (
            <option key={color} value={hairColors[color]}>{color}
            </option>
          ))}
        </select>
        </div>
      </div>
      
      <div className="mb-3">
        <label className="block text-gray-700 mb-1">Eye Color</label>
        <div className="flex items-center">
          <input
            type="color"
            value={appearance.eyeColor}
            onChange={(e) => handleChange('eyeColor', e.target.value)}
            className="w-12 h-8 mr-2"
          />
          <span className="text-sm">{appearance.eyeColor}</span>
        </div>
      </div>
      
      <div className="mb-3">
        <label className="block text-gray-700 mb-1">Skin Tone</label>
        <div className="flex items-center">
          <input
            type="color"
            value={appearance.skinTone}
            onChange={(e) => handleChange('skinTone', e.target.value)}
            className="w-12 h-8 mr-2"
          />
          <span className="text-sm">{appearance.skinTone}</span>
        </div>
      </div>
      
      <div className="mb-3">
        <label className="block text-gray-700 mb-1">Height (cm)</label>
        <div className="flex items-center">
          <input
            type="range"
            min="120"
            max="220"
            value={appearance.height}
            onChange={(e) => handleChange('height', parseInt(e.target.value))}
            className="w-full mr-3"
          />
          <span className="w-12 text-center">{appearance.height}</span>
        </div>
      </div>
      
      <div className="mb-3">
        <label className="block text-gray-700 mb-1">Hair Style</label>
        <select
          value={appearance.hairStyle || 'short'}
          onChange={(e) => handleChange('hairStyle', e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="short">Short</option>
          <option value="long">Long</option>
          <option value="ponytail">Ponytail</option>
          <option value="bald">Bald</option>
          <option value="braided">Braided</option>
        </select>
      </div>
      
      <div className="mb-3">
        <label className="block text-gray-700 mb-1">Facial Features</label>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={appearance.beard}
              onChange={(e) => handleChange('beard', e.target.checked)}
              className="mr-2"
            />
            <span>Beard</span>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={appearance.scars}
              onChange={(e) => handleChange('scars', e.target.checked)}
              className="mr-2"
            />
            <span>Scars</span>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={appearance.tattoos}
              onChange={(e) => handleChange('tattoos', e.target.checked)}
              className="mr-2"
            />
            <span>Tattoos</span>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={appearance.earrings}
              onChange={(e) => handleChange('earrings', e.target.checked)}
              className="mr-2"
            />
            <span>Earrings</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appearance;
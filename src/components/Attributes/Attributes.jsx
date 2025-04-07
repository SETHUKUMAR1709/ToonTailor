import React from 'react'; 

const Attributes = ({ attributes, raceBonuses, onChange }) => {
  const handleAttributeChange = (attribute, value) => {
    onChange({
      ...attributes,
      [attribute]: parseInt(value)
    });
  };

  // Define attribute descriptions
  const attributeDescriptions = {
    strength: 'Physical power and carrying capacity',
    dexterity: 'Agility, reflexes, and balance',
    constitution: 'Endurance, stamina, and health',
    intelligence: 'Mental acuity, information recall, analytical skill',
    wisdom: 'Awareness, intuition, and insight',
    charisma: 'Force of personality, persuasiveness, leadership'
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-3">Attributes</h2>
      
      {Object.entries(attributes).map(([attr, value]) => {
        const bonus = raceBonuses && raceBonuses[attr] ? raceBonuses[attr] : 0;
        const displayValue = value;
        const baseValue = value - bonus;
        
        return (
          <div key={attr} className="mb-3">
            <div className="flex justify-between">
              <label className="block text-gray-700 mb-1 capitalize">{attr}</label>
              {bonus !== 0 && (
                <span className={`text-xs ${bonus > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {bonus > 0 ? `+${bonus}` : bonus} racial bonus
                </span>
              )}
            </div>
            
            <div className="flex items-center">
              <input
                type="range"
                min="1"
                max="20"
                value={baseValue}
                onChange={(e) => handleAttributeChange(attr, parseInt(e.target.value) + bonus)}
                className="w-full mr-3"
              />
              <span className="w-8 text-center font-bold">{displayValue}</span>
            </div>
            
            <p className="text-xs text-gray-500 mt-1">{attributeDescriptions[attr]}</p>
          </div>
        );
      })}
      
      <div className="mt-4 p-3 bg-gray-100 rounded text-sm">
        <p className="font-medium">Attribute Points:</p>
        <p className="text-xs mt-1">
          Adjust the sliders to distribute your attribute points. 
          Race bonuses are automatically applied.
        </p>
      </div>
    </div>
  );
};

export default Attributes;
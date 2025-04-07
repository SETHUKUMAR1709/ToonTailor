import React from 'react';
import { CLASS_ABILITIES, RACE_ABILITIES } from '../../utils/constants';


const Abilities = ({ character, onChange }) => {
  const classAbilities = CLASS_ABILITIES[character.class] || [];
  const raceAbilities = RACE_ABILITIES[character.race] || [];
  
  const handleAbilityToggle = (ability) => {
    const currentSelected = character.selectedAbilities || [];
    let newSelected;
    
    if (currentSelected.includes(ability)) {
      // Remove ability if already selected
      newSelected = currentSelected.filter(a => a !== ability);
    } else {
      // Add ability if not selected and we haven't reached the limit
      if (currentSelected.length < 4) {
        newSelected = [...currentSelected, ability];
      } else {
        alert('You can only select up to 4 abilities at once.');
        return;
      }
    }
    
    onChange({
      ...character,
      selectedAbilities: newSelected
    });
  };
  
  // Get ability description (in a real app, this would come from a database)
  const getAbilityDescription = (ability) => {
    const descriptions = {
      // Warrior abilities
      'Rage': 'Enter a rage, increasing damage but reducing defense',
      'Heavy Strike': 'Powerful attack with a chance to stun',
      'Shield Wall': 'Greatly increase defense for a short time',
      'Taunt': 'Force enemies to attack you instead of allies',
      
      // Mage abilities
      'Fireball': 'Launch a ball of fire that deals AoE damage',
      'Ice Nova': 'Freeze nearby enemies, dealing damage and slowing them',
      'Teleport': 'Instantly move to a target location',
      'Arcane Shield': 'Create a magical barrier that absorbs damage',
      
      // Rogue abilities
      'Backstab': 'Deal massive damage when attacking from behind',
      'Stealth': 'Become invisible to enemies until you attack',
      'Poison Strike': 'Poison your weapon, dealing damage over time',
      'Evasion': 'Greatly increase dodge chance for a short time',
      
      // Cleric abilities
      'Divine Light': 'Heal allies and damage undead enemies',
      'Heal': 'Restore health to an ally',
      'Smite': 'Call down divine energy to damage an enemy',
      'Prayer of Protection': 'Reduce damage taken by all nearby allies',
      
      // Ranger abilities
      'Aimed Shot': 'Carefully aim for a critical hit',
      'Beast Companion': 'Summon an animal companion to fight alongside you',
      'Track': 'Follow the trail of enemies or prey',
      'Nature\'s Blessing': 'Gain enhanced senses and movement speed',
      
      // Race abilities
      'Versatility': 'Gain additional skill points',
      'Adaptability': 'Faster learning and experience gain',
      'Night Vision': 'See clearly in darkness',
      'Magic Resistance': 'Reduced damage from magical attacks',
      'Archery Mastery': 'Increased accuracy with bows',
      'Stonework': 'Detect irregularities in stone structures',
      'Poison Resistance': 'Reduced damage from poison',
      'Darkvision': 'See in complete darkness',
      'Berserker Rage': 'Enter a powerful rage when near death',
      'Intimidation': 'Chance to frighten enemies',
      'Endurance': 'Increased stamina and carry capacity',
      'Lucky': 'Chance to avoid critical hits',
      'Nimble': 'Increased movement speed'
    };
    
    return descriptions[ability] || 'No description available';
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-3">Abilities</h2>
      
      <div className="mb-4">
        <h3 className="font-medium text-gray-700 mb-2">Class Abilities</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {classAbilities.map((ability) => (
            <div 
              key={ability} 
              className={`border rounded p-2 cursor-pointer ${
                character.selectedAbilities && character.selectedAbilities.includes(ability) 
                  ? 'bg-blue-100 border-blue-500' 
                  : 'hover:bg-gray-50'
              }`}
              onClick={() => handleAbilityToggle(ability)}
            >
              <div className="flex justify-between items-center">
                <h4 className="font-medium">{ability}</h4>
                <div className="w-4 h-4 rounded-full border flex items-center justify-center">
                  {character.selectedAbilities && character.selectedAbilities.includes(ability) && (
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  )}
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-1">{getAbilityDescription(ability)}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mb-4">
        <h3 className="font-medium text-gray-700 mb-2">Racial Abilities</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {raceAbilities.map((ability) => (
            <div 
              key={ability} 
              className={`border rounded p-2 cursor-pointer ${
                character.selectedAbilities && character.selectedAbilities.includes(ability) 
                  ? 'bg-blue-100 border-blue-500' 
                  : 'hover:bg-gray-50'
              }`}
              onClick={() => handleAbilityToggle(ability)}
            >
              <div className="flex justify-between items-center">
                <h4 className="font-medium">{ability}</h4>
                <div className="w-4 h-4 rounded-full border flex items-center justify-center">
                  {character.selectedAbilities && character.selectedAbilities.includes(ability) && (
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  )}
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-1">{getAbilityDescription(ability)}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-4 bg-gray-100 p-3 rounded">
        <h3 className="font-medium mb-2">Selected Abilities ({(character.selectedAbilities || []).length}/4)</h3>
        {character.selectedAbilities && character.selectedAbilities.length > 0 ? (
          <ul className="list-disc pl-5">
            {character.selectedAbilities.map(ability => (
              <li key={ability}>{ability}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-sm">No abilities selected yet</p>
        )}
        <p className="text-xs text-gray-500 mt-2">
          Click on abilities to select them. You can have up to 4 active abilities at once.
        </p>
      </div>
    </div>
  );
};

export default Abilities;
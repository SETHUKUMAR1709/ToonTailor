import { CLASS_ATTRIBUTES, RACE_BONUSES, CLASS_ABILITIES, RACE_ABILITIES } from '../utils/constants';

/**
 * Calculate the final attributes with race and class bonuses applied
 * 
 * @param {String} characterClass - Character class
 * @param {String} race - Character race
 * @param {Object} baseAttributes - Base attribute values
 * @returns {Object} Calculated attributes
 */
export const calculateAttributes = (characterClass, race, baseAttributes = null) => {
  // Start with class-based defaults if no base attributes provided
  const startingAttributes = baseAttributes || { ...CLASS_ATTRIBUTES[characterClass] };
  
  // Apply race bonuses
  const raceBonuses = RACE_BONUSES[race] || {};
  
  const calculatedAttributes = { ...startingAttributes };
  
  // Apply race bonuses to calculated attributes
  Object.keys(raceBonuses).forEach(attribute => {
    if (calculatedAttributes[attribute] !== undefined) {
      calculatedAttributes[attribute] += raceBonuses[attribute];
    }
  });
  
  return calculatedAttributes;
};

/**
 * Get the available abilities for a character
 * 
 * @param {String} characterClass - Character class
 * @param {String} race - Character race
 * @returns {Object} Class and race abilities
 */
export const getCharacterAbilities = (characterClass, race) => {
  return {
    classAbilities: CLASS_ABILITIES[characterClass] || [],
    raceAbilities: RACE_ABILITIES[race] || []
  };
};

/**
 * Generate a character avatar path based on race and gender
 * 
 * @param {String} race - Character race
 * @param {String} gender - Character gender
 * @returns {String} Path to avatar image
 */
// src/services/characterService.js
export const getAvatarPath = () => {
  console.log(`/assets/avatars/default.png`);
  return `/assets/avatars/default.png`;
};
/**
 * Create a new character with default values
 * 
 * @returns {Object} New character object
 */
export const createNewCharacter = () => {
  const defaultClass = 'Warrior';
  const defaultRace = 'Human';
  const defaultTop = 'b_tee';
  const defaultFoot = 'b_boots';
  const defaultHair = 'shortdreads';
  const defaultPant = 'rainbow_tights';
  
  return {
    id: Date.now().toString(),
    name: '',
    race: defaultRace,
    class: defaultClass,
    gender: 'Male',
    attributes: calculateAttributes(defaultClass, defaultRace),
    appearance: {
      hairColor: 'B_',
      eyeColor: '#8B4513',
      skinTone: '#F5DEB3',
      height: 175, // cm
    },
    equipment: {
      top: defaultTop,
      foot: defaultFoot,
      hair: defaultHair,
      hat: '',
      accessory: '',
      pant: defaultPant,
      bag: '',
      items: []
    },
    abilities: [],
    selectedAbilities: [],
    level: 1,
    experience: 0
  };
};
// Storage service for saving and loading characters from local storage

const STORAGE_KEY = 'character-creator-data';

/**
 * Save characters to local storage
 * 
 * @param {Array} characters - Array of character objects
 */
export const saveCharacters = (characters) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(characters));
    return true;
  } catch (error) {
    console.error('Error saving characters to local storage:', error);
    return false;
  }
};

/**
 * Load characters from local storage
 * 
 * @returns {Array} Array of character objects or empty array if none found
 */
export const loadCharacters = () => {
  try {
    const charactersData = localStorage.getItem(STORAGE_KEY);
    return charactersData ? JSON.parse(charactersData) : [];
  } catch (error) {
    console.error('Error loading characters from local storage:', error);
    return [];
  }
};

/**
 * Save a single character to local storage
 * 
 * @param {Object} character - Character object
 * @returns {Boolean} Success status
 */
export const saveCharacter = (character) => {
  try {
    const characters = loadCharacters();
    const existingIndex = characters.findIndex(c => c.id === character.id);
    
    if (existingIndex >= 0) {
      // Update existing character
      characters[existingIndex] = character;
    } else {
      // Add new character with unique ID if it doesn't have one
      if (!character.id) {
        character.id = Date.now().toString();
      }
      characters.push(character);
    }
    
    saveCharacters(characters);
    return true;
  } catch (error) {
    console.error('Error saving character:', error);
    return false;
  }
};

/**
 * Delete a character from local storage
 * 
 * @param {String} characterId - ID of character to delete
 * @returns {Boolean} Success status
 */
export const deleteCharacter = (characterId) => {
  try {
    const characters = loadCharacters();
    const updatedCharacters = characters.filter(char => char.id !== characterId);
    saveCharacters(updatedCharacters);
    return true;
  } catch (error) {
    console.error('Error deleting character:', error);
    return false;
  }
};

/**
 * Export character data as JSON file
 * 
 * @param {Object} character - Character to export
 */
export const exportCharacter = (character) => {
  try {
    const dataStr = JSON.stringify(character, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `${character.name || 'character'}-${character.id}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    return true;
  } catch (error) {
    console.error('Error exporting character:', error);
    return false;
  }
};

/**
 * Import character from JSON file
 * 
 * @param {File} file - JSON file to import
 * @returns {Promise} Promise resolving to imported character
 */
export const importCharacter = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (event) => {
      try {
        const character = JSON.parse(event.target.result);
        resolve(character);
      } catch (error) {
        reject(new Error('Invalid character file format'));
      }
    };
    
    reader.onerror = () => {
      reject(new Error('Error reading file'));
    };
    
    reader.readAsText(file);
  });
};
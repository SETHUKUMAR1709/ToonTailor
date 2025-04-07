import React, { useState, useEffect } from 'react';
import { loadCharacters, deleteCharacter, exportCharacter, importCharacter } from '../../services/storageService';
 

const CharacterList = ({ onSelectCharacter, onCreateNew }) => {
  const [characters, setCharacters] = useState([]);
  const [fileInput, setFileInput] = useState(null);
  
  // Load characters on component mount
  useEffect(() => {
    refreshCharacterList();
  }, []);
  
  const refreshCharacterList = () => {
    const loadedCharacters = loadCharacters();
    setCharacters(loadedCharacters);
  };
  
  const handleSelectCharacter = (character) => {
    onSelectCharacter(character);
  };
  
  const handleDeleteCharacter = (e, characterId) => {
    e.stopPropagation(); // Prevent triggering the parent onClick
    
    if (window.confirm('Are you sure you want to delete this character?')) {
      deleteCharacter(characterId);
      refreshCharacterList();
    }
  };
  
  const handleExportCharacter = (e, character) => {
    e.stopPropagation(); // Prevent triggering the parent onClick
    exportCharacter(character);
  };
  
  const handleImportClick = () => {
    if (fileInput) {
      fileInput.click();
    }
  };
  
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    try {
      const character = await importCharacter(file);
      onSelectCharacter(character);
    } catch (error) {
      alert(`Error importing character: ${error.message}`);
    }
    
    // Reset file input
    e.target.value = '';
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-3">Your Characters</h2>
      
      <div className="flex mb-4 gap-2">
        <button
          onClick={onCreateNew}
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded flex-grow"
        >
          Create New Character
        </button>
        
        <button
          onClick={handleImportClick}
          className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-2 rounded"
        >
          Import
        </button>
        
        <input
          type="file"
          accept=".json"
          style={{ display: 'none' }}
          onChange={handleFileChange}
          ref={(input) => setFileInput(input)}
        />
      </div>
      
      <div className="max-h-80 overflow-y-auto">
        {characters.length > 0 ? (
          <div className="space-y-2">
            {characters.map((character) => (
              <div
                key={character.id}
                className="border rounded p-3 hover:bg-gray-50 cursor-pointer flex justify-between items-center"
                onClick={() => handleSelectCharacter(character)}
              >
                <div>
                  <h3 className="font-medium">{character.name || 'Unnamed Character'}</h3>
                  <p className="text-sm text-gray-600">
                    Level {character.level} {character.race} {character.class}
                  </p>
                </div>
                
                <div className="flex gap-2">
                  <button
                    onClick={(e) => handleExportCharacter(e, character)}
                    className="text-blue-500 hover:text-blue-700 text-sm"
                  >
                    Export
                  </button>
                  <button
                    onClick={(e) => handleDeleteCharacter(e, character.id)}
                    className="text-red-500 hover:text-red-700 text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-4 text-gray-500">
            <p>No characters created yet</p>
            <p className="text-sm mt-1">Create a new character to get started!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CharacterList;
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { getCharacterByName } from '../api/rickandmortyapi';

const SearchCharacter = ({ setCharacters }) => {
  const [characterName, setCharacterName] = useState('');

  const handleSearch = async () => {
    try {
      const data = await getCharacterByName(characterName);
      setCharacters(data);
      Swal.fire("Character Found", `Character ${characterName} found successfully!`, "success");
    } catch (error) {
      console.error('Error fetching character:', error);
      Swal.fire("Error", `Character ${characterName} not found.`, "error");
    }
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter character name"
        value={characterName}
        onChange={(e) => setCharacterName(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchCharacter;

import React, { useState } from 'react';
import { getQuotesByCharacter } from '../api/gameOfThronesApi';

const SearchCharacter = ({ setQuotes }) => {
  const [characterName, setCharacterName] = useState('');
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      setError(null);
      const quotes = await getQuotesByCharacter(characterName);
      setQuotes(quotes);
    } catch (error) {
      setError(`Failed to fetch quotes: ${error.message}`);
    }
  };

  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder="Enter character name"
        value={characterName}
        onChange={(e) => setCharacterName(e.target.value)}
        style={{ color: 'black', backgroundColor: 'lightgray' }}
      />
      <div className="input-group-append">
        <button className="btn btn-primary" onClick={handleSearch}>
          <div className="btninner">Search</div>
        </button>
      </div>
      {error && <div className="alert alert-danger mt-2">{error}</div>}
    </div>
  );
};

export default SearchCharacter;

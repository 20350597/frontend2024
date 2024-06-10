import React, { useState } from 'react';
import { getHouseByName } from '../api/gameOfThronesApi';

const SearchHouse = ({ setHouses }) => {
  const [houseName, setHouseName] = useState('');
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      setError(null);
      const houses = await getHouseByName(houseName);
      setHouses([houses]); // wrap in array to match expected structure
    } catch (error) {
      setError(`Failed to fetch house: ${error.message}`);
    }
  };

  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder="Enter house name"
        value={houseName}
        onChange={(e) => setHouseName(e.target.value)}
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

export default SearchHouse;

import React, { useState } from "react";
import { getFruitByName } from "../api/fruitApi";

const SearchFruit = () => {
  const [fruit, setFruit] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const fruitData = await getFruitByName(searchTerm);
      setFruit(fruitData);
      setError(null);
    } catch (error) {
      setError(error.message);
      setFruit(null);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {error && <div>Error: {error}</div>}
      {fruit && (
        <div>
          <h2>{fruit.name}</h2>
          <p>ID: {fruit.id}</p>
          <p>Family: {fruit.family}</p>
          <p>Order: {fruit.order}</p>
          <p>Genus: {fruit.genus}</p>
          <h3>Nutritional Information</h3>
          <p>Calories: {fruit.nutritions.calories}</p>
          <p>Fat: {fruit.nutritions.fat}</p>
          <p>Sugar: {fruit.nutritions.sugar}</p>
          <p>Carbohydrates: {fruit.nutritions.carbohydrates}</p>
          <p>Protein: {fruit.nutritions.protein}</p>
        </div>
      )}
    </div>
  );
};

export default SearchFruit;

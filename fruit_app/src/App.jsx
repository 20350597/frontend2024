import React, { useState, useEffect } from "react";
import FruitCard from "./components/FruitCard";
import SearchFruit from "./components/SearchFruit";
import { getRandomFruit } from "./api/fruitApi";
import "./assets/CSS/index.css";

const App = () => {
  const [fruit, setFruit] = useState(null);
  const [randomFruit, setRandomFruit] = useState(null);

  useEffect(() => {
    getRandomFruit().then((data) => setRandomFruit(data));
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Fruit Nutrition App</h1>
      <div className="row justify-content-center mb-4">
        <div className="col-md-6">
          <div className="card p-3">
            <h4 className="card-title text-center">Search Fruit</h4>
            <SearchFruit setFruit={setFruit} />
          </div>
        </div>
      </div>
      {fruit && (
        <div className="row justify-content-center mb-4">
          <div className="col-md-6">
            <FruitCard fruit={fruit} />
          </div>
        </div>
      )}
      {randomFruit && (
        <div className="row justify-content-center mt-4">
          <div className="col-md-6">
            <h4 className="text-center">Random Fruit</h4>
            <FruitCard fruit={randomFruit} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

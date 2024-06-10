import React, { useState } from "react";
import QuoteList from "./components/QuoteList";
import HouseList from "./components/HouseList";
import SearchCharacter from "./components/SearchCharacter";
import SearchHouse from "./components/SearchHouse";
import "./assets/CSS/index.css";

const App = () => {
  const [quotes, setQuotes] = useState([]);
  const [houses, setHouses] = useState([]);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Game of Thrones App</h1>

      {/* Barras de búsqueda */}
      <div className="row justify-content-center mb-4">
        <div className="col-md-6 mb-4">
          <div className="card p-3">
            <h4 className="card-title text-center">Search Character</h4>
            <SearchCharacter setQuotes={setQuotes} />
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card p-3">
            <h4 className="card-title text-center">Search House</h4>
            <SearchHouse setHouses={setHouses} />
          </div>
        </div>
      </div>

      {/* Resultados de búsqueda */}
      <div className="row">
        <div className="col-md-6">
          <QuoteList quotes={quotes} />
        </div>
        <div className="col-md-6">
          <HouseList houses={houses} />
        </div>
      </div>
    </div>
  );
};

export default App;

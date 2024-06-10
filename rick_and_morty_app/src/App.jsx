import React, { useState, useEffect } from "react";
import CharacterCard from "./components/CharacterCard";
import LocationCard from "./components/LocationCard";
import SearchCharacter from "./components/SearchCharacter";
import SearchLocation from "./components/SearchLocation";
import { getRandomCharacter, getRandomLocation } from "./api/rickandmortyapi";
import "./assets/css/index.css";
import Swal from "sweetalert2";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [locations, setLocations] = useState([]);
  const [randomCharacter, setRandomCharacter] = useState(null);
  const [randomLocation, setRandomLocation] = useState(null);

  useEffect(() => {
    // Cargar personaje aleatorio al montar el componente
    getRandomCharacter().then((character) => {
      setRandomCharacter(character);
    });

    // Cargar área aleatoria al montar el componente
    getRandomLocation().then((location) => {
      setRandomLocation(location);
    });
  }, []);

  const handleReload = () => {
    setCharacters([]);
    setLocations([]);
    getRandomCharacter().then((character) => {
      setRandomCharacter(character);
    });
    getRandomLocation().then((location) => {
      setRandomLocation(location);
    });
    Swal.fire("Page Reloaded", "The page has been reloaded successfully!", "success");
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center shadow p-3 mb-5 rounded">Rick And Morty</h1>

      {/* Botón de recarga */}
      <div className="text-center mb-4">
        <button className="btn btn-dark" onClick={handleReload}>
          <div className="btninner">Reload Page</div>
        </button>
      </div>

      {/* Barras de búsqueda */}
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card p-3">
            <h4 className="card-title text-center">Search Character</h4>
            <SearchCharacter setCharacters={setCharacters} />
          </div>
        </div>
        <div className="col-md-5">
          <div className="card p-3">
            <h4 className="card-title text-center">Search Location</h4>
            <SearchLocation setLocations={setLocations} />
          </div>
        </div>
      </div>

      {/* Resultados de la búsqueda de personajes */}
      <div className="row mt-4">
        {characters.map((character, index) => (
          <CharacterCard key={index} character={character} />
        ))}
      </div>

      <hr className="my-4" />

      {/* Resultados de la búsqueda de ubicaciones */}
      <div className="row">
        {locations.map((location, index) => (
          <LocationCard key={index} location={location} />
        ))}
      </div>

      {/* Sección de personaje aleatorio */}
      {randomCharacter && (
        <div className="col-md-6 align-center">
          <h4>Random Character</h4>
          <br /><br />
          <CharacterCard character={randomCharacter} />
        </div>
      )}

      {/* Sección de área aleatoria */}
      {randomLocation && (
        <div className="col-md-6">
          <br /> <br />
          <h4>Random Location</h4>
          <LocationCard location={randomLocation} />
        </div>
      )}
    </div>
  );
};

export default App;

import React from "react";

const LocationCard = ({ location }) => {
  return (
    <div className="card m-2" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{location.name}</h5>
        <p className="card-text">Type: {location.type}</p>
        <p className="card-text">Dimension: {location.dimension}</p>
      </div>
      <div class="card-body">
  </div>
    </div>
  );
};

export default LocationCard;

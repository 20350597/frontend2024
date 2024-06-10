import React from "react";

const FruitCard = ({ fruit }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{fruit.name}</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Family: {fruit.family}</li>
          <li className="list-group-item">Genus: {fruit.genus}</li>
          <li className="list-group-item">Order: {fruit.order}</li>
          <li className="list-group-item">Calories: {fruit.nutritions.calories}</li>
          <li className="list-group-item">Fat: {fruit.nutritions.fat}</li>
          <li className="list-group-item">Sugar: {fruit.nutritions.sugar}</li>
          <li className="list-group-item">Carbohydrates: {fruit.nutritions.carbohydrates}</li>
          <li className="list-group-item">Protein: {fruit.nutritions.protein}</li>
        </ul>
      </div>
    </div>
  );
};

export default FruitCard;

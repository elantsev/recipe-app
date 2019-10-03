import React from "react";
import "./Recipies.css";
import s from "./Recipies.module.css";

const Recipies = ({ recipes }) => {
  return (
    <div className="flex">
      {recipes.map(({ title, recipe_id, image_url, publisher }) => (
        <div key={recipe_id} className="item">
          <img src={image_url} alt={title} />
          <h5>{title}</h5>
          <p> {`Publisher: ${publisher}`}</p>
          <button className="recipe_buttons">View Recipe</button>
        </div>
      ))}
    </div>
  );
};

export default Recipies;

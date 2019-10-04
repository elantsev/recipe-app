import React from "react";
import { Link } from "react-router-dom";
import "./Recipies.css";

function Recipies({ recipes }) {
  return (
    <div className="flex">
      {recipes.map(({ title, recipe_id, image_url, publisher }) => (
        <div key={recipe_id} className="item">
          <img src={image_url} alt={title} />
          <h5>{title}</h5>
          <p> {`Publisher: ${publisher}`}</p>
          <button className="recipe_buttons">
            <Link
              to={{
                pathname: `/recipe/${recipe_id}`,
                state: { recipe: title }
              }}
            >
              View Recipe
            </Link>
          </button>
        </div>
      ))}
    </div>
  );
}

export default Recipies;

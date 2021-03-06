import React from "react";

const Form = ({ getRecipe }) => {
  return (
    <form onSubmit={getRecipe} style={{ marginBottom: "2rem" }}>
      <input className="form__input" type="text" name="recipeName" />
      <button className="form__button" type="submit">
        Search
      </button>
    </form>
  );
};

export default Form;

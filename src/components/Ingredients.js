import React, { useEffect } from "react";

const Ingredients = ({ ingredients }) => {
  const url = "https://www.thecocktaildb.com/images/ingredients/";

  return (
    <>
      <ul>
        <b> Ingredients: </b>
        {ingredients[0] &&
          ingredients.map((ingredient, index) => {
            return (
              <li key={index}>
                {ingredient}
                <img src={`${url}${ingredient}.png`} alt="" />
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Ingredients;

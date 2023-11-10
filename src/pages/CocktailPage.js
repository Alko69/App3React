import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Ingredients from "../components/Ingredients";

const CocktailPage = () => {
  const [cocktailInfos, setCocktailInfos] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const { id } = useParams();
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setCocktailInfos(data.drinks[0]);
    };
    fetchData();
  }, [url]);

  // on met tous les ingrédients dans le tableau pour ensuite les envoyer dans leur propre component
  useEffect(() => {
    if (cocktailInfos) {
      for (var i = 1; i < 16; i++) {
        const query = `strIngredient${i}`;
        if (cocktailInfos[query]) {
          setIngredients((prevIngredients) => [
            ...prevIngredients,
            cocktailInfos[query],
          ]);
        }
      }
    }
  }, [cocktailInfos]);

  const {
    strDrink: name,
    strDrinkThumb: image,
    strInstructions: recipe,
  } = cocktailInfos;

  return (
    <>
      {cocktailInfos.strDrink && (
        <div className="singleCocktail">
          <div className="cardTop">
            <img src={image} alt="" />
          </div>
          <div className="cardBot">
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
              {name}
            </h2>
            <p>
              <b>Recette:</b> {recipe}
            </p>
            <Ingredients ingredients={ingredients} />
          </div>
        </div>
      )}
    </>
  );
};

export default CocktailPage;

import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useFavorites } from "../context";

const SingleCocktail = (cocktail) => {
  const favorites = useFavorites();

  const { strDrink: name, strDrinkThumb: image, idDrink: id } = cocktail;

  const isFavorite = favorites.favorites.some(
    (favorite) => favorite.idDrink === cocktail.idDrink
  );

  function toggleFavorite(cocktail) {
    if (
      favorites.favorites.some(
        (favorite) => favorite.idDrink === cocktail.idDrink
      )
    ) {
      favorites.removeFavorite(cocktail.idDrink);
    } else {
      favorites.addFavorite(cocktail);
    }
  }

  return (
    <div className="card">
      <div className="cardTop">
        <img src={image} alt="" />
      </div>
      <div className="cardBot">
        <h3>{name}</h3>
        <div className="cardPlus">
          <Link to={`/cocktail/${id}`}>
            <button>Details</button>
          </Link>
          {isFavorite ? (
            <AiFillStar
              className="icon"
              onClick={() => toggleFavorite(cocktail)}
            />
          ) : (
            <AiOutlineStar
              className="icon"
              onClick={() => toggleFavorite(cocktail)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleCocktail;

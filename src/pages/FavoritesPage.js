import { useFavorites } from "../context";
import SingleCocktail from "../components/SingleCocktail";

const FavoritesPage = () => {
  const favorites = useFavorites();

  return (
    <>
      <h1 style={{ color: "beige" }}>Favoris</h1>

      <div className="cocktailList">
        {favorites.favorites.length !== 0 ? (
          favorites.favorites.map((favorite) => {
            return <SingleCocktail key={favorite.idDrink} {...favorite} />;
          })
        ) : (
          <h3 style={{ color: "beige" }}> Pas de favoris... ajoutez-en !</h3>
        )}
      </div>
    </>
  );
};

export default FavoritesPage;

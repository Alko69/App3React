import SingleCocktail from "./SingleCocktail";

const CocktailsList = ({ cocktails }) => {
  return (
    <div className="cocktailList">
      {cocktails &&
        cocktails.map((cocktail) => {
          return <SingleCocktail key={cocktail.idDrink} {...cocktail} />;
        })}
    </div>
  );
};

export default CocktailsList;
